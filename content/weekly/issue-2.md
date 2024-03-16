---
title: 第2期：Serverless 是未来吗？
date: 2022-11-12
description: Serverless 会是未来的主流吗？为什么国外的 Serverless 生态那么丰富，而国内却少有呢？
---

![](/static/weekly/issue-2-cover.jpeg)

Serverless 会是未来的主流吗？为什么国外的 Severless 服务那么丰富，比如 Vercel、Cloudflare Workers、AWS Lambda、Planetscale 和 Upstash 等，从页面托管、函数服务，到数据库等都有选择，完全依赖 Serverless 开发一个大型项目完全不成问题，而国内却鲜有类似的服务。

## 技术

#### [SpriteJS：图形库造轮子的那些事儿](https://juejin.cn/post/7163093447908261902)

月影大佬分享的 SpriteJS 库“造轮子”过程中的积累和思考，包含的干货较多，对图形学感兴趣的可以收藏慢慢看。

#### [React 最新提出了一个名为 use 的 Hook](https://mp.weixin.qq.com/s/Wfy9KgGHlf6SawogMWj34Q)

`use` 是 React 新提出的一个 Hook，主要用于在 Client Components 中使用 Promise，与 `useState` 等其他 Hooks 不同的是，`use` 可以条件语句、循环语句等中使用，目前已可以在 Next.js 13 中使用。

#### [Ant Design 5.0 Beta 版发布，新网站上线](https://next.ant.design)

Ant Design 的 5.0 大版本更新，全新的设计系统，并且放弃了 Less 更换为 CSS in JS 的方案。目前来看 Bug 还是挺多的，新的设计有点丑，新网站体验挺差的，并且比较卡。

#### [Gatsby 5.0 发布](https://www.gatsbyjs.com/blog/gatsby-5/)

Gatsby 是一个基于 React 和 GraphQL、用于搭建静态网站的框架。Gatsby 发布了 5.0 版本 - 目前最快的 Gatsby，主要带来了 Slice API 和 Partial Hydration 两个新功能，前者用于提升页面构建速度，后者用于提升页面的性能。

#### [TanStack Router](https://tanstack.com/router)

TanStack 发布了他们的新项目 - TanStack Router，一个框架无关、类型安全的前端路由库，目前还是 Beta 阶段，仅支持 React 框架，文档还不完善。简单来看与 React Router 和 Remix 的功能比较类似，不过内置了对 Search Params 的解析，React Router 需要用户自行处理，但是 API 设计的挺无语的。

## 工具

#### [Heroku Free Alternatives](https://github.com/Engagespot/heroku-free-alternatives)

Heroku 是一个云服务平台，前段时间宣布终止免费方案，这里收集了一些 Heroku 的免费替代品。

#### [Quick Reference](https://wangchujiang.com/reference/)

为开发人员分享快速参考备忘清单【速查表】。内容包含多种编程语言、工具和前端框架，并且是全中文的，比较实用。

## 开源

#### [Dub](https://github.com/steven-tey/dub)

Dub 是一个开源的短链接服务，可以自行部署或使用 SaaS 服务。该项目是基于 Next.js 的全栈项目，最大的亮点是它完全使用 Serverless 服务，如 Vercel 的函数服务、Upstash 的 Redis 和 Planetscale 的 MySQL，对个人开发者或小团队项目有一定的参考意义。
