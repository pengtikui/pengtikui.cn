---
title: 第63期：React 19 之服务端组件
date: 2024-06-02
description: 拥抱服务端组件？
---

![](/static/weekly/issue-63-cover.jpg)

这是 React 19 系列的第三期，这期介绍一个在 React 19 中非常重要的新特性：服务端组件（Server Components）。服务端组件可以显著提升应用的性能和开发效率，也是 React 团队近几年着重研究和优化的方向之一，如果你之前用过 Next.js，那你应该对它比较熟悉，因为该特性在 Next.js 中早已可用。

服务端组件，顾名思义，就是在服务端渲染的组件，所有逻辑都在服务端（也支持编译时）执行，包括数据获取、状态管理等。与传统的客户端组件不同，服务端组件的渲染完全发生在服务器上，客户端只接收已经渲染好的 HTML。这样做的好处是减少了客户端的 JavaScript 负担，提高了页面加载速度和性能，另外服务端组件可以通过流（Streaming）的方式逐步发送到客户端，提高首屏渲染速度。

其实服务端组件也很好理解，以下面这段代码为例：

```jsx
import db from './database';

async function Note({ id }) {
  const note = await db.notes.get(id);
  return (
    <div>
      <Author id={note.authorId} />
      <p>{note}</p>
    </div>
  );
}

async function Author({ id }) {
  const author = await db.authors.get(id);
  return <span>By: {author.name}</span>;
}
```

两个组件中从 db 获取数据的逻辑都在渲染时在服务端执行，返回给客户端的只有渲染后的 HTML 内容，减少了客户端组件的 JavaScript 代码和接口请求。

服务端组件有以下一些优点：

1. **性能优化**：一是由于服务端组件在服务器渲染，减少了客户端的 JavaScript 执行和下载，比较显著的例子是实现代码高亮时不需要加载一个很大的 JavaScript 文件了，返回给客户端的就是已经处理好的 HTML，二是减少了接口请求次数，数据直接在服务端获取，减少了 HTTP 请求数量；
2. **SEO 友好**：由于服务端渲染的页面是完整的 HTML 内容，更容易被搜索引擎抓取和理解，提升 SEO 效果；
3. **更好的用户体验**：通过流式渲染，用户可以更快地看到内容，提高首屏渲染速度；

尽管服务端组件有很多优点，但也有一些使用限制和需要注意的地方：

1. **只能在服务端运行**：服务端组件不能使用浏览器相关的 API，如 `window`、`document` 等，也不能使用 React 的生命周期相关的 API，如 `useEffect` 等；
2. **序列化数据**：服务端组件传递给客户端的数据必须是可序列化的，不能传递函数等非序列化的数据，如函数等。

<hr />

## 技术

#### [Let’s learn how modern JavaScript frameworks work by building one](https://nolanlawson.com/2023/12/02/lets-learn-how-modern-javascript-frameworks-work-by-building-one/)

现代 JavaScript 框架是指 React、Vue 等框架，这些框架有一些共同点：响应式和不手动操作 DOM，本文通过自行实现一个框架来深入理解现代 JavaScript 框架的原理。

#### [Next.js 15 RC](https://nextjs.org/blog/next-15-rc)

Next.js 发布了 15 RC 版，该版本支持了 React 19、React Compiler 等新特性，改进了缓存策略、支持部分预渲染，另外引入新的 API `next/after` 用于响应后执行代码。

## 开源

#### [PicImpact](https://github.com/besscroft/PicImpact)

一个基于 Next.js 开发的相册应用，功能比较全面，UI 是基于 shadcn/ui 设计的，兼容多种文件存储 API，如 AWS S3、Cloudflare R2 等，支持 Vercel、Node.js、Docker 等多种部署方式。

#### [DocKit](https://github.com/geek-fun/dockit)

一个跨平台的 NoSQL/NewSQL 图形化客户端，支持 Elasticsearch、OpenSearch 等引擎，基于 Electron 和 Vue 开发。

#### [httpsok](https://github.com/httpsok/httpsok)

一个 HTTPS 证书自动续签工具，支持 Nginx 、OpenResty 服务器，也支持多家云厂商的 CDN、OSS 等服务，可以帮你自动处理 HTTPS 证书的更新，同时支持公众号推送提醒。

> 本期部分内容由 ChatGPT 生成
