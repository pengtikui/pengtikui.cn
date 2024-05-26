---
title: 第62期：React 19 之 use
date: 2024-05-26
description: use 不是个 Hook
---

![](/static/weekly/issue-62-cover.jpg)

这是 React 19 系列的第二期，这期介绍一个新增的 API `use`，注意 `use` 名字虽然很像 Hooks，但它**不是**个 Hook，目前这个 API 在 Next.js 中可用。

`use` API 用于在组件渲染时读取资源，目前支持从 Context 或 Promise 中读取资源，后续也可能会支持更多方式。

使用 `use` 读取 Context 的方式与 `useContext` 基本相同，参数都是某个 Context，返回值都是该 Context 的值，但不同的是 `use` 没有 Hooks 的规则约束，可以在循环或条件语句中使用。

使用 `use` 从 Promise 读取数据的简单示例如下：

```jsx
import { use } from 'react';

function Comments({ commentsPromise }) {
  const comments = use(commentsPromise);
  return comments.map((comment) => <p key={comment.id}>{comment}</p>);
}

function Page({ commentsPromise }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments commentsPromise={commentsPromise} />
    </Suspense>
  );
}
```

此时 `use` 不是单个的 API，它可以配合服务端组件、Suspense 和 ErrorBoundary 使用。上面的例子中，Page 为服务端组件、Comments 为客户端组件，服务端组件将 Promise 传递给客户端组件，在 Promise 处于 pending 状态时，页面上会显示 fallback 的内容，Promise 进入 fulfilled 状态时则渲染 Comments 组件，如果 Promise 进入 rejected 状态，则可以配合 ErrorBoundary 来显示错误信息。

相较于在服务端组件中使用 async/await 获取数据，`use` 不会阻塞页面的渲染，因为服务端组件需要等 await 完成后才开始进行渲染。需要注意的是，Promise 的返回值是要在服务端和客户端间传递的，所以返回值需要是可序列化的，函数等数据类型就不行。

写到这才意识到了解 `use` 之前最好先了解一下服务端组件和客户端组件，顺序有点搞反了，下期就写服务端组件吧，当然如果你之前了解过 Next.js，那就不存在这个问题。

## 技术

#### [Angular v18 正式发布！](https://mp.weixin.qq.com/s/eCN_czoHtDGSlYnJY637Yw)

Angular 又发布了新的大版本 v18，该版本包含了众多功能迭代更新，如对 zoneless 变更检测的实验支持、服务器端渲染改进、稳定的 Material 3 等，并且 angular.dev 正式作为新的官方文档。

#### [SolidStart 1.0: The Shape of Frameworks to Come](https://www.solidjs.com/blog/solid-start-the-shape-frameworks-to-come)

SolidJS 是个与 React 类似的 UI 库，但是它的特点是没有虚拟 DOM，SolidStart 则是基于 SolidJS 的开发框架，提供一些开箱即用的功能，如路由、服务端渲染等，类似于 React 的 Next.js、Vue 的 Nuxt.js 等。

## 产品

#### [Sink](https://github.com/ccbikai/sink)

一个开源的、自带分析功能的短链接服务，其基于 Cloudflare 技术栈实现，包括数据库、数据分析和部署，可以轻松地部署到 Cloudflare 上。

#### [Yaak](https://yaak.app/)

又一个 Postman 的替代品，跨平台且支持 REST、GraphQL 和 gRPC，功能比较全面，所有的数据都是本地存储，目前还处于开发阶段。

## 其他

#### [飞机为什么能飞起来？直到今天，科学家仍然没有答案](https://www.xuefeiji.org/cms/show-120.html)

文章内容如标题，挺有意思的，上学的时候课本上说是伯努利原理，但没想到伯努利原理并不能作为完整的理论支撑，并且目前也没有完整的理论来解释飞机为什么能飞起来。
