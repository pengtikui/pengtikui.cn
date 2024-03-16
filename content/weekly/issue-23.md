---
title: 第23期：重新设计个人网站
date: 2023-05-13
description: 简单重新设计了一下个人网站，代码也做了重构。
---

![](/static/weekly/issue-23-cover.jpg)

今天把个人网站重新设计了一遍，代码也做了重写，首页的内容变得稍微丰富了一点，不像之前那么简陋。简单总结一下主要变化：

1. UI 重新设计，比之前稍微好看了一点，首页结构更清晰；
2. 代码几乎完全重构，从 Next.js 的 `pages` 目录迁移到了 `app` 目录，所有页面组件均为 Server Components；
3. 移除了 next-mdx-remote，引入 [Contentlayer](https://www.contentlayer.dev) 作为内容处理的中间层；

除了可见的样式变化外，迁移到 `app` 目录也带了肉眼可见的加载速度提升，具体提升多少没有做测试，另外通过 Contentlayer 对内容实现了类型安全，开发体验也好了不少。

另外一个值得说一下的点是代码高亮使用了 [`rehype-pretty-code`](https://rehype-pretty-code.netlify.app)，它基于 [Shiki](https://github.com/shikijs/shiki) 实现，与 Prism 或 highlight.js 不同的是，它的高亮处理过程是在服务端完成的，同时 CSS 也是内联样式，这样在浏览器端就不需要加载笨重的 JS 和 CSS 文件了，性能和用户体验会提升不少。

<hr />

## 技术

#### [Next.js 13.4](https://nextjs.org/blog/next-13-4)

Next.js 13 发布有半年了，终于在 13.4 版本中将 App Router 变为了稳定特性，生产环境可用，Turbopack 也从 Alpha 升级为 Beta 阶段，同时带来了全新的 Server Actions 特性，也因此 Next.js 被嘲笑为新时代的 PHP 哈哈哈。

#### [Introducing storage on Vercel](https://vercel.com/blog/vercel-storage)

Vercel 一直都是偏重于页面托管和函数服务，但随着全栈化的趋势，前端项目对数据存储的需求也越来越多了，所以 Vercel 也推出了自己的存储服务，其包含 Postgres、Redis 和对象存储服务，不过价格相对偏高，更像是 Vercel 在推广合作伙伴的产品。

#### [Angular 16 正式发布，抢先体验指南](https://mp.weixin.qq.com/s/utGGaAErfbJSA-yw3G7AHA)

Angular 发布了 v16 版本，带来了全新的 Reactivity 模型和 Angular Signals 库，本文对 v16 的新特性和亮点功能做了介绍。

#### [Introducing Deopt Explorer](https://devblogs.microsoft.com/typescript/introducing-deopt-explorer/)

Deopt Explorer 是 TypeScript 团队新发布的一个 VS Code 插件，可以分析 V8 生成的追踪日志，以用来做性能优化。

## 开源

#### [Mitosis](https://github.com/BuilderIO/mitosis)

Mitosis 是 Builder.io 开源的前端项目，它可以将一份代码编译成 React, Vue, Qwik, Solid, Angular, Svelte 的代码，可用于支持多框架的组件库开发、构建 Web SDK、协调使用多框架的开发团队等。

#### [lazydocker](https://github.com/jesseduffield/lazydocker)

用于管理 docker 和 docker-compose 的 Terminal UI，可以在终端里使用图形界面和鼠标来管理 Docker。

#### [Sailboat UI](https://github.com/sailboatui/sailboatui)

一套基于 TailwindCSS 的组件库，但又不是真正意义上的组件库，他只包含样式部分，使用时直接复制代码到自己的项目中即可，样式设计的还都不错。

#### [highlight.io](https://github.com/highlight/highlight)

面向下一代开发者的开源全栈监控平台，支持会话重放、错误监控、日志等能力，并提供多种 SDK，支持自部署。

## TMT

#### [OPPO 将终止哲库（ZEKU）业务，消息称放弃自研芯片](https://www.ithome.com/0/692/189.htm)

OPPO 旗下的芯片公司 ZEKU 突然宣布业务终止，公司解散，涉及 3000 多人，这应该是近期半导体行业最为爆炸的新闻了。OPPO 做出这个决定可能是出于成本上的考虑，目前手机行业不景气，出货量不足以支撑起一个这么烧钱的业务，也可能是怕被美国制裁导致前期的所有投入打水漂，所以及时止损，但不管出于什么原因，还是希望其他公司能坚持下去，毕竟这是个高投入、收效慢，但又极为重要的行业。

#### [一切皆界面](https://twitter.com/cory958014884/status/1652643953186045952)

一个关于 AR 交互的假象视频，把一切平面都变为可交互的界面，挺有意思的，可能在不久的将来就能变为现实吧。
