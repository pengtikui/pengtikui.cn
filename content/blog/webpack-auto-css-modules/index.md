---
title: webpack 中实现自动识别 CSS Modules
date: 2020-03-06 12:07:03
description: 自动识别导入的 CSS 文件是否需要启用 CSS Modules，不需要给文件名加特殊标记。
tags:
  - webpack
  - React
  - CSS Modules
---

## 缘由

首先解释一些这个标题是什么意思。最近 [UmiJS](https://umijs.org/) 发布了 3.0 版本，简单看了一下介绍，发现了一个很有意思的功能：

> 比如 **CSS Modules 的自动识别**，不用 `.module.css` 后缀，不会再配 `disableCSSModules` 和 `cssModulesWithAffix`，**一个文件是否为 CSS Modules 由引用他的方式决定**，
>
> ```javascript
> // 是 css modules
> import styles from './a.css';
> 
> // 不是 css modules
> import './a.css';
> ```

标题所说的自动识别 CSS Modules 就是这个功能，通过 import 的方式来区分是否启用 CSS Modules。

在 React 的项目中处理 CSS 时，如果不使用 CSS in JS 的方案，一般会直接 `import` 一个 CSS 文件进来，或者使用 [CSS Modules](https://github.com/css-modules/css-modules) 来解决作用域的问题。通常我们会把直接 `import` 和 CSS Modules 两种方案混合使用，这时候 webpack 在处理 CSS 文件时就需要区分哪些文件启用 CSS Modules，哪些不启用。在 Create React  App 中是通过文件后缀名来区分，如 `.module.css` 的文件就启用，`.css` 的文件就不启用。

虽然通过后缀名区分能够解决问题，但是总觉得不够优雅。当看到 UmiJS 3.0 的解决方案时眼前一亮，很不错，但又好奇它是怎么实现的，于是就去看了一下 UmiJS 的源码，搞清楚了它是怎么实现的。

## 实现

我们能看到直接导入和使用 CSS Modules 时导入的语句是有区别的，所以我们可以写一个 Babel 插件来区分这两种导入方式。

首先看一下这两种语句经过 Babel 转成 AST 后的区别：

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

很明显两者的 `specifiers` 字段是有区别的，那就可以通过这个字段和文件后缀名（毕竟不能处理非 CSS 文件）来识别，并对需要启用 CSS Modules 的 CSS 文件加一个标志，Babel 插件代码如下：

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

通过这个插件给启用 CSS Modules 的 CSS 文件名加了个 `?css_modules` 后缀。

在 Babel 配置文件中配置上这个插件，然后开始配置 webpack 的 loader，是否开启 CSS Modules 由 `css-loader` 的 `modules` 决定，简略的配置如下：

```javascript
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

如上给 CSS 配置了两条规则，第一条启用 CSS Modules，第二条不启用。因为启用 CSS Modules 的规则仅多了 `resourceQuery: /css_modules/`，所以要把它放在前面。其中 `resourceQuery` 用于匹配文件路径末尾的 query。

Less 和 Sass 等的配置同理，多加一个 loader 即可。

这样就实现了自动识别 CSS Modules 的功能，实现难度不大，但很巧妙很实用。

## 参考

* [UmiJS 中 Babel 插件的源码](https://github.com/umijs/umi/tree/master/packages/babel-plugin-auto-css-modules)
* [如何创建 Babel 插件](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)
* [AST explorer](https://astexplorer.net/)
* [css-loader 中配置 CSS Modules](https://github.com/webpack-contrib/css-loader#modules)
* [CSS Modules 文档](https://github.com/css-modules/css-modules)
* [webpack loader 配置](https://webpack.js.org/configuration/module/#rule)
* [Create React App 中的 CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
* [Umi 3 的介绍](https://github.com/sorrycc/blog/issues/92)
