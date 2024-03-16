---
title: 第21期：免费的云服务
date: 2023-04-15
description: 推荐一些免费的云服务，快速构建你的个人项目。
---

![](/static/weekly/issue-21-cover.jpg)

现在的云服务越来越成熟和丰富了，相较于几年前，个人要搭建一个网站或开发一款应用的门槛低了很多，不需要自己运维服务器，可选的技术栈也更丰富了，同时很多云服务厂商都提供了一些免费额度供个人用户或测试使用，这就进一步降低了上手成本。

这里就来梳理一下各家厂商提供的免费云服务：

- [Cloudflare Pages](https://pages.cloudflare.com)：前端页面托管服务，也支持 Edge Runtime 来实现 SSR 等能力，免费额度为无限个站点、无限带宽、无限次请求，每月可以构建 500 次；
- [Cloudflare Workers](https://workers.cloudflare.com)：Serverless 服务，支持 JS、Rust、C 等语言，免费额度为每天 10 万次请求，但限制每次请求的 CPU 时间低于 10ms；
- [Cloudflare R2](https://www.cloudflare.com/zh-cn/products/r2)：对象存储服务，可用于存储图片等文件，免费额度为每月 10G 存储空间、更新操作 100 万次、读取操作 1000 万次；
- [PlanetScale](https://planetscale.com)：Serverless MySQL 数据库服务，免费额度为 10G 存储空间，每月 10 亿行读操作、1000 万行写操作；
- [Vercel Analytics](https://vercel.com/analytics)：网站访问统计和页面性能统计服务，访问统计在 Beta 期间免费，性能统计免费账号可用于一个项目；
- [Vercel 应用托管](https://vercel.com)：用于托管网站服务，可以是静态站点，也支持 SSR 等，同时还包含 Serverless Function 和 Edge Functions，Serverless Function 支持 Node、Go、Python、Ruby，每月免费额度为 100G 流量、Edge Functions 50 万个执行单元、Serverless Function 100 GB-hours、构建时长 6000 分钟；
- [Upstash](https://upstash.com)：Serverless Redis 和 Kafka 服务，免费额度为每天 10000 条命令；
- [Fauna](https://fauna.com)：Serverless 数据库服务，与 MongoDB 类似，免费额度为 5G 存储空间，每月 10 万次读操作、5 万次写操作；

以上这些服务都是国外的，所以国内访问可能会有点慢，另外国内没有发现类似的服务，如果有，欢迎推荐。

<hr />

## 技术

#### Supabase Launch Week 7

Supbase 最近带来了一系列更新，包含多个模块：

- [Supabase Logs](https://supabase.com/blog/supabase-logs-self-hosted)：开源了日志服务，可以自部署；
- [Supabase Edge Runtime](https://supabase.com/blog/edge-runtime-self-hosted-deno-functions)：Supabase 的函数功能只能使用其云服务，自部署不支持该功能，现在开源了 Edge Runtime，可以自部署函数服务了；
- [Supavisor](https://github.com/supabase/supavisor)：一个新开源的可伸缩、云原生的 Postgres 连接池，支持多租户能力；
- [Supabase Storage v3](https://supabase.com/blog/storage-v3-resumable-uploads)：Storage v3 最大的更新是支持了可恢复上传，在上传中断后可以恢复上传，不需要从头再来了，因此也支持了最大 50G 的文件上传；
- [Supabase Auth](https://supabase.com/blog/supabase-auth-sso-pkce)：Auth 的 SSO 功能支持了 SAML 2.0，同时支持了服务端项目和 iOS 原生应用。

## 开源

#### [Kysely](https://github.com/kysely-org/kysely)

Kysely 是个基于 TypeScript 的类型安全的 SQL 查询构造器，可以运行在 Node、Deno 和浏览器环境中。

#### [Auto-GPT](https://github.com/Significant-Gravitas/Auto-GPT)

Auto-GPT 是一个实验性的开源项目，尝试让 GPT-4 完全自动工作起来，给它提出一个目标，可以完全自动去互联网上学习相关内容，并完成设定的目标，也兼容 GPT-3.5。

#### [Dinero.js](https://github.com/dinerojs/dinero.js)

Dinero.js 是用来创建、计算和格式化金额的库，可用于 JavaScript 和 TypeScript 中。

## TMT

#### [Discord 和它的中国“学徒”们](https://mp.weixin.qq.com/s/VfTdzD44UCC_516OpBKxrA)

Discord 是专为社群设计的通信软件，本文对 Discord 做了详尽的分析，并对国内对标它的产品进行了对比分析。
