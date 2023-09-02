---
title: 第36期：Node.js 后端框架盘点
date: 2023-09-02
description: Node.js 生态盘点之后端框架篇
---

![](/static/weekly/issue-36-cover.jpg)

接上期，这期是 Node.js 生态盘点之后端框架篇。这里说所的后端框架是指用于开发 HTTP API 服务的框架，一般不涉及前端页面相关的内容。

[NestJS](https://nestjs.com/)

NestJS 应该是目前 Node.js 生态中最成熟、功能最丰富的 Web 框架了，做到了开箱即用。除了用于开发 HTTP API 服务，也支持开发 RPC 服务、WebSocket 服务、微服务等。它使用 TypeScript 开发，底层基于 Express，大量使用了装饰器语法，并借鉴了 Angular 的语法和理念，写出的代码比较容易维护，比较适合大型项目的开发，也因此有一定的上手门槛。

[Express](https://expressjs.com/)

Express 是 Node.js 生态中最古老、应用最广泛的框架。它遵循 MVC 架构，实现了最基础的路由和中间件能力，其他能力就需要开发者自己实现了，因为它比较轻量和灵活。因为它比较古老，且已被广泛应用，所以更新迭代比较求稳，目前对 async/await 的支持都不够完善。

[Koa](https://koajs.com/)

Koa 是 Express 团队的开发的下一代 Web 框架，但严格来说它算不上是个框架，它仅实现了基于洋葱模型的中间件机制，其他功能都需要开发者自行实现，甚至路由能力都没有。相较于 Express，它更现代一点，对 async/await 支持的比较好，也有一些框架基于它来实现，比如 Egg.js、ThinkJS 等。

[Egg.js](https://eggjs.org/)

Egg.js 是由阿里开发、基于 Koa 的企业级框架，遵循「约定优于配置」的理念，开箱即用。既然是企业级框架，功能当然比较全面，开发、测试、部署相关能力都有涉及，对多进程支持的也比较好，但是对 TypeScript 支持不够好，并且其架构设计也注定了无法完善地支持，目前更新迭代也比较慢。

[Fastify](https://fastify.dev/)

Fastify 是一个专注于性能的框架，应该是目前 Node.js 生态中最快的 Web 框架。它可以通过插件架构来扩展框架的能力，目前常用的能力基本都有相应的插件，但由于他不兼容 Express 或 Koa 的中间件，所以生态相对没那么丰富。另外 NestJS 底层依赖的 Express 是可以换成 Fastify 的。

<hr />

## 技术

#### [Astro 3.0](https://astro.build/blog/astro-3/)

Astro 是一个用于构建内容型站点的 Web 框架，最近发布了 3.0 版本。Astro 3.0 是第一个支持 View Transitions API 的框架，可以轻松实现页面切换的过渡效果。除此之外，也带来了更快的渲染速度、更优的构建输出，图片优化功能也已稳定，另外也与 Vercel 进行官方合作，可以将 Astro 更好地部署到 Vercel 上。

#### [Node.js 原生支持 `.env` 文件](https://github.com/nodejs/node/pull/49185)

在 Node.js 中使用 `.env` 文件一般是通过 `dotenv` 来实现。在 Node.js v20.6.0 中将会原生支持 `.env` 文件，在执行 node 时通过 `--env-file` 参数指定文件即可。

#### [使用 RAIL 模型衡量性能](https://web.dev/rail/)

RAIL 是一种以用户为中心的性能模型，它从响应、动画、空闲和加载四个方面对页面性能进行衡量，相较于传统的前端性能指标，RAIL 更贴近于实际的用户体验。

## 开源

#### [AIdea](https://github.com/mylxsw/aidea)

AIdea 是一款集成了主流大语言模型以及绘图模型的 App，支持 GPT 3.5/4、通义千问、文心一言，也集成了 Stable Diffusion 模型，基于 Flutter 开发，代码完全开源。

#### [Novel](https://github.com/steven-tey/novel)

Novel 是一个 Notion 风格的 WYSIWYG (所见即所得) 编辑器，并且支持 AI 自动编写。其基于 Tiptap 实现，仅支持 React 框架。
