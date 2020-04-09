---
title: 在 React 中使用 CSS
date: 2020-04-08 11:08:02
description: React 中使用 CSS 的几种常见方式汇总
tags:
  - React
  - CSS
  - CSS Modules
  - CSS in JS
---

由于 React 本身没有对 CSS 做特殊的支持或处理，因此在 React 中写 CSS 时可以使用常规的在普通 HTML 中使用的行内样式或 class 选择器，也可以使用各种社区解决方案，如 CSS Modules、CSS in JS 等。本文简单介绍一下各种方案。

## 1. 行内样式

与在普通 HTML 中写行内样式一样，添加一个 style 属性即可。但不同的是，在 HTML 中 style 的属性值是字符串，而在 JSX 中则是一个对象：

```html
<!-- HTML -->
<h1 style="color: red">Heading 1</h1>
```

```jsx
// JSX
<h1 style={{ color: 'red' }}>Heading 1</h1>
```

此外，JSX 中 style 对象的属性采用小写驼峰命名的方式，如 `background-color` 需要写为 `backgroundColor`。一般不建议在项目中大量使用这种方法。

## 2. class 选择器

在 JSX 中使用 class 选择器时，需要将 `class` 写为 `className`，值还是一个字符串，多个 class 时使用空格隔开。

```jsx
<h1 className="h1 text-center">Heading 1</h1>
```

在 React 16 及以上的版本中，可以把 `className` 写为 `class` 了，但为了避免与 JS 中的 `class` 关键字混淆，还是建议写为 `className` 吧。

