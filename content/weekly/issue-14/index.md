---
title: 第14期：有意思的云服务
date: 2023-02-18
description: 分享一些简单易用且有趣的云服务。
---

![](/static/weekly/issue-14-cover.jpg)

云服务是个好东西，现在已经是互联网的基础设施了，相较于传统的服务器，云服务已经很大程度降低了门槛和成本。但是像 AWS、阿里云这些老牌的云服务提供商，都有着极其复杂的计费系统，购买一项服务需要考虑该服务所依赖其他服务的费用，使用时也有类似的问题，提高了用户的理解成本。

但有时候我们只是想部署个 Docker 镜像、想存储一些文件、想要一个可伸缩的数据库，并不想关心底层依赖哪些服务，不想关心复杂的计费逻辑。既然有需求，那这种服务肯定是存在的，这里就总结一些能快速上手、计费简单的云服务。

#### [Vercel](https://vercel.com/)

Vercel 是个专注于前端的云服务，提供开发、预览、部署全流程的服务，可以很方便地将你的服务部署到全球。同时 Vercel 有着前端梦之队，有着众多开源项目和前端大佬，如 Next.js 框架、webpack 作者等。

#### [Fly.io](https://fly.io/)

Fly.io 是个全栈应用部署平台，可以通过命令行工具快速将项目部署到全球，支持 Rails、Laravel、Django、Go、Node.js、Python 等框架和语言，或者只是部署 Docker 镜像。另外 Fly.io 也提供数据库服务，如 Postgres、SQLite、Redis 等，在第 12 期中推荐的“SQLite 的文艺复兴”就是该公司的项目。

#### [Railway](https://railway.app/)

Railway 是个面向开发者的部署平台，旨在降低现有云服务的复杂度，比较关注开发者的体验，你只需要关心你的代码，剩下的都交给 Railway。值得关注的是，这家已融资 2500 万美元的公司仅有 13 名员工且分布在 8 个国家。

#### [Upstash](https://upstash.com/)

Upstash 是个专注于数据的云服务，仅提供 Redis、Kafka 和 QStash 服务，在全球多个区域创建服务实例，就可以直接使用了，你不需要关心运维和数据一致性的问题。

#### [PlanetScale](https://planetscale.com/)

PlanetScale 号称全世界最先进的 serverless MySQL 平台，所以他也仅提供 MySQL 服务，有趣的是它可以像通过分支管理代码一样，以分支的形式管理数据库。其服务基于开源项目 [Vitess](https://github.com/vitessio/vitess) 实现。

<hr />

## 技术

#### [React.js: The Documentary](https://www.youtube.com/watch?v=8pDqJVdNa44)

关于 React 的纪录片，讲叙了 React 诞生和发展的历程和故事。

#### [Announcing Sandpack 2.0](https://codesandbox.io/blog/announcing-sandpack-2)

Sandpack 是由 CodeSandbox 开源的运行在浏览器中的打包器，可以让代码在浏览器中实时打包和运行。近期他们发布了 2.0 版本，实现了在浏览器中运行 Node.js 的能力，与 StackBlitz 开源的 [WebContainers](https://webcontainers.io/) 不同的是，Sandpack 不依赖现代浏览器技术来实现，所以对浏览器的兼容性更好。

## 开源

#### [Rath](https://github.com/Kanaries/Rath)

Rath 是个开源的数据分析和可视化工具，支持多种数据源和自动化分析，号称数据分析领域的 Copilot。

#### [dnd kit](https://github.com/clauderic/dnd-kit)

dnd kit 是个用于 React 的拖拽库，轻量且高性能，同时支持触摸屏和键盘操作。

## 其他

#### [UI Notes](https://uinotes.com/)

UI Notes 收集了大量线上优秀 App 的完整 UI 截图，可以用于做参考或寻找灵感。
