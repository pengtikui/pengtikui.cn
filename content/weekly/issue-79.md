---
title: 第79期：令人失望的 React Router
date: 2024-11-17
description: 或许 React 生态需要一个新的路由库了
---

![](/static/weekly/issue-79-cover.jpg)

使用 React 的开发者一定对 React Router 不陌生，很多年来它一直都是 React 应用中路由的“事实标准”，有着庞大的用户群，从名字来看它很像是 React 团队官方出品的，但其实并不是。

首先说一下 Remix，这是一个类似于 Next.js 的 React 全栈框架，由 React Router 团队开发，最初是一个闭源收费的项目，后来改为了开源免费的，再后来被 Shopify 收购。因此 Remix 对 React Router 是强依赖的。

再来看一下 React Router 的关键历史节点：

- React Router 最早引入了声明式路由的概念，虽然写法有点复杂，但还是挺好用的，也足够灵活；
- v4 版本进行了完全重写，引入了动态路由的概念，也就是“路由即组件”，将集中式的路由配置改为分散式，感觉有点刻意迎合 React “一切皆组件”的理念，其实并不太好用；
- 在 v5 版本时，React Router 和 Reach Router 进行了合并，并且将 Reach Router 中的一些 API 引入到 5.x 版本中，虽然没有破坏性的更新，但是也引入了大量的新 API 和概念；
- 在 v6 版本中又带了重大更新，完全拥抱 Hooks，移除了大部分类组件相关的 API，并且引入了一些新的 API 来替换原有 API 的功能，比如 \<Routes\> 替代 \<Switch\> 等；
- 在 v6.4 版本中引入了 Loader 和 Action 这俩用于数据加载的 API，它们俩源自于 Remix；

可以看到 React Router 不断地进行大的更新，并且个人觉得是越更新越难用，作为一个拥有庞大用户量和影响力的项目，这么频繁的进行大更新实属不该，也有点不负责任。

在今年五月份 Remix 官方博客发布了文章 [Merging Remix and React Router](https://remix.run/blog/merging-remix-and-react-router)，他们计划将 Remix 和 React Router 进行合并，Remix v3 将发布为 React Router v7，Remix 的功能都会合并到 React Router 中，包括代码分割、数据加载、表单操作、服务端渲染等等。很奇怪，一个路由库为什么要包含这些功能？为什么路由库要变为一个框架？

最近 Remix 官方博客又发布了一篇关于 [React Router 品牌更新](https://remix.run/blog/react-router-brand-update)的文章，介绍了将会跟随 React Router v7 正式使用的全新 Logo 和字标，看来距离 v7 正式版发布已经不远了。从此以后 React Router 将不再是一个单纯的路由库，而是一个大而全的框架，同时它和 Vite 结合比较紧密，不确定使用其他打包工具时会不会有麻烦。

或许 React 生态需要一个新的路由库了，也或许不再需要独立的路由库了？

<hr />

## 技术

#### [Framer Motion is now independent, introducing Motion](https://motion.dev/blog/framer-motion-is-now-independent-introducing-motion)

Framer Motion 是一个很受欢迎的、用于 React 的动画库，目前它从 Framer 公司中拆分出来作为一个独立的开源项目，并且更名为 Motion，也有了独立的网站，并且也支持原生 JavaScript 了。

#### [关于 React App 业务逻辑的组织](https://zgq.me/posts/react-app-dev/)

因为 React 比较自由灵活，所以不同的人会写出不同的风格，但不论怎样，目的都是以最低的成本去实现业务逻辑，并且达到高内聚低耦合的状态，以实现项目的可维护性，这篇文章就从渲染逻辑的拆分、代码文件的组织和业务状态的划分等几个方面总结了自己的经验，对于项目实践还是比较有参考意义的。

#### [Introducing the vlt Package Manager & Serverless Registry](https://blog.vlt.sh/blog/introducing-vlt-and-vsr)

vlt 是 npm 团队发布的下一代 JavaScript 包管理器，可以直接替代目前已有的包管理器，并且提供了配套的 Serverless 包注册表 vsr，也可以自托管来发布自己的包。号称下一代的包管理器已经有好多了，不确定 vlt 的未来发展如何。

#### [Introducing Edge Scripting: A better way to build and run applications at the edge!](https://bunny.net/blog/introducing-bunny-edge-scripting-a-better-way-to-build-and-deploy-applications-at-the-edge/)

CDN 服务商 Bunny 发布了他们的 Serverless 平台 Bunny Edge Scripting，该平台基于 Deno 构建，可以快速在全球网络中部署 JavaScript 应用，功能类似于 Vercel 的 Edge Functions 和 Cloudflare 的 Workers，价格比较便宜。

## 开源

#### [Web Archive](https://github.com/ray-d-song/web-archive)

Web Archive 是一个基于 Cloudflare 网页归档工具，可以自行部署，与其他同类工具不同的是，它在浏览器端就完成网页快照的抓取，可以规避一些网站需要登录带来的麻烦。

#### [Vue-Fabric-Editor](https://github.com/ikuaitu/vue-fabric-editor)

Vue-Fabric-Editor 是一个基于 FabricJS 和 Vue 的开源图片编辑器，具有插件化架构、拖拽式设计的特点，功能比较丰富，支持 PSD 解析、自定义字体、裁剪等，开源版本仅有前端部分，付费版本有完整的前后端和管理后台。
