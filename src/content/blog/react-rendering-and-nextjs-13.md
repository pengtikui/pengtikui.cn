---
title: React 渲染方式与 Next.js 13
date: 2022-11-13 16:40:23
description: 随便聊聊 React 渲染方式的变化以及 Next.js 13 为未来带来的新思路。
tags:
  - React
  - Next.js
  - Remix
  - CSR
  - SSR
  - SSG
  - Server Components
  - 岛屿架构
---

> 随便聊聊 React 渲染方式的变化以及 Next.js 13 为未来带来的新思路。

## 前言

最初期的 Web 是将静态文档链接组合起来，人人都可以访问。随着文档越来越多，维护静态文档越来越难，于是诞生了像 CGI 这种的动态文档技术。

随着 Web 技术的发展，逐渐发展出了 jQuery 等 JS 框架来丰富页面的交互和功能，但无论是 CGI 还是类 jQuery 框架，无一例外都是由服务端生成 HTML 返回给浏览器进行渲染，JS 的功能仅限于增强页面效果。这种模式下，前端代码和后端代码耦合在一起，并且更新界面时需要命令式的去操作 DOM，进而导致项目难维护，限制了前端进一步壮大。

## 现代前端框架

在 jQuery 之后，逐渐出现了 Angular、React 和 Vue 等框架，这些框架相较于传统的 jQuery 等框架，主要区别在于：

- 数据驱动 UI，无需命令式操作 DOM
- 前后端分离架构
- 基于 Node.js 的工程化体系

因此把这些框架称为现代前端框架，这些框架脱离了后端的束缚发展出了多种渲染方式，下面以 React 为例简单聊聊这些渲染方式，其他框架也都类似。

## CSR

最初使用这些框架的方式主要是客户端渲染的 SPA，即单页面应用程序，由客户端（浏览器）生成 HTML 并渲染，路由也由客户端接管，服务端只需提供接口并以 Ajax 方式调用：

![CSR](/static/react-rendering-and-nextjs-13/csr.png)

这种方式相较于传统的 jQuery 模式，能够带来一些好处：

- 更好的开发体验，前后端分离的项目代码更易于维护，同时后端一套接口可以提供给多端使用；
- 更好的用户体验，切换页面时仅刷新变化的部分，不会出现切换页面时的白屏和等待，使用体验上更像是一个应用，而非一个网页；

> jQuery 也可以实现前端后端分离的结构和单页面模式，但需要开发者编写大量的操作 DOM 的命令式代码，不利于代码维护和项目规模扩大。

当然 CSR 模式也存在一些问题：

- 静态资源体积爆炸式增长，大量的 JS 代码和 npm 包被打包发送给客户端，如果没有特意做优化，可能会达到几十 M 的大小；
- 瀑布式请求，导致页面首屏白屏时间较长，并且在交互时频繁展示 Loading 状态，Loading 看似是在优化用户体验，但过多的 Loading 会起到反作用；
- SEO 效果差，因为返回给客户端的 HTML 是没有任何内容的，需要等 JS 加载后再渲染，导致搜索引擎无法抓取页面内容；
- 运行时性能可能不佳，在客户端执行大量的 JS 代码，性能取决于用户的设备性能，对于低性能的用户设备来说效果可能不佳；

## SSR

为了解决 CSR 的一些问题，就诞生了 SSR，即服务端渲染，发起请求时，由服务端（Node 服务）生成 HTML 返回给客户端：

![SSR](/static/react-rendering-and-nextjs-13/ssr.png)

与 CSR 不同的是，SSR 会在首次请求时返回已生成的 HTML 和页面所需要的数据，优化了 CSR 模式的首屏渲染问题和 SEO 问题，但大多数 SSR 架构设计都是只针对首屏进行服务端渲染，页面加载后的操作和 CSR 模式没有任何区别。
但同时也引入一些新的问题：

