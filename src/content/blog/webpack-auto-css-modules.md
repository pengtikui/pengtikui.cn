---
title: webpack 中实现自动识别 CSS Modules
date: 2020-03-06 12:07:03
description: 自动识别导入的 CSS 文件是否需要启用 CSS Modules，不需要给文件名加特殊标记。
tags:
  - webpack
  - React
  - CSS Modules
---

## 背景

在 React 项目中使用 CSS 时，如果不使用 CSS in JS 的方案，一般会直接在 JS 文件中导入一个 CSS 文件，比如 `import './index.css'`，但这样 CSS 会在全局作用域内都有效，所以我们会使用 [CSS Modules](https://github.com/css-modules/css-modules) 来解决作用域的问题，使用方法如下：

```jsx
import styles from './index.css';

const App = () => (
  <div className={styles.App}>App</div>
);
```

其原理就是将 CSS 文件中的每个 className 按照一定的规则映射为另一个唯一的字符串，以保证 className 在全局作用域内不会重复和冲突。配置方法也很简单，只需要在 webpack 的 css-loader 中添加一个 `modules` 配置项即可，具体请参考 [css-loader 的文档](https://github.com/webpack-contrib/css-loader#modules)。

有时候我们需要使某个 CSS 文件全局有效，虽然 CSS Modules 也提供了全局有效的方案，但不如直接 `import './foo.css'` 来的爽快。在 Create React App 中提供了一种解决方案，以 `.module.css` 为后缀的文件会启用 CSS Modules，以 `.css` 为后缀的文件不启用，很多脚手架或工具也都采用了这种方案。

## 缘由

用后缀名区分的方案一直没觉得有什么不妥，只是文件名有点长，不够优雅。直到前几天看到 [Umi](https://umijs.org/) 发布了 3.0 版本，出于好奇随便翻了翻文档，发现了一个特别有意思的功能：

> Umi 会自动识别 CSS Modules 的使用，你把他当做 CSS Modules 用时才是 CSS Modules。
>
> 比如：
>
> ```javascript
> // CSS Modules
> import styles from './foo.css';
> 
> // 非 CSS Modules
> import './foo.css';
> ```

这个功能很巧妙啊，符合直觉又简单易用。又是出于好奇，看了一下 Umi 的源码，探究一下这是怎么实现的。

## 实现

通过翻看 Umi 的源码发现，实现这个功能并不复杂，很简单巧妙。

我们可以看到是否使用 CSS Modules 时，两种导入方式不一样，所以我们可以通过 Babel 来将两者做一个区分。

Babel 的运行流程主要分三个阶段：

1. 解析，将源码转成 AST（抽象语法树）
2. 转换，对 AST 的节点进行增加、删除或修改
3. 生成，将 AST 转回源码

Babel 插件工作在第二个阶段，根据需求访问不同类型的 AST 节点，并对其进行增删改。所以我们可以编写一个插件来识别两种导入方式，并添加标识以便 webpack 中进行区分。

具体如何编写一个 Babel 插件不在本文的讨论范围内，你可以查看文末的参考链接进行了解和学习。

我们先打开 [AST explorer](https://astexplorer.net/) 对比两种语句的 AST 的区别，两者的 AST 如下：

```json
// import './index.css';

{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 21,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 20,
        "value": "./index.css",
        "raw": "'./index.css'"
      }
    }
  ],
  "sourceType": "module"
}
```

```json
// import styles from './index.css';

{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 13,
            "name": "styles"
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 32,
        "value": "./index.css",
        "raw": "'./index.css'"
      }
    }
  ],
  "sourceType": "module"
}
```

很明显两者的 `specifiers` 字段是有区别的，那就可以通过这个字段和文件后缀名（毕竟不能处理非 CSS 文件）来识别，并对需要启用 CSS Modules 的 CSS 文件加一个 query 参数，不能直接修改文件名，不然后面 webpack 就找不到文件了，Babel 插件代码如下：

```javascript
const { extname } = require('path');
const CSS_FILE_EXTENSIONS = ['.css', '.scss', '.sass', '.less'];

module.exports = () => {
  return {
    visitor: {
      ImportDeclaration(path) {
        const { specifiers, source } = path.node;
        const { value } = source;
        if (
          specifiers.length > 0
          && CSS_FILE_EXTENSIONS.includes(extname(value))
        ) {
          source.value = `${value}?css_modules`;
        }
      },
    },
  };
};
```

我们通过这个插件访问 AST 中类型为 `ImportDeclaration` 的节点，判断该节点的 `specifiers` 不为空且文件后缀名为样式文件时，在文件名后面添加一个 `?css_modules` query 参数。该参数用于后面在 webpack 中区分是否启用 CSS Modules。

在 Babel 配置文件中配置上该插件，然后开始配置 webpack 的 loader。我们在 webpack 配置的 `modules.rules.oneOf` 中添加了两条 CSS 相关的规则，两条规则的区别在于前者启用了 CSS Modules，并且规则里多了 `resourceQuery` 配置项，当匹配到第一条规则后就不会再向下匹配剩余的规则了。需要启用 CSS Modules 的 CSS 文件会匹配到第一条规则，不启用的会匹配到第二条。

因为 `test` 是用于匹配文件路径的，并不能匹配到路径 `?` 后的参数，所以需要使用 `resourceQuery` 来匹配 query 参数。注意 `resourceQuery` 配置的值要和 Babel 插件中添加的参数保持一致。

简略的配置如下：

```javascript
// webpack.config.js

module.exports = {
  modules: {
    rules: {
      oneOf: [
        {
          test: /\.css$/,
          resourceQuery: /css_modules/,
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
        },
      ],
    },
  },
};
```

Less 和 Sass 等的配置同理，多加一个相关的 loader 即可。

这样就实现了自动识别 CSS Modules 的功能，实现难度不大，但很巧妙很实用。

如果想在你的项目中使用这个 Babel 插件，可以直接安装 Umi 已经发布到 npm 的 [@umijs/babel-plugin-auto-css-modules](https://www.npmjs.com/package/@umijs/babel-plugin-auto-css-modules)，它可以通过 `flag` 配置项自定义 query 参数。

## 参考

* [Umi 中 Babel 插件的源码](https://github.com/umijs/umi/tree/master/packages/babel-plugin-auto-css-modules)
* [如何创建 Babel 插件](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)
* [AST explorer](https://astexplorer.net/)
* [css-loader 中配置 CSS Modules](https://github.com/webpack-contrib/css-loader#modules)
* [CSS Modules 文档](https://github.com/css-modules/css-modules)
* [webpack loader 配置](https://webpack.js.org/configuration/module/#rule)
* [Create React App 中的 CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
* [Umi 3 的介绍](https://github.com/sorrycc/blog/issues/92)
