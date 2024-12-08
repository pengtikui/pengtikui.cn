---
title: 第81期：JavaScript 生态 2024
date: 2024-12-08
description: The JavaScript ecosystem in 2024
---

![](/static/weekly/issue-81-cover.jpg)

这期的内容是对 Vercel 副总裁 Lee Robinson 的文章 [The JavaScript ecosystem in 2024](https://leerob.substack.com/p/the-javascript-ecosystem-in-2024) 的不完整翻译加个人理解，可以通过这些变化来了解 JavaScript 生态中各个领域的发展方向。

#### Svelte 正在推动 React

Svelte 一直采用编译器优先的方式进行创新，使用编译器来代替人进行优化代码。Svelte 5 中引入了 Runes 概念，这是一种定义响应式的方式，比如 `let count = $state(0)`，其中 `$` 符号就是 Runes 的标记，编译器会针对它做优化。

React 也终于有了 React Compiler 来做编译时优化，另外 `use client` 和 `use server` 指令也成为了 React Server Components 的核心，这些指令也是给编译器做优化用的。

#### Remix 正在推动 Next.js

在 Next.js 还没有 App Router 时，Next.js 的 Layout 功能是很不灵活的，也不支持全局的数据获取，而 Remix 参照 Next.js 的 `getServerSideProps` 做了更精细的数据获取，也支持了更灵活的 Layout 方式。

而现在 Next.js 也都支持了，并且 Server Components 和 Server Actions 的概念也融入到了 React 19 中，本质上 React 生态都在趋同。

#### Prisma 正在推动 ORM

之前有一期写过“不要使用 Prisma”，虽然我不太喜欢 Prisma，但是不得不承认 Prisma 在某些方面做的很好，比如对 TypeScript 的支持，另外 Prisma 也推动数据层变得更加轻量以及与运行时无关，使得各个平台之间有更好的互操作性，现在你甚至可以通过 HTTP 连接 Prisma 管理的 Postgres 数据库。

#### Deno 正在推动 Node.js

除了 Deno，Bun 也很大程度上推动了 Node.js 的发展，目前这三个运行时都在努力推进性能和开发体验的的提升，Node.js 22 也对 CJS/ESM 互操作提供了原生支持，这是很大的进步。

#### Supabase 正在推动 Firebase

Supabase 最初是 Firebase 的开源替代品，而开发者对 Supabase 的喜爱很大程度上出于 Postgres，它大部分功能都是基于 Postgres 实现的，所以也可以说 Supabase 是推动了 BaaS 的发展。对 Supabase 感兴趣的可以翻翻往期周刊，有介绍过。

#### esbuild/SWC 正在推动 JS 工具

Rust 将会成为 JavaScript 工具的基础设施，在 2024 年中我们有了 Biome、Rspack、Rolldown、Oxc、Lightning CSS、Turbopack 等大量基于 Rust 的工具。

#### Bun 正在推动 SWC

Bun 推动了包管理器、编译器、测试运行器和其他运行时的发展。事实证明，如果我们足够努力的话，有很多地方可以加快 JavaScript 生态系统的速度。Bun 1.0 已经过去一年了，采用率似乎在持续上升。团队的迭代速度非常高。

<hr />

## 技术

#### [React v19](https://react.dev/blog/2024/12/05/react-19)

终于 React 发布了 19 正式版，今年已经有好几期介绍 React 19 了，这里就不再重复了，感兴趣的可以翻翻往期的周刊，更新内容还是之前那些，只是从 RC 版升级到了正式版。

#### [Astro 5.0](https://astro.build/blog/astro-5/)

在往期介绍过很多次 Astro 了，最近发布了 5.0 版本，主要更新内容包括 Content Layer、Server Islands、Vite 6 等，我认为比较重要的更新是 Content Layer 功能，作为一个主要用于构建内容型网站的框架，那内容来源肯定是多种多样的，比如 Markdown 文件、Headless CMS 等，Content Layer 相当于对这些内容源做一个统一的抽象。

社区也有类似的项目，比如我的网站目前在用的 [Contentlayer](https://www.contentlayer.dev)，不过可惜的是这个项目不再更新了。

#### [Vite 6.0 发布了！](https://cn.vite.dev/blog/announcing-vite6)

最近大更新有点多，Vite 也发布了 6.0 大版本，该版本没有太多的新特性，也没有太多的破坏性更新，主要是引入了[实验性环境 API](https://cn.vite.dev/guide/api-environment.html)，为 Vite 后续的功能迭代做好准备。

## 开源

#### [Node Network Devtools](https://github.com/GrinZero/node-network-devtools)

开发 Node.js 项目时通过添加 `--inspect` 参数就可以使用 Chrome Devtools 进行调试，但是不支持 Network 标签的功能，而 Node Network Devtools 就是为了解决这个问题，能够大幅提高开发体验。

#### [React Scan](https://github.com/aidenybai/react-scan)

最近挺火的一个小项目，通过一行命令就可以帮你检查 React 项目的性能问题，它可以对重渲染的组件进行高亮，另外还提供了 React Scan Monitoring 服务，可以将线上项目的性能数据进行上报分析，并列出需要优化的组件。

## 产品

#### [YouMind](https://youmind.ai/)

YouMind 是玉伯创业做的新产品，号称是基于 AI 的创作系统，不过目前还是比较早期的阶段，算是一个具有 AI 能力的收藏夹，可以将你收藏的网页进行总结整理。