- 首次请求返回的内容中除了包含了已生成的 HTML 文本，还包含了该页面所需要的数据，一般以 JSON 形式注入到 script 标签中。这些数据已经注入到 HTML 里面，又以 JSON 形式存储一份，就导致了数据冗余，对于内容量比较大的页面，响应体积增幅比较明显；
- 页面首次加载后只有静态的 HTML，还没有组件实例、事件监听等，这时候会通过 JS 进行 hydrate（水合）操作，即使用 HTML 中的 JSON 数据生成虚拟 DOM，并于已有的 HTML 对比合并，在生成虚拟 DOM 的过程中需要大量的 JS 运算，尤其是页面内容较多时，此时 JS 线程会被占用阻塞，导致无法及时响应用户交互。因此 SSR 模式优化了首屏渲染时间（FP），但牺牲了首次可交互时间（TTI），对于纯内容型的页面影响不大，但对于有用户交互的网站会给用户带来卡住了的印象；
- 由于 SSR 需要在服务端运行一个 Node 服务生成 HTML，并且会占用较高的 CPU 资源，会导致服务器成本和运维成本的增高；

> React 的这种 SSR 模式叫做 SSR 可能不太合理，或者不太严谨，常规意义上的服务端渲染是指所有页面由服务端生成，如 PHP、JSP 或者 Node.js + 模版引擎的模式，而 React 的 SSR 模式只是在服务端渲染首次请求的页面，后续用户交互的页面与 SPA 模式没有任何差异。因为 React 的 SSR 模式是同一套代码可以同时在服务端和客户端运行，所以叫做同构可能会更合适一点。

## SSG & ISR

鉴于 SSR 模式常用于对 SEO 和首屏渲染要求较高的内容型网站，比如新闻站、博客、企业官网等，并且这些网站对动态性的要求不高，内容更新频率较低，维护一个成本较高的 Node 服务不太划算，因此诞生 SSG 模式，即静态站点生成（Static Site Generation），它的原理和 SSR 基本类似，唯一不同的是把 SSR 生成页面的过程放在编译时去完成，在项目编译时就生成每个页面的 HTML 和 JSON 文件，用户首次请求的页面返回 HTML 文件，后续的页面返回 JSON 文件，由客户端更新页面，因此整个站点就是纯静态的了，不再需要 Node 服务了。

但 SSG 模式也有缺陷，如果网站的内容特别多或更新内容较频繁，比如新闻网站有几万篇文章，且每天新增多篇，SSG 模式下编译时间就会长到不能接受，并且产生的静态文件量太大。这时就需要 ISR 模式了，即增量静态生成（Incremental Static Regeneration），所有的静态页面按需增量生成，比如某个页面仅在用户第一次请求时生成，后续再访问这个页面直接返回静态文件即可，当然这种模式需要像 SSR 模式运行一个 Node 服务。

上面提到的 SSR、SSG 和 ISR 模式，除 Next.js 外，Gatsby、Vue 生态的 Nuxt 也都支持这些模式。

## React 18

React 18 提供了几个新的能力：Server Component、Suspense 和 `use`。

- Server Component 顾名思义是在服务端运行的 React 组件，与之前的 SSR 不同的是，Server Component 支持流式 HTML 和选择性水合，需要配合 `renderToPipeableStream`、`hydrateRoot` 和 Suspense 来实现。
- Suspense 是 React 16 新增的 API，但之前只能配合 `lazy` 来实现组件的动态加载，在 React 18 中得到了增强，流式渲染就要依靠它。
- `use` 用于在客户端组件中支持 async / await，可以把它理解为 React 版的 `await`。

```typescript
// Server Component
async function Note({ id, isEditing }) {
  const note = await db.posts.get(id);
  return (
    <div>
      <h1>{note.title}</h1>
      <section>{note.body}</section>
      {isEditing ? <NoteEditor note={note} /> : null}
    </div>
  );
}

// Client Component
function Note({ id, isEditing }) {
  const note = use(fetchApi('/posts'));
  return (
    <div>
      <h1>{note.title}</h1>
      <section>{note.body}</section>
      {isEditing ? <NoteEditor note={note} /> : null}
    </div>
  );
}
```

这几个 API 都相对比较低层，开发者比较难直接使用，需要依靠一些框架做一些上层封装。

## Next.js 13

基于以上 React 提供的新能力，Next.js 13 首次将 Server Component 变为实际可用（之前一直是 RFC 阶段，并没有实际实现），并实现了流式渲染，即页面不一次性发送到客户端，而是一部分一部分地发送。

