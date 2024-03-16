---
title: 第40期：前端还需要构建吗？
date: 2023-10-14
description: 你觉得前端还需要构建吗？
---

![](/static/weekly/issue-40-cover.jpg)

在现代前端工程化中，构建是一个很重要的环节，该环节作用主要有以下几方面：

1. 代码转译，因为浏览器不支持 TypeScript、Sass、JSX、Vue 模版等语言，甚至不支持一些较新的 ECMAScript 语法，所以需要将源码转译成浏览器支持的 JavaScript、CSS 等；
2. 模块打包，通常源码由多个模块和文件组成，但受限于浏览器和 HTTP 的限制，不能每个文件都通过一次 HTTP 请求来加载，所以需要将一些模块打包合并成一个文件，从而节省 HTTP 请求次数，提升性能；
3. 资源优化，前端的资源主要包含代码、图片、字体等文件，在构建过程中可以将他们进行压缩优化，以提高页面的加载速度；

但最近 DHH (Ruby on Rails 框架创始人、37signals CTO) 在搞事情，先是在 Turbo 8 中移除 TypeScript，又提出**最快的打包工具就是没有打包**，他认为有了 HTTP2 和浏览器原生支持 ES Modules 后，前端不需要构建了，同时也将这一观点应用在 37signals 的产品 [Hey](https://www.hey.com) 中。

然后 Malte Ubl (Vercel CTO) 说他们进行过尝试，认为这样行不通，由于模块嵌套会导致额外的网络请求往返，在生产环境中效率比较低下，在大型项目中是不能省略构建过程的。

前端还需要构建吗？很明显这不是一个非黑即白的问题，需要根据自己的需求和项目情况来决定。而两位大佬的观点，我认为他们不是单纯地从技术角度来讨论的，他们背后都有一个商业公司，都会从公司利益上考虑问题，如果前端不再需要构建，那么 Vercel 的业务将难以维持，37signals 就可以更好地推广他们的技术和框架。

<hr />

## 技术

#### [Next.js 13 vs Remix: An In-depth case study](https://prateeksurana.me/blog/nextjs-13-vs-remix-an-in-depth-case-study/)

Next.js 和 Remix 是 React 生态比较重要的两个框架，两者的定位和功能也比较类似。本文通过使用这两个框架开发同一个应用来对比两个框架，涉及页面布局、数据获取、流式渲染、路由等方面，内容比较详细，文章也很长。

#### [🌈 通往 AGI 之路](http://waytoagi.com/)

一个涵盖 AI 从概念到应用等各方面知识的页面，旨在提供一个全面系统、易于理解的 AI 学习路径。

#### [Comprehensive Rust](https://google.github.io/comprehensive-rust/zh-CN/index.html)

Google Android 团队开发的免费 Rust 课程，内容涵盖了从基础语法到高级主题和错误处理等所有内容，同时提供英文、中文等多个语言版本。

## 开源

#### [Gitness](https://github.com/harness/gitness)

Gitness 是一个开源的代码托管和流水线引擎，可以私有部署，包含 Pull requests、Webhooks、Pipeline 等常用的基础功能，没有 GitLab 那么臃肿，它使用 Golang 开发，性能也比较好。

#### [Spacedrive](https://github.com/spacedriveapp/spacedrive)

Spacedrive 是一个跨平台的文件浏览器，其底层是用 Rust 编写的虚拟分布式文件系统 (VDFS)，可以将多个设备上的文件集中在一处进行管理，UI 也比较好看，目前还处于 alpha 阶段，未来可期。

#### [VTable](https://github.com/VisActor/VTable)

VTable 是一个 React 的表格组件库，性能比较强，支持百万级数据快速运算与渲染，同时也支持多维数据自动分析与呈现。
