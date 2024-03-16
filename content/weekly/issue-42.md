---
title: 第42期：Micro SaaS
date: 2023-11-04
description: 什么是 Micro SaaS？
---

![](/static/weekly/issue-42-cover.jpg)

SaaS 指的是软件即服务（Software as a Service），它可以理解为一种商业模式。用户通过浏览器或安装指定的 App 就可以使用软件服务，而无需繁琐的安装和更新流程，也不需要自行部署维护，并且 SaaS 通常采用按需订阅的收费模式，可有效降低用户的使用成本和维护成本。SaaS 通常都是由大公司开发和提供服务，面向的用户也是公司，属于 B2B 的商业模式，比较典型的例子是微软的 Office 365 服务、阿里的钉钉等。

近些年 SaaS 这种模式也迎来了爆发式的增长，绝大部分公司也都开始使用 SaaS 服务。在这个热门的市场中，中小团队或个人开发者也想从中分一杯羹，但没有那么多的人力财力去开发大型软件，于是就诞生了 Micro SaaS 这个概念。

Micro SaaS 顾名思义就是微型的 SaaS 服务，旨在解决小众市场的问题、迎合特定行业的需求或是解决大型软件公司经常忽视的痛点问题，它通常不会有庞杂的功能，也不需要大型团队来开发。

这里介绍几个不错的 Micro SaaS 服务：

[Momentum](https://mmntm.build)：它为初创公司提供了一系列工具用于解决项目启动和用户增长时的问题，Momentum 的产品主要包含 Page、Feed 和 Wave 三部分，Page 用于快速创建 Landing Page，Feed 可以将信息快速分发到各个社交平台，Wave 用于网站的访问统计分析；

[Polymer](https://www.polymer.co)：它是一个招聘管理工具，可以轻松管理整个招聘流程，也可以快速创建一个漂亮的网站来展示开放的职位；

[LaunchList](https://getlaunchlist.com)：现在很多产品都喜欢在产品发布前提供一个 waitlist 让感兴趣的用户加入，以便产品发布时第一时间通知他们，LaunchList 就是一个管理 waitlist 的工具，同时也提供前端组件方便接入。

<hr />

## 技术

#### [Why we migrated our backend from Vercel to Fly.io and the challenges we faced.](https://www.openstatus.dev/blog/migration-backend-from-vercel-to-fly)

OpenStatus 是个开源的状态监测服务，最近他们将后端服务从 Vercel 迁移到了 [Fly.io](http://Fly.io)，这篇博客列举了进行迁移的原因和迁移过程中遇到的问题。简单来说，Vercel 的服务太重，他们只需要一个轻量的 API 服务而已，并且 Vercel 的价格过高。

#### [Remix ❤️ Vite](https://remix.run/blog/remix-heart-vite)

Remix 宣布在 v2.2.0 版本开始支持 Vite，使用 Vite 带来了 10 倍的 HMR 速度提升，并且兼容整个 Vite 生态中的插件，因此除了速度上的提升，也带来了更多的功能，比如按路由拆分 CSS 文件、对 monorepo 更好的支持等。

#### [Announcing Docusaurus 3.0](https://docusaurus.io/blog/releases/3.0)

Docusaurus 是 Meta 开源的用于构建文档站点的框架，3.0 版本带来了比较大的更新，如 MDX 升级到 v3、配置文件支持 ESM 和 TS 格式、React 升级到 18 等。

## 开源

#### [Protomaps](https://protomaps.com/)

开源的世界地图，采用开源的 PMTiles 格式，可以以单个静态文件的形式部署在云存储服务上，并且可以通过 HTTP 来请求部分内容。

#### [Zag](https://github.com/chakra-ui/zag)

Zag 是 Chakra UI 作者的新项目，是用于构建设计系统和组件库的有限状态机，也提供了 Menu、Dialog 等多种组件，其设计是框架无关的，可以用于 React、Vue 等任意框架中。

#### [pgroll](https://github.com/xataio/pgroll)

pgroll 是一个使用 Golang 编写的开源命令行工具，通过同时提供多个版本的方式，为 PostgreSQL 提供安全、可逆、零停机的 Schema 迁移。

## 工具

#### [RedisInsight](https://redis.com/redis-enterprise/redis-insight/)

Redis 官方出品的 GUI 工具，支持 Linux、Windows 和 macOS 系统，支持开源版本的 Redis、Redis Cloud、Amazon ElasticCache 等多种 Redis 部署。
