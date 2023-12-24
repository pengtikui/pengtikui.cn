---
title: 第47期：Next.js 不再扩展原生 fetch
date: 2023-12-24
description: 这是个本就不该出现的问题
---

![](/static/weekly/issue-47-cover.jpg)

前段时间 Vercel 产品副总裁 Lee Robinson 在 [X](https://twitter.com/leeerob/status/1733154383410684148) 上表示 Next.js 以后不再扩展原生 fetch，而是提供一些新的 API 来代替。

这件事源于 Next.js 14 中新增的数据缓存功能，具体可以参考官方文档 [Data Fetching, Caching, and Revalidating](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating) 部分。简单概括一下，在 Next.js 14 中的 React 服务端组件中你可以直接调用 `fetch` 去请求数据，Next.js 会自动对 `fetch` 请求进行缓存以加快后续的页面渲染速度，另外如果你的页面中如果有多个 React 服务端组件同时请求了相同的数据，Next.js 会自动进行去重，不需要你在业务层做优化。

这本是一个挺好的功能，但 Next.js 实现它的方式有点另类，他们是通过扩展原生的 `fetch` API 来实现的，很难想象这是一个有着众多技术大佬的团队做出的方案。这种方式导致一些使用了 `fetch` API 的三方库出现意料之外的情况，并且开发者也无法针对某些 npm 包关闭该功能，Next.js 本应该提供一个自定义的 API 来实现该功能。

好在 Next.js 团队也意识到了这个问题，决定不再扩展原生的 `fetch` API 了，并且提供了新的 `noStore` API 来让开发者手动关闭该功能。真就世界是个大的草台班子呗。

<hr />

大家圣诞快乐呀！

<hr />

## 技术

#### [A Chain Reaction](https://overreacted.io/a-chain-reaction)

Dan 的博客好久不更新了，最近终于更新了一篇。这篇文章通过一连串的例子深入浅出地解释了 JSX 代码是如何转成 HTML 的，文章有点长，慢慢看。

#### [Announcing SvelteKit 2](https://svelte.dev/blog/sveltekit-2)

SvelteKit 是 Svelte 官方的应用开发框架，有点类似于 React 和 Next.js 的关系。最近 SvelteKit 发布了 2.0 版本，其最大的升级是升级到 Vite 5，并且后期可能会平滑升级到 Svelte 5。

#### [Introducing Waku](https://waku.gg/blog/introducing-waku)

Waku 是 Zustand 和 Jotai 作者的新项目，一个极简的 React 框架。与 Next.js、Remix 等支持多种渲染模式的框架相比，Waku 仅支持 React Server Components 这一种渲染方式，其底层基于 Vite，并尽可能兼容 Vite 生态，API 设计也比较简单。

## 开源

#### [Wedges](https://github.com/lmsqueezy/wedges)

Lemon Squeezy 开源的一套 React 组件库，基于 Radix UI 和 Tailwind CSS 实现，支持暗色模式，同时提供 Figma 文件。目前组件还比较少，不过质量不错，未来可期。

#### [Lobe Chat](https://github.com/lobehub/lobe-chat)

开源的高性能聊天机器人框架，支持语音合成、多模态、可以扩展的函数调用插件系统，可快速部署一个属于自己的 ChatGPT 应用。另外该项目用到的 [Lobe UI](https://github.com/lobehub/lobe-ui) 组件库也是开源的，它基于 Ant Design 实现，提供了一些适用于 AIGC 应用的组件。

#### [Sealos](https://github.com/labring/sealos)

以 Kubernetes 为内核的云操作系统，它将数据中心抽象成一台服务器，可实现一站式的应用管理和数据库管理，帮助用户专注于业务本身，无需运维服务器。

#### [StyleX](https://github.com/facebook/stylex)

Meta 近期开源的 CSS-in-JS 解决方案，相较于现有的其他解决方案，StyleX 的 API 非常简单，并且禁用掉部分较复杂的 CSS 选择器，通过 JS 来弥补其功能，另外它是类型安全的，且与框架无关，更多关于 StyleX 的设计理念可以参考官方的[Thinking in StyleX](https://stylexjs.com/docs/learn/thinking-in-stylex/)。

## 工具

[沉浸式翻译](https://immersivetranslate.com/)

沉浸式翻译是一个浏览器的翻译插件，支持多种浏览器和多种翻译服务，相较于已有的其他翻译插件，它支持双语对照展示，即页面上同时显示原文和译文，从用户体验上来说，简直是对其他插件的降维打击。
