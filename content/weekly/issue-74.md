---
title: 第74期：学会画架构图
date: 2024-09-22
description: 一图胜千言
---

![](/static/weekly/issue-74-cover.jpg)

先说一下“写个富文本编辑器”系列，该系列后续会单独进行发布，不再跟随周刊发布，并且最近中秋和国庆假期，暂时先鸽一下，嘿嘿。

这周来聊一下架构图吧。在[第69期：文档驱动的工作方式](/weekly/issue-69)中提到了“文档不只是文字”，这里就展开说一下架构图，对于程序员和产品经理来说，架构图是个很常用的表达形式。

#### 为什么要画架构图？

一图胜千言嘛！对自己而言，梳理架构图的过程就是总结和思考的过程，可以在这个过程中不断完善自己的思路；对他人而已，可以更直观的从全局角度理解问题，也可以让大家对事情的理解更一致。

#### 什么是架构图？

一般我们常见的架构图有组织架构图、业务架构图、系统架构图、技术架构图等，虽然这些图在表达完全不同的内容，但它们都有一个共同点，那就是它们都有点、关系、层次这三者来组成。以常见的 MVC 架构为例，Model、View、Controller 分别表示三个层次，层与层之间有着调用关系，同一层内也会有调用关系，而每一层又会有多个部分组成，比如 Model 层有多个数据模型，每个数据模型就是一个点。

组织架构图也是类似，每一级部门就是一个层次，每个人就是一点，部门与部门之间、人与人之间也都有着一定的关系。所以架构图本质上就是点+关系+层次。

#### 怎么画架构图？

首先要明确这张架构图的主题是什么，你想通过这张图来表达什么、让别人了解什么，以此来选择更合适的架构类型，比如逻辑架构图、流程架构图或调用关系架构图；其次先从全局出发，先搭建一个整体框架，然后再去将各个部分进行细化，注意要尽量简洁，避免过多的细节；最后设计上也要尽量美观，不要出现过于跳跃的色彩搭配，布局上也不要过于紧凑或过于松散。

<hr />

## 技术

#### [PG Notes](https://pg.vonng.com/)

和 Postgres 相关的一系列文章合集，包含应用开发、监控管理和内核架构等多个方面，作者 Vonng 是 Pigsty ——开箱即用的 PostgreSQL 数据库发行版——的作者。

#### [Express 5.0](https://github.com/expressjs/express/releases/tag/v5.0.0)

Express 是老牌的 Node.js 框架了，最近发布了 5.0 正式版，距离 5.0 Alpha-1 发布已经过去了 10 年。5.0 版本要求 Node.js 18 或更高的版本，删除了一些历史遗留的 API，路由匹配规则也有调整，并且中间件可以使用 async 函数了，更具体的变更内容可以参考官方文档的 [Moving to Express 5](https://expressjs.com/en/guide/migrating-5.html)。

#### [Fastify v5 is Now Officially Released!](https://openjsf.org/blog/fastifys-growth-and-success)

另一个老牌 Node.js 框架 Fastify 最近也发布了 5.0 正式版，该版本要求 Node.js 20 或更高的版本，并且移除了历史遗留的弃用 API，并且有不少 API 调整，具体可以参考 [V5 Migration Guide](https://github.com/fastify/fastify/blob/main/docs/Guides/Migration-Guide-V5.md)。

## 产品

#### [Reweb](https://www.reweb.so/)

Reweb 是一款面向开发者的可视化网站构建工具，它使用 Next.js、Tailwind CSS 和 shadcn/ui 来构建页面。相较于其他低代码平台，Reweb 的设计和交互更精致、更流畅，由于限制只能使用 Tailwind CSS 和 shadcn/ui 的组件，可配置项也更简单。

#### [Cherry Studio](https://cherry-ai.com/)

Cherry Studio 是一个大语言模型桌面客户端，支持国内外的多家模型服务商，并且内置了多个智能助手和翻译功能，它基于 Electron 开发，支持 Windows 和 macOS 系统。

## 开源

#### [Pico CSS](https://github.com/picocss/pico)

Pico CSS 是一个最小化的 CSS 框架，专注于语义化 HTML 语法，使每个 HTML 元素均具有响应性和优雅的默认样式，它的样式是直接作用于 HTML 标签上的，额外的 class 不超过 10 个。

#### [Stack Auth](https://github.com/stack-auth/stack)

Clerk 和 Auth0 的开源替代品，功能比较全面，包含用户认证、权限管理、第三方 OAuth 等，也提供了用于管理用户的控制台页面，可以自行部署，也可使用他们提供的云服务。
