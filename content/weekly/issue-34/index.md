---
title: 第34期：产品与平台工程师
date: 2023-08-19
description: 不要再说前端/后端工程师了。
---

![](/static/weekly/issue-34-cover.jpg)

第一次看到**产品与平台工程师**这个概念是在 Lee Robinson (Vercel 副总裁) 的文章 [Product and Platform Engineers](https://leerob.substack.com/p/product-and-platform-engineers) 中。

在 Web 开发领域，前端和后端的领域划分越来越模糊，也不再有意义。前端已不再仅限于 HTML、CSS 和 JavaScript，也会涉及一些后端和数据库相关内容；后端工程师也不再仅限于后端代码，也会涉及一些部署、运维，甚至是前端相关的工作。

因此用产品和平台工程师来区分更为准确一点：产品工程师专注于产品本身，从产品逆向出所需的技术栈，需要考虑前端、后端、设计等一切内容，对用户体验负责，对所涉及的技术和工具都要比较熟悉；平台工程师专注于支持产品的基础设施，比如代码部署工具、服务器运维等。

现在的云服务已经很成熟了，对于绝大多数小公司或个人项目来说，平台工程师好像不再那么需要了，只要你付费就可以快速发布部署你的项目，也不需要考虑扩容、负载均衡等问题。

<hr />

## 技术

#### [Experimenting with project templates](https://go.dev/blog/gonew)

使用 Golang 开发项目时，一般都是从 0 开始或者复制一个现有项目再进行修改，这多多少少有点不方便。Golang 官方最近推出了一个新的命令 `gonew` 来解决这个问题，通过该命令可以拉取模版并生成项目文件。

#### [TypeScript 教程](https://wangdoc.com/typescript/)

阮一峰发布的 TypeScript 教程，一如既往的阮一峰的风格，简单易懂不废话，对新手比较友好。

#### [中文技术文档的写作规范](https://github.com/ruanyf/document-style-guide)

阮一峰发布的中文技术文档的写作规范。内容不多，但也比较全面，可以作为自己写作时的参考规范。

## 开源

#### [FilePond](https://github.com/pqina/filepond)

一个 JavaScript 的文件上传工具库，除了基本的上传功能外，还支持图片优化和裁剪等，并且动画效果也非常灵动，体验很丝滑。除了原生 JavaScript 外，还支持 React、Vue 等多个框架。

#### [TimescaleDB](https://github.com/timescale/timescaledb)

一款开源的时序数据库，因为它是基于 PostgreSQL 实现的，所以本质上一个是 PostgreSQL 的扩展，也因此具备完整的 PostgreSQL 功能和完整的 SQL 能力。相较于其他专业的时序数据库，如 InfluxDB、Prometheus 等，TimescaleDB 相对更轻量更易于上手。

## 工具

#### [Shots](https://shots.so/)

Shots 是一个用于生成 Mockup 图片的网站，预置了大量的模版，可以简单快速生成好看的 Mockup 图片用来宣传自己的产品。

## 其他

#### [北京，为什么会没有大家说的那么繁华？](https://mp.weixin.qq.com/s/hqIMDADiPDVSWp8EKh5gbw)

长文，从道路规划来分析这个问题。简而言之，北京的路网密度太低，相较于国外发达城市的“窄马路、密路网”设计，北京是“宽马路、疏路网”，不利于微循环的打通，也加剧了道路拥堵。这篇文章的作者主观情绪有点重，请自行判断其观点。
