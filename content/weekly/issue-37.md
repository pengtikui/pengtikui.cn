---
title: 第37期：Node.js 全栈框架盘点
date: 2023-09-09
description: Node.js 生态盘点之全栈框架篇
---

![](/static/weekly/issue-37-cover.jpg)

这期还是 Node.js 生态盘点。Web 的发展真是个轮回啊，从最开始的前后端一体、后端渲染页面，到后来的前端后分离、客户端渲染页面，现在又开始流行前后端一体的全栈应用了，不过现在的全栈应用和最初的前后端一体还是有本质区别的，这个后面有机会再聊，本期就盘点一下现在比较流行的 Node.js 全栈框架。

需要说明的是，虽然这些都是全栈框架，但他们的大部分能力都是偏重于前端部分，更多的是对前端用户体验的优化，后端能力相对较弱，没有较强的后端架构能力。

[Next.js](https://nextjs.org/)

Next.js 是 Vercel 开发的、基于 React 的全栈 Web 框架，应该也是目前同类框架中最流行、最成熟的了。前端方面支持 SSR、CSR、React 服务端组件等多种模式，也内置了图片、字体、SEO 优化的相关能力，后端方面基本就是一个空的 Node.js 环境，只提供 cookies、headers 等基本的方法，没有太多设计，任你自由发挥。Vercel 作为一个商业公司，自然很多能力都是针对他们的平台设计的，比如 Serverless、Edge 函数等，并且框架的可自定义程度不高。

[Nuxt.js](https://nuxt.com/)

Nuxt.js 不论是名字还是功能都与 Next.js 高度相似，不同的是它是基于 Vue.js 的，可以理解为 Vue 版的 Next.js。Next.js 有的功能 Nuxt.js 也基本都有，但 Nuxt.js 的开发体验相对更好一点，官方提供了大量的第三方集成[模块](https://nuxt.com/modules)、官方的 [Devtools](https://devtools.nuxtjs.org/)、配套的[组件库](https://ui.nuxt.com/)等。

[Remix](https://remix.run/)

Remix 也是一个基于 React 的框架，由 React Router 团队开发，目前也有部分能力下放到 React Router 中了。它最大的亮点是嵌套式路由和并行数据加载，一定程度上减少了页面的 Loading 动画，不过 Next.js 13 中也通过服务端组件实现了类似的能力。另外 Remix 比较推崇服务器/客户端模型，表单的使用方式更接近于原生 HTML，后端能力与 Next.js 相似，基本什么都没有，因为支持 Node.js、Vercel、Cloudflare 等多种运行时，所以后端能力也要取决于你所部署的环境。

[Astro](https://astro.build/)

Astro 是一个偏向于构建内容型网站的框架，其最大的亮点是[岛屿架构](https://docs.astro.build/zh-cn/concepts/islands/)，岛屿架构可以最大限度的提高页面的性能、减小页面静态资源的体积。与前面两个框架不同的是，Astro 不依赖特定的 UI 框架，支持 React、Vue、Solid、Svelte 等，同时也支持部署到 Deno、Cloudflare 等 Edge Runtime。

[SvelteKit](https://kit.svelte.dev/)

SvelteKit 是 Svelte 的官方开源框架，从名字就能看得出来它是基于 Svelte 的，功能和设计与 Next.js、Nuxt.js 类似，就不再赘述了，如果你喜欢 Svelte，那可以尝试一下这个框架。

<hr />

## 技术

#### [Bun 1.0](https://bun.sh/blog/bun-v1.0)

Bun 是个一体化的 JavaScript / TypeScript 工具包，最近发布了 1.0 版本，标志着它已经稳定并可以投入生产环境使用了。

Bun 的目标是消除目前 Node.js 生态的复杂性和性能差的问题。它不仅是一个 JavaScript 运行时，还内置了转译、打包、包管理、测试等能力，因此可以取代 Node.js、npm、Babel、tsc、Webpack、Rollup、Webpack、esbuild、Jest、nodemon、dotenv 等现在的工具，并且兼容现有 Node.js 生态中的大部分内容，另外也有自己的标准库，如文件读写、HTTP 服务等。

它也支持 TypeScript、JSX、ESM，内置了 SQLite 数据库，支持 fetch、Request、Response 等 Web APIs，支持热加载、兼容 esbuild 插件，并且性能要高于 Node.js 好几倍。

## 开源

#### [puck](https://github.com/measuredco/puck)

可以自行部署的、拖拽式的 React 编辑器，与一些低代码的编辑器类似，但它可以集成到已有的项目中，并且可以从第三方 CMS 中加载内容。

#### [Build your own X](https://github.com/codecrafters-io/build-your-own-x)

一个 awesome list 类型的仓库，收集了大量的教程，都是教你“构建自己的 XX”相关的内容，比如自己实现一个 React、实现一个 Git 等，毕竟程序员都喜欢造轮子嘛。
