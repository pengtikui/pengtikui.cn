---
title: 第77期：升级 Next.js 15
date: 2024-10-27
description: 看看更新了哪些内容
---

![](/static/weekly/issue-77-cover.jpg)

本周 Next.js 15 正式版发布，我的个人网站也是使用的 Next.js，所以就升级了一下，过程还算顺利，没有遇到什么问题，可能是因为我用到的功能比较少吧。

Next.js 15 没有多少破坏性更新，如果你不跨大版本升级，还是能够平滑升级的，并且官方也提供了 `@next/codemod` CLI 工具帮助你平滑升级，这里就来看看更新了哪些新特性吧。

首先是两个破坏性更新：

一是异步请求 API，在传统的服务端渲染中，服务器渲染页面之前需要等待内容请求完成，如果依赖多个同步的 API 请求，会阻塞渲染，为了更好的优化渲染速度，Next.js 15 将多个 API 都变更为异步的，变更的 API 包括 `headers`、`cookies`、`params`、`searchParams` 和 `draftMode`。

二是缓存策略，Next.js 14 中对原生 fetch 进行了重写，加上了缓存能力，这也导致一些第三方库出现 bug，被很多人吐槽，在[第47期：Next.js 不再扩展原生 fetch]('/weekly/issue-47') 中我也提到过，所以在 Next.js 15 中对缓存策略进行了调整，默认对 GET 请求不缓存，另外客户端路由默认也不在缓存页面，如果你需要缓存能力，可以手动配置。

其他更新都是非破坏性的了：React 方面，支持了 React 19 和实验性支持 React Compiler；构建方面，Turbopack Dev 进入稳定状态，相较于 webpack，大幅提升了开发时的构建和热更新速度；另外也支持了 ESLint 9，但同时向后兼容ESLint 8。

同时还有一些新特性：新的 Form 组件增强了原生 HTML \<form\> 元素，可以实现 Prefetching、客户端导航和渐进增强等能力；配置文件支持 `next.config.ts` TypeScript 类型；开发时新增静态路由指示器，方便开发者识别哪些路由是静态的或动态的。

另外，之前很多人吐槽 Next.js 只有部署在 Vercel 才有比较好的体验，自部署时总会有这样那样的问题，在 Next.js 15 中也对自部署进行了一些优化，比如改进了对 Cache-Control 指令的控制，以及 Image 组件不再需要手动安装 sharp 依赖。

最后，更详细的更新内容可以参考[官方博客](https://nextjs.org/blog/next-15)。

<hr />

## 技术

#### [Svelte 5 is alive](https://svelte.dev/blog/svelte-5-is-alive)

最近除了 Next.js，Svelte 也进行了大版本更新了，发布了 5.0 版本，Svelte 5 完全进行了重写，引入了比较流行的 Signals，并且向后兼容 4.0 版本。

#### [In the future using top-level await might be cause a backwards compatibility break in Node](https://evertpot.com/using-top-level-await-is-bc-break/)

最新发布的 Node.js 23 中支持了 require() 加载 ESM 文件，本文介绍了该特性以及可能会导致的兼容性问题。

## 开源

#### [Dify-Sandbox](https://github.com/langgenius/dify-sandbox)

Dify-Sandbox 是 [Dify](https://dify.ai/) 开源的一个沙箱环境解决方案，可以创建一个安全的环境运行不受信任的代码，并且支持多租户环境。

#### [wouter](https://github.com/molefrog/wouter)

wouter 是一个用于 React 和 Preact 的极简前端路由库，在往期的周刊中有推荐过，这里我要再推荐一下，因为 React Router 变得越来越臃肿了，每个大版本都要搞点事情，还要集成很多和路由无关的功能，希望能有个更好的替代品。

## 工具

#### [WebStorm](https://www.jetbrains.com/zh-cn/webstorm/)

WebStorm 就不用多介绍了，很强大的 JavaScript IDE，在 10 月 24日程序员节，JetBrains 宣布 WebStorm 对非商业用途免费，可能是感受到了来自 VSCode 的压力吧。