当有多个 class，并且需要动态变化时，可以使用 [classnames](https://github.com/JedWatson/classnames) 来简化代码。

至于 CSS 文件的处理，可以在 HTML 中直接引入，比如使用 bootstrap 时，可以直接在 HTML 中引入一个 CDN 地址；当使用自己编写的 CSS 文件时，建议将 CSS 文件对应 React 组件进行拆分，并在组件文件中使用 `import` 来导入，然后在 webpack 中配置 css-loader 进行处理。

```
src
 |-- components
          |-- Header
                |-- index.jsx
                |-- index.css
          |-- Footer
                |-- index.jsx
                |-- index.css
```

```jsx
// src/components/Header/index.jsx
import React from 'react';
import './index.css';

const Header = () => {
  return (
    <h1 className="header">Heading 1</h1>
  );
};

export default Header;
```

```css
/* src/components/Header/index.css */
.header {
  color: #333;
}
```

这里需要注意，**组件拆分不等于样式隔离**。当一个页面上同时引用多个组件时，会同时引用这些组件的 CSS 文件，因为原生 CSS 没有作用域的概念，所有 class 全局有效，所以这些 CSS 可能会发生冲突；如果配置了代码分割，在页面切换时，也可能会出现多个页面间的样式冲突，因为单页面应用本质上只是一个页面，当从 A 页面切换到 B 页面时加载了 B 页面的 CSS 文件，但并没有销毁 A 页面的 CSS，两者是共存的。

为了解决样式作用域的问题，可以使用 BEM 等命名规则来尽可能地避免命名重复，但这不能从根本上解决问题。CSS Modules 的诞生就是为了解决这个问题的。

## 3. CSS Modules

CSS Modules 是通过构建工具来实现 CSS 作用域的效果。原理很简单，就是把 class 名和动画名按照一定的规则做修改，使得 class 名全局唯一，从而避免命名冲突的问题。

```css
/* App.css */

/* 编译前 */
.home {
  color: #333;
}
/* 编译后 */
.App_home__T45xz {
  color: #333;
}
```

使用也很简单，以 webpack 为例，在 css-loader 的配置项中添加一条 `modules: true` 即可。在代码中使用的时候也有点变化：

```jsx
import React from 'react';
import styles from './App.css';

const App = () => {
  return (
    <div className={styles.home}>App</div>
  );
};

export default App;
```

导入的 `styles` 是个对象，是原 class 名和编译后 class 名的映射，如：`{ home: 'App_home__T45xz' }`。

除了修改 class 名，CSS Modules 还有 class 组合、导入其他文件中的 class 等高级功能，并且可以通过 css-loader 的配置项来自定义命名规则等，具体内容可以参考 [css-loader 的文档](https://github.com/webpack-contrib/css-loader#modules)。

不论是常规的导入一个 CSS 文件，还是使用 CSS Modules，都和 Less、Sass 等不冲突，在 webpack 配置中的 css-loader 前加一个对应的 loader 即可。

## 4. CSS in JS

前面的几种方法都比较常规，都没有脱离常规的 HTML + CSS 的心智模型。

在 jQuery 时代的 Web 开发中，我们注重“关注点分离” - 将 HTML、CSS 和 JavaScript 拆分开，互不耦合。但是 React 通过 JSX 把 HTML 和 JavaScript 结合到了一起，更注重组件化。那有没有用 JS 的方式来写 CSS 的解决方案，来实现 All in JS 呢？

CSS in JS 就是通过 JS 的方式来写 CSS 的解决方案的统称，不特指某一种解决方案。由于方案众多，本文只介绍两个。

### 4-1. styled-components

styled-components 使用模板字符串语法将 CSS 融入到 React 的组件系统，通过 JS 实现一些 CSS 原本不具备的功能，比如变量、循环和函数等。虽然这些功能可以通过 Less 或 Sass 实现，但 styled-components 的这些功能是通过 JS 实现的，学习成本很低，甚至没有学习成本。

推荐你在开始使用之前配置 [`babel-plugin-styled-components`](https://github.com/styled-components/babel-plugin-styled-components) Babel 插件，它可以提供一些优化和 SSR 的支持，不过这个插件是可选的。

#### 基本用法

```jsx
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #333;
`;

const App = () => (
  <Title>Heading 1</Title>
);

export default App;
```

在你定义样式的时候，其实是生成了一个包含样式的 React 组件。

#### 动态样式

既然生成的是个 React 组件，那就可以传递 props，样式中可以读取到这些 props 值，并根据 props 值动态调整样式：

```jsx
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #333;
  font-weight: ${props => props.bold ? 700 : 400};
`;

const App = () => (
  <Title bold={true}>Heading 1</Title>
);

export default App;
```

#### 扩展样式

上面的例子都是给一个 HTML 标签添加样式，也可以给一个组件添加样式，并且会覆盖已有的样式：

```jsx
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #333;
  font-weight: ${props => props.bold ? 700 : 400};
`;

const ItalicTitle = styled(Title)`
  font-style: italic;
`;

const App = () => (
  <>
    <Title bold={true}>Heading 1</Title>
    <ItalicTitle bold={true}>Heading 1</ItalicTitle>
  </>
);

export default App;
```

如果你不想修改样式，而是想修改 HTML 标签，可以传一个 `as` prop，值可以是一个 HTML 标签的字符串，也可以是一个 React 组件。

```jsx
<Title as={'h2'} bold={true}>Heading 1</Title>
```

这样渲染出来的 DOM 节点就是 h2 标签。

更多更详细的功能可以查看 [styled-components 的官方文档](https://styled-components.com)。

### 4-2. styled-jsx

从名字能看出来，styled-components 是将样式与组件绑定，而 styled-jsx 则更进一步，直接将样式绑定到 JSX 中，作用域的控制粒度更细。

在开始使用之前需要先在 Babel 配置中添加 `styled-jsx/babel` 插件。

#### 基本用法

```jsx
import React from 'react';

const App = () => {
  return (
    <div>
      <h1>
        Heading 1
        <style jsx>{`
          h1 {
            color: red;
          }
        `}</style>
      </h1>
    </div>
  );
};

export default App;
```

现在 style 标签内定义的 h1 标签选择器的样式仅在包裹它的 h1 标签内生效，对外部再添加的 h1 标签不会生效。

#### 动态样式

既然样式写在 JSX 里面，那它就能读取到当前组件的 props 和 state，进而根据状态来动态调整样式：

```jsx
import React, { useState } from 'react';

const App = () => {
  const [bold, setBold] = useState(true);
  return (
    <div>
      <h1>
        Heading 1
        <style jsx>{`
          h1 {
            color: red;
            font-weight: ${bold ? 700 : 400};
          }
        `}</style>
      </h1>
      <button onClick={() => setBold(!bold)}>Toggle</button>
    </div>
  );
};

export default App;
```

#### 全局样式

总会有些情况我们需要写一个全局样式，需要写全局样式时，给 style 标签添加个 `global` 属性即可：

```jsx
<div>
  <style jsx global>
    body {
      margin: 0;
      padding: 0;
    }
  </style>
</div>
```

也可以给某个 class 添加个 `:global()`，仅对这一个 class 全局化，CSS Modules 中也有这种用法：

```jsx
<div>
  <style jsx>
    :global(.header) {
      color: #333;
    }
  </style>
</div>
```

更多用法和配置可以查看 [styled-jsx 的官方文档](https://github.com/zeit/styled-jsx)。

## 5. 最后

有些人也会把 CSS Modules 归类为 CSS in JS，但是它并没有脱离 HTML 和 CSS 分离的心智模型，并且编译后没有 runtime，本文就不把它归类为 CSS in JS 了。

CSS in JS 解决方案众多，虽然用法不同，但基本思路都是将 JS 的能力赋予 CSS，其最大收益是可以实现动态调整样式，在切换主题、Dark Mode 等类似需求中尤其好用。由于他们在编译后也都存在 runtime，所以相较于传统方案性能会有所降低。

## 6. 参考链接

* [classnames](https://github.com/JedWatson/classnames)
* [React 代码分割](https://reactjs.org/docs/code-splitting.html)
* [BEM 命名规则](http://getbem.com)
* [CSS Modules](https://github.com/css-modules/css-modules)
* [css-loader](https://github.com/webpack-contrib/css-loader#modules)
* [模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)
* [styled-components](https://styled-components.com)
* [styled-jsx](https://github.com/zeit/styled-jsx)
