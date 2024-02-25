---
title: 第52期：React 19 前瞻
date: 2024-02-25
description: 提前看看 React 19 会有哪些更新
---

![](/static/weekly/issue-52-cover.jpg)

在春节假期期间，React 团队发布了一篇官方博客 [React Labs: What We've Been Working On – February 2024](https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024)，在这篇博客中透露了一些研发进展。博客中提到 React 的下一个稳定版本将会是 React 19，不过目前仍有不少准备工作需要做，接下来的几个月中他们会陆续分享更多相关内容。React 19 中的绝大部分新特性都来自于 Canary 版，所以我们可以提前来看看 React 19 中有哪些新特性。

这里我们先来了解一下目前 React 的版本发布逻辑。目前 React 有两个并行发布的版本，一是稳定版，比如 18.2、19 等，稳定版是面向使用 React 开发应用的开发者的，目前最新的稳定版是 18.2.0，发布已经将近两年；二是 Canary 版，其目的是快速发布和迭代新特性，发布比较频繁，它面向的是框架开发者，比如 Next.js 使用的就是 Canary 版，Next.js 13 中引入的 React Server Components 就来自于 Canary 版，关于 Canary 版的更多信息可以参考 [React Canaries: Enabling Incremental Feature Rollout Outside Meta](https://react.dev/blog/2023/05/03/react-canaries)。

下面就梳理一下 React 19 中的新特性，如果你在使用 Next.js，那么你可能就已经用到了一些新特性。

**React Compiler**

React Compiler 也就是之前的 React Forget，它可以在编译时优化 React 重渲染的情况。我们现在使用 useMemo、useCallback、memo 等 API 来减少不必要的重渲染，在有了 React Compiler 后就不需要手动去做这些优化了，这些 API 可能也会成为历史，目前 React Compiler 已经应用在 Instagram 的生产环境中。由于它是编译时的功能，还不确定会以什么形式发布。

**新的 Hooks**

在 React 19 中可能会新增几个 Hooks：

- **use**: 用于从 Promise 或 context 中读取资源，它简化了异步资源的获取和 context 的使用，具体可参考官方文档 [use](https://react.dev/reference/react/use)；

- **useOptimistic**: 用于优化异步操作的 UI 展示，增强用户体验，具体可参考官方文档 [useOptimistic](https://react.dev/reference/react/useOptimistic)；

- **useFormState / useFormStatus**: 这俩 Hooks 是配合新特性 Actions 使用的，用于更新和获取表单相关的状态，具体可参考官方文档 [useFormState](https://react.dev/reference/react-dom/hooks/useFormState) 和 [useFormStatus](https://react.dev/reference/react-dom/hooks/useFormStatus)；

**Actions**

以往在 React 应用中提交数据都是用 React Hook Form 等表单库获取表单数据，然后向后端发送 Ajax 或 Fetch 请求。Actions 是一个新数据提交方案，它大幅简化了表单状态的管理，通过原生 form 的 action 属性，并配合 useFormState 和 useFormStatus 来实现表单提交和异步状态管理，具体内容可参考官方文档 [\<form\>](https://react.dev/reference/react-dom/components/form)。

Next.js 中的 Server Actions 就是基于该特性实现，并且与 Remix 中的 action 也有些类似，个人觉得这些方案都不太好用，尤其是在比较复杂的表单中。

**Document Metadata**

以往在 React 应用中想要修改 `<title>`, `<link>`, `<meta>` 等 head 中的信息时，需要使用 react-helmet 之类的三方库，在 React 19 就不需要了，`<title>`, `<link>` 等标签可以写在组件中的任意位置，React 会帮你把它们放到 head 里面。具体可参考官方文档 [\<link\>](https://react.dev/reference/react-dom/components/link), [\<meta\>](https://react.dev/reference/react-dom/components/meta), [\<script\>](https://react.dev/reference/react-dom/components/script), [\<style\>](https://react.dev/reference/react-dom/components/style), [\<title\>](https://react.dev/reference/react-dom/components/title)。

除了上述内容，还有一些零碎的更新点，比如 Asset Loading 等，具体可以参考 React 官方博客的原文。从目前的信息来看，React 19 有望在今年内发布，并且没有太多的破坏性更新，React 18 的项目升级应该问题不大，不过你的项目升级 React 18 了吗？

<hr />

## 技术

#### [Express Forward](https://github.com/expressjs/discussions/issues/160)

Express 作为老牌的 Node.js 框架，已经很长一段时间处于维护状态了，不过最近官方发布了后续的更新计划，公布了 5.0、6.0 和 7.0 版本的更新计划。

#### [Announcing the Tauri v2 Beta Release](https://beta.tauri.app/blog/tauri-2-0-0-beta/)

Tauri 是类似于 Electron 的跨平台应用开发框架，相较于 Electron，它的性能和打包体积要好很多。最近 Tauri 发布了 v2 的 Beta 版，除了常规的功能更新，最大的升级是支持了移动端应用开发，成为了横跨桌面端和移动端的跨端开发框架。

目前 Tauri 的功能相较于 Electron 还很不完善，并且 bug 也比较多，现在又支持了移动端，坑越挖越大啊，对其前景表示不看好。

#### [Project IDX](https://idx.dev/)

IDX 是 Google 新发布的基于 Web 的代码编辑器，目前还没有开放，需要加入 waitlist。从介绍来看，其最大的特点是对全栈应用开发有较好的支持，比如支持多种框架、基于 Web 的 Android 和 iOS 模拟器等，当然也少不了 AI 支持。

## 产品

#### [Apple 用户体验撰写团队答疑](https://developer.apple.com/cn/news/?id=5mcfho5g)

在开发产品时，文案也是很重要的一部分，好的文案可以给用户更好的引导，也可以建立自己的品牌风格。本文是苹果官方对文案撰写中一些问题的答疑，是个很不错的参考内容。

## 开源

#### [Unkey](https://github.com/unkeyed/unkey)

开源的认证和授权管理方案，同时也提供云服务直接使用。相较于 Auth.js 等方案，其 API 设计的更灵活一些，并且提供多种语言和框架的 SDK。

#### [OpenStatus](https://github.com/openstatusHQ/openstatus)

开源的网页和 API 状态监控服务，UI 设计的也很好看。虽然是开源的，但官方并没有提供完善的自部署文档，看上去更倾向于使用他们的云服务。
