---
title: 第53期：试试 Astro？
date: 2024-03-03
description: 为内容型站点设计的框架
---

![](/static/weekly/issue-53-cover.jpg)

对于 Web 项目，我一般会将其分为“页面”和“应用”两大类，页面是指博客、企业官网等展示类的网页，应用是指中后台、在线文档编辑等用户交互较多的项目。对于“页面”而言，偏重的是数据获取，比如获取一篇文章的内容再把它渲染成页面，对“应用”而言，偏重的是数据修改，需要把用户在页面上交互产生的数据提交给服务端。

前些年国外比较流行的前端框架大多都是倾向于数据获取，然后变着花样地实现生成页面的方式，如 SSR、SSG 等，好像他们的业务中不需要做中后台之类的应用，而最近这些框架又在折腾数据修改，试图把原生表单带回到前端应用中，但对于比较复杂的交互，这种方式挺难用的。

比较典型的代表就是 Next.js，前几年在折腾 getStaticProps、getServerSideProps 等用于获取数据的 API，而现在又在搞 Server Actions 之类的 API 用于数据修改，整得挺不伦不类的，社区对 Next.js 的抱怨也越来越多。

这里就不得不推荐一下 [Astro](https://astro.build/) 了，它是一个专注于内容型站点的框架，虽然现在没有很火，但绝对值得一试。这里简单介绍一下它的几个主要特性。

**默认无 JS**：Astro 渲染的页面可以做到无 JS，比如一个博客页面只是纯文本的展示，本来就不需要 JS，而其他框架无论如何都需要加载一大堆 JS 文件以及比较耗费性能的 hydrate 操作。

**岛屿架构**：无 JS 是一种比较理想的情况，有时候我们的静态页面上也是需要一些交互的，比如轮播图等。岛屿架构是把整个静态的页面比做海洋，而可交互的部分则比做是一个岛屿，一个页面上也可以有多个岛屿，并且每个岛屿之间互不影响，可以独自进行 hydrate，不会阻塞整个页面的渲染。

另外 Astro 虽然定义了自己的 `.astro` 文件格式，但是也支持多种框架，如 React、Vue 等，并且官方文档也有完整的中文版本，对于“页面”类型的项目可以尝试一下。

<hr />

## 技术

#### [The Two Reacts](https://overreacted.io/the-two-reacts/)

Dan 的最新文章，文中提到了 React 中的两种范式，一是 `UI = f(state)`，其中 `state` 来自客户端，二是 `UI = f(data)`，其中 `data` 来自于服务端，有点类似于 Next.js 中的客户端组件和服务端组件，在实际情况中会是两种范式的结合，即 `UI = f(data, state)`，怎么对两种范式的组件进行划分就是一个问题，等他下篇文章来讲。

#### [技术极简主义：一切皆用 Postgres](https://mp.weixin.qq.com/s/yI06zdqnW5uWnqvKmgM-9g)

原文是一篇 Hacker News 上的帖子，作者提倡使用 Postgres 来替代 Kafka、RabbitMQ、ElasticSearch 和 Redis 等，来降低系统的复杂度。得益于 Postgres 的高性能和可扩展性，这确实是个不错的方案，尤其是对个人开发者或小团队的项目来说。

#### [Open sourcing Pingora](https://blog.cloudflare.com/pingora-open-source)

Cloudflare 开源了他们的网络框架 Pingora，使用 Rust 编写，可以理解为 Rust 版的 Nginx，本文对 Pingora 做了简单的介绍。

## 开源

#### [zbpack](https://github.com/zeabur/zbpack)

zbpack 是一个自动分析代码所使用的语言、框架等信息，并自动将其打包成可部署产物（如静态文件、云函数、容器等形式）的工具，由 Zeabur 开源，并运用在 Zeabur 平台上。

#### [Tiny RDM](https://github.com/tiny-craft/tiny-rdm)

一个轻量级、跨平台的 Redis 客户端，支持 macOS、Windows 和 Linux，基于 Wails 和 Vue 开发。

## 设计

#### [Mobbin](https://mobbin.com/)

世界上最大的手机 App 和 Web 设计库，收集了大量应用的设计案例和截图，与 Dribbble 类似，但这里面的都是实际案例。
