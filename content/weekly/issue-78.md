---
title: 第78期：2024 前端现状
date: 2024-11-04
description:
---

![](/static/weekly/issue-78-cover.jpg)

2024 年快要结束了，The Software House 发布了 [State of Frontend 2024](https://tsh.io/state-of-frontend)，这是目前最大的、关于前端的调查报告，这次报告有来自 139 个国家的 6028 位开发者参与，我们来通过这份报告看看 2024 年的前端现状。因为参与这份报告的国内开发者占少数，并且国内与国外的开发环境也不太一致，所以它不太能代表国内的前端现状，所以我们就看一些有意思的内容，做个参考就好。

### 框架

框架方面，三大框架 React、Vue.js 和 Angular 的使用量依旧很高，“使用过并且喜欢”的开发者别分占 69.9%、44.8% 和 22.1%，可以看出虽然有新的前端框架层出不穷，但是大家依旧选择最稳妥的方案。另外值得注意的是，Svelte 的占比是 25.8%，超过了 Angular，但是最近新发布的 v5 版本有着很大的改动，不确定用户对它的信任度会不会降低。

### 库

校验库方面，“使用过并且喜欢”的前三分别是 zod、joi 和 class-validator，占比分别为 34.6%、15% 和 12.1%，前两者都是基于 Schema 的校验方案，而 class-validator 则是基于装饰器的，适用的技术栈不同，不过这三者在国内的存在感好像都挺低的，如果你还没了解过，建议可以了解一下。

日期库方面，前三名分别是 date-fns、Moment 和 Day.js，占比分别是 53.9%、45.1% 和 37.7%，Moment 目前已经处于维护不再更新状态，作为老牌库，使用量还是挺高的，date-fns 和 Day.js 是最近几年新兴的，两者 API 设计风格完全不同，选择哪个就看个人喜好了。

状态管理库方面，前三分别是 React Context API、Redux Toolkit 和 Redux，有点奇怪啊，React Context API 不能算作单独的库吧，后两者也可以合并统计吧，第四和第五分别是 Pinia 和 Zustand，分别是 Vue 和 React 生态中当前比较流行的库，没想到 Redux 目前还能有那么高的排名。

### 数据请求

在数据请求库方面，axios 毫无争议的排第一，“使用过并且喜欢”的占比高达 73.6%，其次是原生 fetch 的 72.4% 和 TanStack Query 的 43.4%，后两者在国内的使用量好像都不太高。

### 设计和样式

设计系统方面，shadcn/ui 在最喜欢的设计系统中排第一，占比 28.1%，这东西在国外真是大红大紫啊，但国内好像用的并不多，大家依旧选择 antd，毕竟更简单方便，排在第二和第三的分别是 MUI 和 Bootstrap，Bootstrap 作为 jQuery 时代的产物，目前依旧有很大的影响力，新版也移除了对 jQuery 的依赖。

样式工具方面，“使用过并且喜欢”的前三分别是原生 CSS、Sass/SCSS 和 Tailwind CSS，CSS in JS 的方案倒没有排名很高的，这点有点出乎意料。

### 构建工具

构建工具方面，是最近几年最喜欢造轮子的领域了，但大家的选择依旧比较理性，偏重于稳妥，“使用过并且喜欢”的前三分别是 vite、 esbuild 和 webpack，另外 create-react-app 这个已经不再维护的项目依旧有 31.3% 的占比，而新兴的 rspack 并没有出现在排名上。

该报告还有很多的内容，比如微前端、部署、低代码等方面的内容，感兴趣的可以自行查看。

<hr />

## 技术

#### [New Architecture is here](https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here)

React Native 0.76 已经发布，该版本默认使用了 React Native 的“新架构”，新架构增加了对现代 React 功能的支持，比如 Suspense、Transitions、useLayoutEffect 等，这篇官方博客对新架构进行了详细的介绍。

#### [We're forking Flutter. This is why.](https://flutterfoundation.dev/blog/posts/we-are-forking-flutter-this-is-why/)

Flutter Foundation 团队最近 fork 了 Flutter，推出 Flock 分支进行开发迭代，这篇文章介绍了他们为什么要 fork Flutter，比如 Flutter 团队人力不足、外部贡献受阻等，以及 Flock 分支的怎么解决这些问题。从 Flutter 目前的状况来看，React Native 还是移动端跨平台方案的最佳选择啊。

#### [一文搞懂Passkey](https://liaoxuefeng.com/blogs/all/2023-08-15-what-is-passkey/index.html)

Passkey 是苹果推出的一种无密码登录方案，目前除了苹果自己的产品，谷歌、微软等也都支持了这种技术，并且越来越多的网站也开始支持 Passkey 登录了，通过这篇文章可以快速简单的了解一下 Passkey。

#### [Chakra UI v3](https://www.chakra-ui.com/blog/00-announcing-v3)

Chakra UI 是一个 React 组件库，最近发布了 v3 正式版，该版本完全进行了重写，并且添加了 25 个新组件。该版本使用了比较流行的 Headless 组件库方案，Chakra UI v3 本质上是由 Headless 组件库 Ark UI、CSS 方案 Panda CSS 和设计系统 Park UI 三部分组成，这三者也都可以单独使用。

## 开源

#### [Quicky](https://github.com/alohe/quicky)

Quicky 是一个用于自部署 Next.js 应用的 CLI 工具，基于 pm2 做进程管理，也支持域名和 SSL 证书的自动化配置，目前也支持部署 Node.js 应用。

#### [Rin](https://github.com/openRin/Rin)

Rin 是一个基于 Cloudflare 全家桶的动态博客系统，用到了 Cloudflare Pages、Workers、D1、R2，使用起来简单方便，对于个人博客来说，Cloudflare 的免费额度也完全够用了。
