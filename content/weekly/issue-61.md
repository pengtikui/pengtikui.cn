---
title: 第61期：React 19 之 React Compiler
date: 2024-05-19
description: 来提前学习一下 React 19
---

![](/static/weekly/issue-61-cover.jpg)

React 19 最近发布了 Beta 版，预计正式版也快了吧。之前在[第 52 期：React 19 前瞻](/weekly/issue-52)中对 React 19 的新特性做了简单的介绍，但是不够详细，从这期开始就做个 React 19 系列，每期介绍一个 React 19 的新特性，内容相对详细一点。

这期就先来介绍一下 React Compiler，它的前身是 React Conf 2021 上介绍的 React Forget，三年过去了，终于从理念变为现实了。从名字上就能看出来 React Compiler 是一个编译器，所以它不是 React 库本身内置的功能，算是个“周边产品”吧。

在以往的 React 代码中，我们会经常用到 useMemo、useCallback 和 React.memo 等 API 来对变量等进行 memoized 处理，以减少不必要的重渲染次数，提升应用性能。而这些 API 需要开发者手动处理依赖，就可能会出现遗漏或写错等问题，也提高了开发者的心智负担。

React Compiler 就是为了解决这些问题的，它会在编译期间通过对 JavaScript 语义和 React 规则的理解，自动添加优化代码，不再需要开发者手动处理。当然它工作的前提是你的代码遵循 [React 规则](https://react.dev/reference/rules)，如果你的代码没有遵循这些规则，它会跳过这些代码不进行处理，不会对原有代码逻辑造成任何影响。另外如果你的代码完全遵循了 React 规则，并且进行了细致的 memoized 处理，那它对性能的提升可能会很小，毕竟你的代码已经很好了。

目前 React Compiler 由 Babel 插件和 ESLint 插件两部分组成，Babel 插件用于编译期间对代码进行处理，ESLint 插件用于在编辑器中显示编译器的分析结果，两者可以分别独立进行使用。具体使用方法可以参考 React 的[官方文档](https://react.dev/learn/react-compiler)。

<hr />

## 技术

#### [为什么 PostgreSQL 是未来数据的基石？](https://mp.weixin.qq.com/s/olTWUG0p0DqJYHVOqn_wcQ)

在第 53 期中推荐过一篇文章 [技术极简主义：一切皆用 Postgres](https://mp.weixin.qq.com/s/yI06zdqnW5uWnqvKmgM-9g)，事实上也确实是越来越多的公司和业务场景在使用 Postgres，本文就是从多个方面来解释为什么会出现这种现象。

## 开源

#### [Dokploy](https://github.com/Dokploy/dokploy)

Dokploy 是一个开源的 PaaS 服务，可以理解为开源版的 Vercel，UI 确实也很像，它的底层基于 Docker 和 Traefik 实现，简化了应用和数据库的部署和管理。

#### [Technitium DNS Server](https://github.com/TechnitiumSoftware/DnsServer)

一个开源的、可自部署的 DNS 服务器，支持 DNS-over-TLS、DNS-over-HTTPS 和 DNS-over-QUIC 等特性，支持 Windows、Linux、macOS、Docker 等环境部署，并且自带 Web 界面，可用于广告拦截、访问统计等场景。

## 产品

#### [DAU Calculator](https://ethonlau.github.io/dau-calculator/)

一个用简单的数学模型来预测用户留存与未来 DAU 的小工具。
