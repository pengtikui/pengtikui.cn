---
title: 第56期：聊聊 JavaScript 运行时
date: 2024-03-24
description: 一次编写，到处运行
---

![](/static/weekly/issue-56-cover.jpg)

JavaScript 是一门很复杂语言，复杂的地方在于它有着各式各样的运行时。JavaScript 运行时（runtime）是指执行 JavaScript 代码的环境，它包括了 JavaScript 引擎和宿主环境（比如浏览器或 Node.js）提供的功能和资源的接口。

引擎按照 ECMA 国际组织制定的 ECMAScript 语法规范去解析和执行 JavaScript 代码，无论什么运行时都是一致的标准。而宿主环境则不同，比如浏览器环境会提供 DOM、BOM 等 API 去操作网页、响应用户交互等，Node.js 环境会提供文件系统、网络等 API，可用于开发服务器端应用。

> 因此，狭义上的 JavaScript 就是 ECMAScript，它只包含语法、类型、内置对象等语言规范，而而广义上的 JavaScript 是指 ECMAScript 加上各种运行时的 API。

服务端的 JavaScript 运行时之前是 Node.js 一家独大，而最近几年有了 Deno、Bun 等，还有一些 Serverless 环境，比如 AWS Lambda、Vercel Edge Function、Cloudflare Workers 等，这些运行时提供的 API 不完全一致，这就导致 JavaScript 生态的割裂，同样的代码换一个平台就不能运行了。

为了解决这个问题，Cloudflare 与 Node.js、Deno 等合作成立了 WinterCG 社区，目前成员包含阿里巴巴、字节跳动、Netlify、Vercel 等。该社区旨在为 JavaScript 运行时提供一个合作的空间，专注于进跨运行时的 Web API 互操作性（尤其是非浏览器运行时）。

简单来说，WinterCG 是将已有的 Web API 落地到更多的服务端运行时中，目前已有 Fetch、Sockets API、Web Crypto API 等。比如 Fetch 就是基于 WHATWG fetch standard 做少量修改，使其更适合服务端，其衍生的 API，如 URL、Request、Response 等与浏览器端保持一致，这样就能真正做到“一次编写，到处运行”。

值得一提的是，之前推荐过的 Hono 就是一个完全兼容 WinterCG 的 Web 框架，API 设计与 Express.js 类型，但它可以运行在 Node.js、Bun、Cloudflare Workers 等多种运行时中。

<hr />

## 技术

#### [Bulma 1.0.0](https://github.com/jgthms/bulma/releases/tag/1.0.0)

Bulma 是个类似于 Bootstrap 的 CSS 框架，但它更现代，比如用到了 Flex、Grid、CSS 变量等新特性，并且产物只有一个 CSS 文件，不依赖 jQuery 等框架。这个框架已有好多年了，但最近才发布了 1.0.0 版本，该版本使用 Dart Sass 重写了，并且引入主题功能。

#### [Radix Themes 3.0](https://www.radix-ui.com/blog/themes-3)

Radix Themes 是基于 Radix UI 的组件库，本质上是 Radix UI 加上一套预置的样式，最近发布的 3.0 版本带来了新的布局引擎和一些新组件。

#### [UUID vs GUID vs CUID vs NanoID: A guide to database primary keys](https://www.basedash.com/blog/uuid-vs-guid-vs-cuid-vs-nanoid-a-guide-to-database-primary-keys)

在设计数据库时，主键是很重要的内容，本文对一些常见的 ID 作为数据库主键时的优缺点及适用场景进行了详细说明。

## 开源

#### [React Unforget](https://github.com/mohebifar/react-unforget)

React Unforget 是个 React Forget 的社区方案，它以 Babel 插件的形式发布，可以在编译时对代码进行优化，以减少不必要的重渲染，提升页面的性能。

#### [Go-DDD-Layout](https://github.com/pokeyaro/go-ddd-layout)

一个基于 Go 的 DDD 示例项目，该项目实现了 User 的 CURD 基础操作，可以通过该项目了解怎么构建一个 Go 的工程化项目以及领域驱动设计（Domain-Driven-Design）架构。

## 产品

#### [Kimi 智能助手](https://kimi.moonshot.cn)

Kimi 是月之暗面开发的大模型产品，相较于其他的同类产品，Kimi 对长文本支持的很好，目前支持 200 万字的上下文，并且对 PDF 等文件的解析也很不错。
