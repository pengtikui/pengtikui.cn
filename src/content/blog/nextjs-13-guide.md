---
title: Next.js 13 全解析
date: 2023-08-08
description: 通过这两种路由模式的对比，来介绍一下 Next.js 13 的各个特性。
tags:
  - Next.js
  - React
  - Server Components
  - RSC
  - Vercel
  - Serverless
  - Edge Function
---

> 本文为公司内部分享的文字稿，阅读时需要有一定的 React 基础、对 Next.js 有简单的了解。

Next.js 是基于 React 的 Web 框架，一般用于服务端渲染的应用或全栈应用。在 Next.js 13 中引入了新的 App Router 概念，但与先前的 Pages Router 可以共存，这就让开发者比较迷惑，不清楚这两者是啥，有什么区别，应该用哪个。

简单来说，这是两种路由模式，两种模式可以共存，两者都是基于文件的路由，App Router 是将路由文件放在 `app` 目录下，Pages Router 是将路由文件放在 `pages` 目录下。两种路由模式下，很多特性的使用方式都不一样，但是 Next.js 官方文档并没有两者的对比，而是将文档分为两类，所以就通过这两种模式的对比，来介绍一下 Next.js 13 的各个特性，尽量覆盖的全面。

## 路由文件

Next.js 13 中两种路由模式可以共存，但 App Router 的优先级高于 Pages Router。两者都是基于文件的路由，也就是基于文件的目录结构自动生成路由，不需要手动配置，但两者的规则不太一样，简单的对比如下：

|             | pages                                                | app                          |
| ----------- | ---------------------------------------------------- | ---------------------------- |
| /           | `./pages/index.tsx`                                  | `./app/page.tsx`             |
| /admin      | `./pages/admin.tsx` <br /> `./pages/admin/index.tsx` | `./app/admin/page.tsx`       |
| /blog/:slug | `./pages/blog/[slug].tsx`                            | `./app/blog/[slug]/page.tsx` |

最直观的区别是 Pages Router 以文件路径作为路由路径，比较简单直观；App Router 则是以文件夹的路径作为路由路径，该文件夹下的文件为该页面路径的 UI 元素组件，比如 `page.tsx` 文件作为页面组件文件，`error.tsx` 为出错时的 fallback 组件文件等，更多文件及其用途如下，这些文件都是和 `page.tsx` 同级的：

| 文件          | 用途                                           | 对比 pages                                 |
| ------------- | ---------------------------------------------- | ------------------------------------------ |
| layout.tsx    | 当前路径及子路径的公用布局组件                 | 只能在 `_app.tsx` 中引用一个全局的布局组件 |
| template.tsx  | 与 `layout.tsx` 类似，但路由变化时也会重新执行 | --                                         |
| loading.tsx   | 页面组件加载时的 Loading 界面                  | --                                         |
| not-found.tsx | 404 界面                                       | --                                         |
| error.tsx     | React Error Boundary 的 fallback 组件          | --                                         |
| route.ts      | API 路由，同一目录下不能和 `page.tsx` 共存     | 只能写在 `pages/api` 目录下                |

App Router 也移除了一些 Pages Router 中约定的文件：

| 文件           | 用途                                                                      | 对比 app                                           |
| -------------- | ------------------------------------------------------------------------- | -------------------------------------------------- |
| \_app.tsx      | 添加全局布局，引入全局样式文件                                            | 直接写在 `app/layout.tsx` 文件中即可               |
| \_document.tsx | 用于自定义 HTML 结构，需要从 `next/document` 导入 Html、Head、Main 等组件 | 同上，且无需导入组件，可以直接写 html、body 等标签 |
| \_error.tsx    | 自定义错误页面，全局性的                                                  | 同 `error.tsx`                                     |
| 404.tsx        | 404 页面，全局性的，作用与 `_error.tsx` 相同，但仅针对 404 这一种错误情况 | 同 not-found.tsx                                   |
| 500.tsx        | 500 页面，全局性的，作用与 `_error.tsx` 相同，但仅针对 500 这一种错误情况 | 同 error.tsx                                       |

