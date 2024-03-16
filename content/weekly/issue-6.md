---
title: 第6期：Supabase - Firebase 开源替代方案
date: 2022-12-10
description: Supabase 是一个优秀的 Firebase 开源替代方案。
---

![](/static/weekly/issue-6-cover.png)

最近打算把这个网站从基于 Markdown 的纯静态站点更新为动态站点，想要自己实现一个完整的 CMS 系统，但又不想做的太重，就调研了一下类似于 Firebase 的开源方案，发现目前比较成熟的有 [Supabase](https://supabase.com)、[Nhost](https://nhost.io)、[Appwrite](https://appwrite.io) 等，经过简单的对比和了解，最后决定使用 Supabase 和 Next.js 做一个简单的 CMS。

> Firebase 是 Google 的应用开发平台，提供身份验证、数据库、文件存储等功能，也就是 BaaS（Backend as a Service），国内类似的服务有 LeanCloud。

Supabase 的功能包含数据库、身份验证、文件存储和边缘函数，比较吸引我的有两点：

一是大部分功能基于 PostgreSQL（最先进的关系型数据库）实现，比如权限控制直接使用 PostgreSQL 的 [Row Security Policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) 来实现，全文搜索也是使用 PostgreSQL 而非独立的搜索引擎，同时充分利用 PostgreSQL 的各种功能，而不是把数据库当作单纯的数据存储和查询工具；

二是它的产品理念，整个系统内的任何一部分都可独立运行、可扩展、可组合，比如用于身份验证的 GoTrue、用于提供 REST API 的 PostgREST、用于数据库操作的 postgres-meta 都是可独立使用或直接复用社区现有方案，可用于 Supabase 之外，并且每个服务都提供自己的 API 以便于用户进行扩展；另外更注重长期收益，比如 fork 一份 PostgreSQL 来扩展自己所需功能更方便，但 Supabase 选择支持社区上下游来实现缺失的功能，使整个社区都能受益，同时保证了项目的可移植性和长期性。

## 技术

#### [JavaScript Patterns Workshop](https://javascriptpatterns.vercel.app)

一个介绍 JavaScript 设计模式的网站，包含 JS、React、渲染和性能等相关的设计模式的介绍，每种设计模式都包含代码、视频和练习等。

#### [Developer Roadmaps](https://roadmap.sh)

Developer Roadmaps 是由社区创建的一系列 Roadmap 和指南，以帮助开发者选择学习路线，其内容包含前端、后端、运维、软件架构等多种内容。

## 开源

#### [Vite 4.0 is out!](https://vitejs.dev/blog/announcing-vite4.html)

Vite 发布了 4.0 版本，比较大的变更是升级了 Rollup 3.0 版本，同时废弃了 CSS 文件的默认导出。另外提供了新插件 `@vitejs/plugin-react-swc` 在开发模式下默认使用 swc 替代 Babel，以大幅提升 HMR 的性能，这是受 Turbopack 刺激了吗哈哈。

#### [Announcing SWR 2.0](https://swr.vercel.app/blog/swr-v2)

SWR 是一个 React 数据请求库，新发布的 2.0 版本新增了 `useSWRMutation` Hook 和开发者工具，同时改进了对 React 18 的支持。

#### [Nextra](https://nextra.site)

Nextra 是基于 Next.js 的框架，更聚焦于内容型的网站，比如文档和博客等，近期发布了 2.0 版本，包含了重新设计的 UI、MDX v2、内建全文搜索和代码高亮等新特性。在众多用于构建内容型网站的框架中，Nextra 的 UI 设计水平属于非常高的了，默认的主题很漂亮、很舒心。

#### [Zod](https://zod.dev)

Zod 是一个 TypeScript 优先的模式声明和验证库，可用于前端的表单校验、后端 HTTP 请求参数的校验等，同时可以生成 TS 的类型，无需校验规则和数据类型定义各写一遍。

> 最近 ChatGPT 太火了，我也尝试让他帮我写一下这期的周刊，可惜我问他的内容他都说“我很抱歉，吧啦吧啦~”
