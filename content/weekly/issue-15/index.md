---
title: 第15期：一切皆可 Headless
date: 2023-02-25
description: Headless 这个概念有点流行，一切都在 Headless 化。
---

![](/static/weekly/issue-15-cover.jpg)

最近几年，Headless 这个概念有点流行，很多东西都在被 Headless 化，Headless 本意是“无头”，是指一个应用程序在后台运行，没有 UI 界面，但现在这个概念被运用到了更多的领域，如 Headless CMS、Headless Commerce、Headless 组件库等。

这里就简单梳理一下那些 Headless 化的东西：

- **Headless Browser**，也就是无头浏览器，最常见的有[Puppeteer](https://github.com/puppeteer/puppeteer)、[Playwright](https://playwright.dev)。它们都是一个没有 UI 界面的浏览器，可以通过特定的协议或 API 来操作页面（如打开 URL、点击页面上的按钮等），一般用于网页截图或生成 PDF 文件、爬取 SPA 网页、UI 自动化测试等。

- **Headless CMS**，是指仅有管理后台的内容管理系统，常见的有 [Strapi](https://strapi.io)、[Directus](https://directus.io) 等。传统的 CMS 如 Wordpress 等是包含管理后台、前台及一些默认主题的，而 Headless CMS 仅包含管理后台，对于前台页面、内容模型没有任何定义，这样用户可以灵活地定制自己所需的内容模型，并且前台页面无论是样式还是技术栈也都可以更灵活。

- **Headless Commerce**，是指无头电商系统，可以把它理解为特定领域的 Headless CMS，常见的有 [Commerce.js](https://commercejs.com)，Shopify 也有相关解决方案。这种电商系统仅提供管理后台，包含商品管理、订单管理、支付服务等基础功能，而面向用户的界面则可以灵活实现，无论是 Web 页面还是 App 都可以，样式也可以更个性化。

- **Headless Components**，是指无样式的组件或组件库，常见的有 [Radix UI](https://www.radix-ui.com)、[Headless UI](https://headlessui.dev)、[TanStack Table](https://tanstack.com/table) 等。这种组件库的好处是样式可以完全自定义，不会让你的产品看上去千篇一律，而常规的组件库如 Ant Design 等无论怎么自定义主题，都能看到默认主题的影子，产品不够个性化。

<hr />

## 技术

#### [Next.js 13.2](https://nextjs.org/blog/next-13-2)

本周 Next.js 发布了 13.2 版本，带来了全新的 Metadata API 用于 SEO 优化，以及 Beta 版的 Next.js Cache 用于增强 ISR 的能力和加快页面加载速度。

#### [前端框架的未来：useSignal()](https://juejin.cn/post/7202058334362370103)

Signal 是前端的一个先前就存在的概念，但最近又突然火了起来。它本质上是一种状态存储的方式，相较于 React 的 state，它的性能会好很多，本文对 Signal 做了简明的介绍和分析。

#### [Windstatic](https://windstatic.com)

一组基于 Tailwind CSS 和 Alpine.js 的组件，可以直接复制它的代码来使用，可以是作为参考找找灵感。

## 开源

#### [Tiptap](https://github.com/ueberdosis/tiptap)

一个无头、框架无关的富文本编辑器，基于 ProseMirror 实现。

#### [Floating UI](https://github.com/floating-ui/floating-ui)

用于构建浮动元素（如 Tooltip、Popover 等）的库，轻量且支持多种框架。