除了上述这些规则，还有一些更高级、更复杂的用法，具体可以参考 Next.js 的官方文档：[App Router](https://nextjs.org/docs/app/building-your-application/routing) 和 [Pages Router](https://nextjs.org/docs/pages/building-your-application/routing)。

## 渲染方式

文件结构的约定不同只是两种路由方式最表层的区别，他们两者之间的渲染方式也完全不同，也是两种路由模式最本质的差异。

### Pages Router

在 Pages Router 中，支持多种渲染方式，并且这些渲染方式和其他同类框架没有本质区别：

#### SSR：

服务端渲染是 Next.js 最基本也最重要的渲染方式，这种渲染方式的大致流程为：

1. 用户发起请求，服务端生成 HTML，并把页面渲染所需的 JSON 数据注入到 HTML 中，然后返回给浏览器；
2. 浏览器渲染 HTML，然后加载 JS 等静态资源；
3. 在浏览器端，React 拿到 HTML 中的 JSON 数据，生成虚拟 DOM；
4. 将虚拟 DOM 和真实 DOM 进行水合 (hydrate) 操作；
5. 页面完成渲染并可交互；

需要注意的是，水合操作是一次性完成的，在完成之前页面是无法响应用户交互的，如果页面内容较多，水合过程中可能会出现短暂的卡顿，会影响 TTI 指标。这种渲染方式部署时需要启动一个服务端的 Node 服务。

#### SSG：

SSG 是指静态站点生成，其渲染流程与 SSR 类似，不同的是第一步不是在用户请求时在服务端执行，而是在编译阶段就完成，整个站点最后生成的都是一些静态文件，部署时也不需要启动 Node 服务。

#### CSR：

客户端渲染就比较简单了，如果用到了在 useEffect 中获取数据或其他在浏览器端请求数据的方式，都可以算作是客户端渲染。

#### ISR：

ISR 是指增量静态生成，当网站有特别多的页面，并且使用 SSG 的方式时，编译阶段需要大量的时间，ISR 就是为了解决这个问题，它在编译阶段只生成部分页面，其他页面在用户请求时按需渲染并缓存起来，本质上算是 SSG 和 SSR 的结合体。

> 什么是水合？其实这是个比较奇怪的翻译，简单来说 React 是基于虚拟 DOM 工作的，而 SSR 时服务端生成的 HTML 是真实 DOM，并且这些 DOM 节点没有做事件监听等，所以需要一步操作将这些真实 DOM 与虚拟 DOM 做映射，并添加事件绑定等能力，后续页面的操作才能由 React 来接管，这个过程就叫做水合。

### App Router

在 React 18 之前，React 应用的渲染都是重客户端的，即使是 SSR，也要在客户端执行繁重的水合操作。在 React 18 中引入了一个新的概念 -- React Server Components，即 React 服务端组件，简称 RSC，它可以在编译时或服务端运行。有了服务端组件，当然也有客户端组件与之对应，在组件文件的开头使用 `'use server'` 和 `'use client'` 指令来区分两种组件。

> 关于 React 服务端组件的更多内容，可以参考文档 [React Essentials](https://nextjs.org/docs/getting-started/react-essentials)。

目前支持服务端组件的框架只有 Next.js 13，在 Next.js 13 的 `app` 目录下的所有组件均默认为服务端组件，如果想要使用客户端组件，那在文件开头加上 `'use client'` 指令即可。

服务端组件带来以下好处：

1. 减小客户端 JavaScript 体积：因为服务端组件的逻辑都是在服务端执行后生成 HTML 返回给浏览器的，浏览器端不需要加在一些多余的 JS 文件，比如代码高亮、Markdown 渲染等，返回给客户端是渲染后的内容，不需要把用的这些包文件返回；
2. 渐进水合：本质上来说服务端组件是不需要水合的，但一些页面交互需要用客户端组件实现，所以一个页面上还是会有一些客户端组件的，这些客户端组件可以各自进行水合操作，不会阻塞主线程；
3. 组件具备服务端能力：因为服务端组件是运行在服务端的 Node.js 环境中的，所以它具备完整的 Node.js 能力，比如可以直接读取数据库、读取服务器上的文件等；

> 这里说的服务端执行后生成 HTML 返回给浏览器其实不太严谨，有些情况下也会返回 React 自己定义的 DSL 的数据。

当然服务端组件也有一些限制：

1. 不能使用浏览器端的 API，比如 localStorage 等；
2. 不能使用事件监听，如 onClick 等；
3. 不能使用状态和生命周期相关的 API，如 useState、useEffect 等；

## 数据获取

不论是 Pages Router 还是 App Router，数据获取方式可以分为三类：客户端获取、服务端获取和编译时获取。

客户端获取是 React 的常规逻辑，在这两种路由方式上没有任何区别，都是在组件的生命周期中执行，比如：

```tsx
export default function Page() {
  useEffect(() => {
    fetch('/api/xxx'); // 页面加载后请求接口
  }, []);

  return <div>xxx</div>;
}
```

而在服务端和编译时获取数据的方式则很不同，在 Pages Router 中，Next.js 提供了很多个 API 用来获取数据，这些 API 都是在页面文件中导出一个函数，比如：

```tsx
export default function Page({...}) {
  return <div>xxx</div>;
}
// 返回的 props 将会作为 Page 组件的 props
export const getStaticProps = async () => {
  return { props: {...} }
};
```

| API                | 用途                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| getStaticProps     | 用于 SSG 模式，在编译时就执行，然后将返回的 `props` 注入到页面中                                 |
| getStaticPaths     | 用于 SSG 模式和动态路由下，需要返回一个 `paths` 数据，用于表示当前动态路由一共有哪些页面需要生成 |
| getServerSideProps | 用于 SSR 模式，在每次请求页面时都会执行，并将返回的 `props` 注入到页面中                         |

在 App Router 中则完全依靠 React 服务端组件的能力，没有这么多 API，在服务端组件中可以直接执行一些异步请求：

```tsx
export default async function Page() {
  // 发起 HTTP 请求
  const data = await fetch('https://www.example.com/api/user');
  // 或者直接读取数据库
  const data = await db.user.findOne({ where: {...} });

  return <div>{data.xxx}</div>;
}
```

Next.js 13 中的 fetch 并非 [WHATWG](https://fetch.spec.whatwg.org/) 标准中定义的 fetch，Next.js 在其基础上做了一些特殊处理，增加了缓存相关的参数和一些去重逻辑。

默认情况下，fetch 请求会永久缓存，它在编译阶段就会执行，如果需要在每次页面请求时都执行，则把缓存设置为不缓存或缓存一段时间即可。

另外这些请求都可以是组件维度的，而不限于页面维度，所以可能会出现一个页面的多个组件执行同一个 fetch 请求的情况，Next.js 会自动处理这些重复的请求，保证渲染一个页面时不会重复发送同一个 fetch 请求。

## 其他

路由、渲染、数据请求是一个框架最核心的功能，除此之外，Next.js 也提供了一些其他的好用功能。

### Image

Next.js 提供了一个 Image 组件用于在页面上展示图片，相较于 img 标签，它有一些增强能力：

1. 尺寸优化：它可以根据设备类型自动提供最优尺寸的图片，也会根据客户端的支持程度提供更现代的图片格式，比如 WebP 或 AVIF 等；
2. CLS 优化：它会在图片加载完成之前自动进行占位，防止出现布局偏移导致页面性能下降；
3. 懒加载：默认当图片在可视区域内时，才加载图片；

### Metadata

在两种路由模式中，设置页面的 Meta 信息的方式也不同，在 Pages Router 中使用 Head 组件：

```tsx
import Head from 'next/head';

export default function Page() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <p>xxx</p>
    </div>
  );
}
```

在 App Router 中提供了两种方式，一是配置式的，在 `layout.tsx` 或 `page.tsx` 中导出 `metadata` 对象或 `generateMetadata` 函数：

```tsx
// 导出 metadata 对象
export const metadata: Metadata = { title: '...', description: '...' };

// 或者导出 generateMetadata 函数
export const generateMetadata = async (props) => {
  return { title: '...', description: '...' };
};

export default function Page() {
  // ...
}
```

二是基于文件的方式，比如 favicon、icon、apple-icon、opengraph-image、robots.txt 等这些可以直接放一个文件在 `app` 目录中，如果这些文件需要动态生成，也可以放一个同名的 JS/TS 文件，文件中默认导出一个函数来生成就可以了。

### Vercel

由于 Next.js 时 Vercel 开发的，所以部署到 Vercel 时会有一些额外的能力：

1. 性能分析：自动上报性能数据，如 TTFB、FCP、LCP 等指标，并提供可视化的数据报表；
2. 云函数：部署到 Vercel 的 Next.js 服务并不是启动一个完整的 Node.js 服务，而是每个路由生成一个云函数，如果是 Serverless Function 则部署到指定的节点上，如果是 Egde Function 则部署到全球多个节点上。Serverless Function 提供完整的 Node.js 能力，而 Egde Function 则是一个基于标准 Web APIs 的轻量环境，提供网络、编码、加密等能力。
