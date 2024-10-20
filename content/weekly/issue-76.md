---
title: 第76期：聊聊 antd 和 shadcn/ui
date: 2024-10-20
description: 很有意思的俩项目
---

![](/static/weekly/issue-76-cover.jpg)

[antd](https://ant.design/) 和 [shadcn/ui](https://ui.shadcn.com/) 是 React 生态中两个很热门的组件库，它们俩都极具特色，是 React 组件库生态中的两个极端，也都挺有意思，今天就来聊聊它俩。

antd 是蚂蚁金服的开发 React 组件库，也是 React 生态中为数不多来自中国的项目，因此它具有强烈的“中国特色”：

一是它大而全，尽可能所有功能都有自己开发，像极了国内的各种平台型互联网产品。高内聚的同时，却又难耦合，无论是代码风格还是 UI 风格，都很难与社区其他组件兼容的很好，主题无论你怎么修改，页面都能看得出 antd 的影子，你很难跳出它设置的条条框框，另外国内其他组件库，如 Element、Arco 等都有 antd 的影子，天下一大抄；

二是极度追求易用性和开发体验，它的 API 设计风格与国外的其他组件库，如 MUI、Mantine 等，风格完全不同。以 Dropdown 组件为例，这种组件一般由触发显隐的按钮和下拉内容两部分组成，antd 把按钮作为 Dropdown 的 children，下拉内容以 props 的形式传入，比较符合直觉，也接近于真实的 DOM 结构，而其他组件库大多将按钮和下拉内容都作为 children 传入，MUI 更是需要开发自行设置 anchor 元素，很难理解这些歪果仁的脑回路，当然 antd 的形式牺牲了一些灵活性。

再来说说 shadcn/ui，它是最近一两年才火起来的组件库，像是 antd 的另一个极端。它自身没有组件，本质上是社区已有的 Headless 组件加上 Tailwind CSS 的组合，比如它大部分组件都是基于 Radix UI 实现的，使用的时候只需要把代码复制粘贴到自己项目中，也可以通过它的 CLI 工具自动帮你复制和安装依赖。

这种方式的好处是极高的灵活性，某个组件不满足你的需求时，你可以直接修改代码，甚至是用社区中的其他组件替代，同时也减少了造轮子。另外也给足了可定制空间，你可以在 Tailwind CSS 的基础上定制自己的风格，不会让自己的产品是千篇一律的风格，目前社区中已有不少基于 shadcn/ui 的组件，都各具特色。

当然这种方式也有坏处，一是 Headless 组件的 API 设计一般都很零碎，使用时需要写大量的模版代码，实现同样的功能，代码行数可能是 antd 的好几倍，二是不具备可升级性，代码一旦复制到你的项目中，就需要你自行维护和更新了。

这俩组件库具体该怎么选，还是要根据项目的实际情况和个人喜好来，antd 更适合偏中后台的企业应用，对样式和交互的要求不高，shadcn/ui 更适合偏 C 端的、需要高度定制的场景。

最后吐槽一下 antd，5.0 使用 CSS in JS 方案真是一大败笔，并且积累的历史包袱太多了，很多代码也都不规范、不合理，需要一次大的重构了。

<hr />

## 技术

#### [bolt.new](https://bolt.new/)

StackBlitz 出品的 AI 开发工具，通过几句话就可以给你创建一个项目，与 Vercel 的 [v0](https://v0.dev/) 类似，但是 bolt.new 支持全栈应用开发，并且提供了在线的开发环境。

#### [The Interactive Guide to Rendering in React](https://ui.dev/why-react-renders)

一篇可交互的、讲解 React 渲染机制的文章，内容包括初始渲染、状态变化导致的重新渲染等，可以帮助 React 开发者更好的理解 React 的渲染过程和背后的原理。

#### [New sidebar component](https://ui.shadcn.com/docs/components/sidebar)

在实际项目中，侧边栏是个很常用但又比较复杂的组件，需要考虑很多细节，比如展开/折叠、嵌套、多层级等，shadcn/ui 提供了一个新的侧边栏组件，可组合、可定制、可自定义主题，支持了绝大数的场景，并且也提供了多个 Blocks 可以直接复制使用。

## 开源

#### [Go Blueprint](https://github.com/Melkeydev/go-blueprint)

Go Blueprint 是一个用于 Golang 项目的 CLI 工具，可以快速创建和启动项目，支持目前主流的框架和数据库，并且提供了 Blueprint UI 以可视化的方式使用该工具。

#### [destr](https://github.com/unjs/destr)

更快、更安全的 `JSON.parse` 替代方案，对于输入的字符串为非 JSON 的情况，它的性能比 `JSON.parse` 更好，且不会抛出错误，另外它是类型安全的，支持泛型。

## 设计

#### [Aceternity UI](https://ui.aceternity.com/)

Aceternity UI 是一个理念类似于 shadcn/ui 的组件库，通过复制粘贴代码的方式来使用，基于 Tailwind CSS 和 Framer Motion 实现，不过它更偏向于用于构建 Landing Page 类的页面，每个组件都设计得很精致，并且有很丝滑的动画效果，同时也提供付费的模版。
