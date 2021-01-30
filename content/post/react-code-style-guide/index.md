---
title: React 代码规范
date: 2020-12-16 01:55:12
description: React 相关的基本代码规范汇总，不定期更新
tags:
  - Reactw
---

## 代码风格

* 文本换行方式使用 LF
* 代码缩进使用两个空格，不使用 Tab
* 所有文件最后留一行空行
* 使用单引号，需要拼接字符串时使用反引号
* 行尾加分号
* 对象数组等加逗号，包括最后一行

## 文件及变量命名

* 组件文件名与组件名保持一致，采用帕斯卡命名法
* 或文件夹名与组件名保持一致，文件名为 `index.(jsx|tsx)`
* 一个文件仅包含一个组件
* JavaScript 变量采用驼峰命名法
* CSS 的 className 采用 BEM 命名规则
* 如果使用 CSS Modules，在 JSX 中 className 使用驼峰命名规则（因为本质上还是 JavaScript 变量）
* 某个组件的 CSS 文件，名称与 JSX 文件名保持一致

## Class 组件

Class 组件内的内容应按照一下顺序排列：

* static propTypes
* static defaultProps
* static getDerivedStateFromProps
* static getDerivedStateFromError
* 其他 static 方法
* constructor
* 以 `_` 开头的私有方法（假装私有）或 tsx 中的 private 方法
* ~~componentWillMount / UNSAFE_componentWillMount~~ （不建议使用）
* componentDidMount
* ~~componentWillReceiveProps / UNSAFE_componentWillReceiveProps~~ （不建议使用）
* shouldComponentUpdate
* ~~componentWillUpdate / UNSAFE_componentWillUpdate~~ （不建议使用）
* componentDidUpdate
* componentWillUnmount
* componentDidCatch
* 以 `handle` 开头的事件处理方法，如 `handleBtnClick`
* 以 `on` 开头的事件处理方法，如 `onFormSubmit`，建议用 `handle`
* 用于 render 的 getter 方法，如 `getTotalPrice`
* `render` 开头的方法，如 `renderNavbar`
* render



定义方法时使用箭头函数，避免在 JSX 或构造函数中使用 `.bind(this)`

建议将事件监听的方法都以 `handle` 开头命名，将事件监听方法传给组件时属性名以 `on` 开头，如：

```jsx
<NumberInpput onChange={handleNumberChange} />
```

> 如无特殊情况，建议使用函数式组件 + Hooks

## JSX

* props 属性名采用驼峰命名法
* prop 值为 `true` 时，省略值，如 `<Input disabled />`
* prop 值使用双引号，如 `<Button type="primary">Primary Button</Button>`
* 有多个 prop 时，每个 prop 独占一行，`>` 或 `/>` 也独占一行
* 没有子元素时使用自闭合标签，自闭合标签前留一个空格
* 优先使用 `React.Fragment` 而不是无意义的标签

## 状态管理

* 始终坚持单向数据流和单一数据源的原则
* 状态不要通过 props 多层传递，如需经过多层传递，建议使用 Context 或状态管理库

## Hooks

* 严格遵守 `eslint-plugin-react-hooks` 中的规则
* 代码以业务逻辑划分区块，而不是以 Hooks 种类划分

## 样式

* 不建议使用行内样式
* 不建议直接在 JSX 文件中导入 CSS 文件
* 建议使用 CSS Modules 或 CSS in JS 方案

> 更多可参考 [在 React 中使用 CSS](/css-in-react)

## 其他

* 建议使用路由懒加载，`React.lazy(() => import('./pages/User'))`，如需 SSR，建议使用 `@loadable/component`
* 大部分业务场景都不需要第三方状态管理库，Context 足以满足绝大部分需求