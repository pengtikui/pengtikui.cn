---
title: 第70期：Lexical - 编辑器中的 React
date: 2024-08-18
description:
---

![](/static/weekly/issue-70-cover.jpg)

富文本编辑器向来是前端的天坑之一，因为要处理各种 DOM 渲染、输入事件、输入法支持和浏览器兼容的问题，所以做出一个比较完善的编辑器是个工作量很大又很有难度的事。[Lexical](https://lexical.dev/) 是 Meta 开源的文本编辑器框架，它带来了一些新的思路，能够解决一些以往的痛点问题，注意它只是用于开发编辑器的框架，而不是编辑器本身。

如果把传统的富文本编辑器，如 TinyMCE、UEditor 等，比作前端框架中的 jQuery 的话，那么 Lexical 就是 React。最大的区别就是 Lexical 不需要开发者手动去操作 DOM 节点，只需要关心编辑器的状态即可，Lexical 会自动把状态渲染为相应的 DOM 节点。

简单了解一下 Lexical 中的一些概念：

- **编辑器实例**：这是 Lexical 的核心，本质上一个 JS 的类，可以在上面注册一些监听器和命令，实例一般绑定在一个 `contenteditable` 的 DOM 元素上，可以类比为 React DOM 的根节点；

- **编辑器状态**：状态本质上用于表示 DOM 的数据模型，可以类比为 React 的虚拟 DOM，状态可以转为 JSON 格式保存在数据库中，而不需要保存渲染后的 HTML 字符串，状态由节点树和选择对象两部分组成，节点也就是 p、img 等 HTML 元素，选择对象则是光标选择的区域和位置信息；

- **DOM Reconciler**：这一点就和 React 更像了，当状态发生变化后，Reconciler 会进行 diff 操作，然后对 DOM 进行局部更新，以此来提升渲染性能，React 也有自己的 Reconciler 进行虚拟 DOM 的 diff 操作；

- **插件**：插件是 Lexical 的重要能力，Lexical 核心基本上是没有什么功能的，用户所需要的功能都需要通过插件去实现，比如编辑器最常见的工具栏，插件可以操作节点、注册命令、读写状态等，几乎无所不能，使用 Lexical 开发一个编辑器时，本质上是在开发一个个插件，然后将他们组合起来，也有点类似于 React 中的组件，各个组件组合起来就是一个完整的页面；

简单了解这些概念后，很明显能感知到 Lexical 的优势，更现代化的架构给开发者带来了更好的开发体验，同时也有着更高的自由度去实现更多更有趣的功能，类似 React 的虚拟 DOM 架构也带来了更好的性能和更灵活的状态管理方式，另外状态与真实 DOM 的解耦也为跨平台带来了可能性，Lexical 官方也提供了 iOS 版本。

无论你在任何场景下需要一个编辑器，都推荐你试试 Lexical，它可以很灵活地实现你所需的功能，而不需要像其他编辑器一样，在不满足需求的时候需要各种 hack 的方式去修改，当然 Lexical 做不到开箱即用，需要多一点开发量。

<hr />

## 技术

#### [计算机教育中缺失的一课](https://missing-semester-cn.github.io/)

这是一个系列课程，内容包含命令行、编辑器、Git 等，都是程序员必须要具备的、但大学教育中又不会提到的内容，该课程每节讲述一个工具，并且内容也都比较简短。

#### [Lobe Chat Wiki](https://github.com/lobehub/lobe-chat/wiki/)

Lobe Chat 是一个开源的 AI 聊天机器人框架，在他们的 GitHub Wiki 上详细介绍了该项目的架构设计、代码风格、相关 API 实现逻辑、开发上手指南等，内容很丰富，无论是否参与开发该项目，都可以从中学习到一些东西用于其他项目。

#### [Node.js 实验性支持 TypeScript](https://github.com/nodejs/node/pull/53725)

Node.js 近期合并了一个实验性支持 TypeScript 的 PR，开发者只需要添加 `--experimental-strip-types` flag 就可以在 Node.js 中直接执行 TypeScript 文件，Node.js 会自动将 TypeScript 转译为 JavaScript，但这个过程不会做类型检查，而是直接将类型移除。

## 开源

#### [Luxe](https://github.com/guhrodriguess/luxe)

又一个复制粘贴式的组件库，基于 TailwindCSS 和 framer-motion 实现，目前组件还比较少，但都很精致，相较于其他组件库，它的动画效果更丰富。

#### [convertfast-ui](https://github.com/ObservedObserver/convertfast-ui)

convertfast-ui 是一个用于创建 landing page 的工具，它的灵感来自于 shadcn/ui，也基于 shadcn/ui 实现，所以用法也是类似的。它本质上是提供了一些模块，比如导航栏、Logo 云、CTA、价格模块等，你可以将这些模块自由组合成一个页面。

#### [nuqs](https://github.com/47ng/nuqs)

nuqs 是 next-usequerystate 的缩写，是一个用于 Next.js 的、类型安全的搜索参数管理库，它可以以类型安全的方式从 URL 的查询字符串中读取参数，也可以将参数同步到 URL 中，类似于 React 的 useState，但状态是保存在 URL 中的。

## 产品

#### [Popsy](https://popsy.co/)

Popsy 是一个无代码建站工具，交互形式与 Notion 类似，并且提供了一些图标和插画。它一定程度上摆脱了其他同类产品中的“程序员思维”，编辑一个页面像是在编辑一篇文档，大大降低了用户的理解成本和使用成本。

#### [Plunk](hhttps://www.useplunk.com/)

Plunk 是一个开源的邮件平台，底层基于 AWS 的 SES 服务，可以理解为 SendGrid、Resend 的开源替代品，除了可以使用它提供的云服务，也可以自行部署。

#### [ray.so](https://ray.so/)

由 Raycast 开发的一个工具站，功能包含代码生成图片、制作图标、Raycast 主题等，并且该工具站是完全[开源](https://github.com/raycast/ray-so)的，基于 Next.js 开发。