在 Next.js 13 中新增了一个 `app` 目录用于替代原来的 `pages` 目录，为了向后兼容，两者可以共存。除了提供了全新的基于文件的路由，同时 `app` 目录内的页面全部默认为 Server Component，这些组件都会在服务端进行渲染，渲染后的页面会分批次返回给客户端，并分批次进行水合。

![](/static/react-rendering-and-nextjs-13/rsc.png)

![](/static/react-rendering-and-nextjs-13/nextjs.png)

组件返回的顺序不需要开发者关心，框架会根据组件渲染和数据拉取速度自行处理，因此某个组件响应较慢不会影响页面的整体响应速度，页面上会先用 Loading 占位符展示。
这种模式下会有以下好处：

- 由于返回的是 React 定义的 DSL，而非 JS 文件，因此体积上可以大幅减小，比如组件内渲染一段 Markdown 内容，只会返回渲染后的内容，而不会返回解析 Markdown 的 npm 文件；
- 流式渲染和选择性水合可以加快首屏渲染时间和首次可交互时间，选择性水合可以根据用户的行为自动判断优先水合哪部分内容，比如有 A、B 两个区域需要水合，此时用户点击了 B 区域，就会优先水合 B 区域，以保证 B 区域更快的响应用户的交互；
- Server Component 使组件具备了完整的服务端能力，比如可以直接组件内读取数据库，而不再需要之前 `getServerSideProps` 之类的 API，降低开发者的学习成本；
- 组件之间更加解耦，每个组件所需的数据都自行获取即可，无需通过其他组件层层传递，如果多个组件调用同一个接口获取数据，Next.js 会自动做去重和缓存；
- 所有的数据请求逻辑都放在服务端，响应速度也会更快；
  由于在 Server Component 是在服务端运行，所以在组件内不能调用浏览器端的 API，如 `window.xxx` 等，也不能使用 `useState`、`useEffect` 等 Hooks。如果想要组件在客户端运行，可以使用客户端组件，在 Next.js 13 中，在组件文件开头加一行 `"use client"` 即可。

## 岛屿架构

> 主流之外的一个新分支

不论是 SSR、SSG、ISR，都是在针对不同场景做性能优化和取舍，但这些模式无一例外都会有大量的 JS 代码在客户端运行，大量 JS 代码也是导致性能问题的主要原因，那我不要 JS 代码呢？

不用 JS 对于大部分内容网站是完全可行的，但开发方式就过于原始了，并且不能享受 npm 生态的红利了，并且现在大多数网站也不完全是静态的 🤣

于是就诞生了岛屿架构，简单来说就是将整个静态的页面视为一片大海，在需要动态和交互地方注入 JS 代码，也就是一个个岛屿，并且每个岛屿互相独立。比如一个博客网站，每篇博客的内容是纯静态的 HTML，而下面的评论区使用 JS 动态加载和渲染。

![Islands Architecture](/static/react-rendering-and-nextjs-13/islands.png)

可能是使用场景比较有限吧，目前已实现岛屿架构的框架并不多，相对比较成熟的有 Demo 的 Fresh 框架（基于 Preact），完全基于岛屿架构的理念去设计和实现，此外还有 Gatsby v5 新推出的部分水合（Partial Hydration）与岛屿架构很相似。

## Remix

Remix 是一个与 Next.js 高度相似的框架，但他不具备 SSG 等静态生成的能力，必须要运行一个 Node 服务，他的数据获取方式也与 Next.js 13 类似，也有于 Next.js 13 相似的嵌套式路由。不过他的大部分能力是基于 React Router 实现的，毕竟是由 React Router 团队开发的。

![Remix](/static/react-rendering-and-nextjs-13/remix.png)

题外话：由于 Next.js 13 的功能大多依赖 React 提供的底层能力，有些 API 是首次被使用，比如 Server Component 和 `use`，并且 Next.js 的开发有 React 团队参与，因此有人质疑 React 团队是不是给 Next.js 团队开小灶，Next.js 会不会慢慢变成 React 的“发行版”，会不会影响其他框架的发展，是 Next.js 一家独大哈哈哈。

## 参考资料

- [New Suspense SSR Architecture in React 18](https://github.com/reactwg/react-18/discussions/37)
- [First class support for promises and async/await](https://github.com/reactjs/rfcs/pull/229)
- [Islands Architecture](https://jasonformat.com/islands-architecture/)
