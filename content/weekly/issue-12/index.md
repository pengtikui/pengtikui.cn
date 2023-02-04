---
title: 第12期：沉迷狂飙
date: 2023-02-04
description: 最近沉迷于追剧，挺好看。
---

![](/static/weekly/issue-12-cover.jpg)

最近沉迷于追剧，《狂飙》挺好看，这周就暂时没有其他话题了。

<hr />

## 技术

#### 更好地写邮件模板

前段时间有需求要写个邮件模板，是用 HTML 加最基础的内联样式实现的，开发体验很不好，最近发现了俩用于写邮件的框架能极大的提高开发体验和效率：

- [MJML](https://mjml.io/)：专门为邮件设计的标记语言，最终会编译成 HTML 文件。
- [React Email](https://react.email/)：一组无样式的 React 组件，可以使用 React 和 TypeScript 来编写邮件，最终会编译成包含内联样式的 HTML 文件。

#### SQLite

SQLite 是一个运行中进程内的数据库，不像 MySQL、MongoDB 等 C/S 架构的数据库需要运行一个单独的服务，SQLite 只需要一个文件即可，一般常用于嵌入式服务或集成在 App 内，但最近 Fly.io 将其用于 Serverless 服务，将文件保存在 S3 等服务中，可以远程读写，并具有极高的性能。

- [SQLite 的文艺复兴](https://www.bmpi.dev/dev/renaissance-sqlite/)
- [I Migrated from a Postgres Cluster to Distributed SQLite with LiteFS](https://kentcdodds.com/blog/i-migrated-from-a-postgres-cluster-to-distributed-sqlite-with-litefs)
- [I'm All-In on Server-Side SQLite](https://fly.io/blog/all-in-on-sqlite-litestream/)

#### [Dan 对于 Vite 替换 CRA 的回复](https://github.com/reactjs/reactjs.org/pull/5487#issuecomment-1409720741)

由于 Create React App 更新较慢且缺乏维护，社区有很多建议使用 Vite 来替换 CRA 的声音，最近 Dan 做出了回应，介绍了 CRA 未来的计划，简单来说就是 CRA 后续会升级为启动器，在初始化项目时由用户选择使用什么框架，比如 Next.js 等。

#### [Gatsby is joining Netlify](https://www.gatsbyjs.com/blog/gatsby-is-joining-netlify/)

Gatsby 是一个基于 React 的前端框架，主要用于内容型的网站，近期被 Netlify 收购。

## 开源

#### [shadcn/ui](https://github.com/shadcn/ui)

一组基于 Radix UI 和 TailwindCSS 的 React 组件，但并不是组件库，不能通过 npm 包的形式安装，可以直接复制粘贴其代码来使用。

#### [Vitess](https://github.com/vitessio/vitess)

Vitess 是用于部署、扩展和管理大型 MySQL 实例集群的数据库解决方案，Serverless MySQL 服务商 PlanetScale 就是基于该开源项目。

#### [APITable](https://github.com/apitable/apitable)

APITable 是面向 API 的低代码平台，是 Airtable 的开源替代品，目前仍处于开发阶段。
