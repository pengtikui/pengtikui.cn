---
title: 第13期：强类型的多态组件
date: 2023-02-11
description: 学习一下怎么写一个强类型的多态组件，玩一下类型体操。
---

![](/static/weekly/issue-13-cover.jpg)

多态是一种常见的设计模式，是指为不同数据类型的实体提供统一的接口。在 React 中，多态组件也是常用的组件复用的模式，比如有个 Button 组件默认渲染为 `button` 标签，但有时我们希望它渲染为 `a` 标签或 React Router 的 `Link` 组件，这时就可通过某个 prop 传递一些参数来改变渲染的 DOM 元素。

常见的组件库如 [Mantine](https://mantine.dev/) 和 [Chakra UI](https://chakra-ui.com/) 都对多态组件支持的很好，多数组件都可以通过传一个 `as` prop 来改变渲染的 DOM 元素，比如 `<Button as="a">Link</Button>` 就可以将 Button 组件渲染为 `a` 标签。另外 [MUI](https://mui.com/) 也有多态的能力，不过它的 prop 叫做 `component`。

要实现一个多态组件也很简单，无非是拿到传进来的 prop，根据 prop 去渲染就好了，最简单的实现如：

```jsx
const Button = ({ as, children, ...rest }) => {
  const Component = as || 'button';

  return <Component {...rest}>{children}</Component>;
};
```

然而要用 TypeScript 实现一个强类型的多态组件，要考虑的东西就比较多了。还是以上面的 Button 组件为例：

- 传入的 `as` 只能是合法的 HTML 标签字符串或 React 组件；
- 传入的其他 props 也需要校验，比如 `as` 为 `a` 时可以传入 `href`，而 `button` 则不行；`as` 为 React Router 的 `Link` 组件时，`to` 又是必需的；
- 还要考虑可传入 `ref` 时的情况；

对于以上的所有问题，freeCodeCamp 有一篇极其详尽的免费教程 [Intermediate TypeScript and React Handbook – How to Build Strongly Typed Polymorphic Components](https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/)，可以来学习一下。

<hr />

## 技术

#### [Authn 与 authz：它们有什么不同？](https://www.cloudflare.com/zh-cn/learning/access-management/authn-vs-authz/)

AuthN 和 AuthZ 分别是 Authentication 和 Authorization 的缩写，傻傻分不清楚。前者是指用户认证，比如是否登录，后者是指用户授权，是指用户是否有权限访问某个资源。

#### [CDN Up and Running](https://github.com/leandromoreira/cdn-up-and-running)

通过从零构建一个 CDN 的方式来了解和学习 CDN 相关内容。

## 开源

#### [Yao](https://github.com/YaoApp/yao)

Yao 是一款使用 Golang 编写的高性能应用引擎，可用于快速开发业务系统、管理后台、低代码平台等。与其他拖拽式的低代码平台不同的是它主要通过编写 JSON 文件来生成页面，并且生成的页面体验很不错。

#### [Lucide](https://github.com/lucide-icons/lucide)

Lucide 是一组高质量的开源图标，支持多种前端框架，fork 自 [Feather](https://github.com/feathericons/feather)，所有人都可向该项目贡献。

#### [Tabler Icons](https://github.com/tabler/tabler-icons)

Tabler Icons 也是一组高质量的开源图标，与 Lucide 风格类似，但数量远多于 Lucide。

## 工具

#### [图压](https://tuya.xinxiao.tech/)

一款简单易用的图片压缩软件，支持 macOS 和 Windows 系统，在第 10 期推荐的像素丢失的灵感就来源于图压。另外开发图压的[公司](https://xinxiao.tech/)也有点意思，看上去是个小而美的公司，其他产品做的也都挺不错。

## 其他

#### [ChatGPT 诞生记：先捞钱，再谈理想｜ OpenAI 翻身史](https://www.bilibili.com/video/BV1Te4y1w7D6)

最近 ChatGPT 特别火，这篇视频讲叙了 ChatGPT 的诞生以及其背后的 OpenAI 公司的发展历程、成果和争议。
