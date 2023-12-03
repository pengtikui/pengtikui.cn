---
title: 第45期：降本增笑
date: 2023-12-02
description: 开猿节流，降本增笑
---

![](/static/weekly/issue-45-cover.jpg)

最近一段时间，多家互联网大厂都出现了严重的线上事故，比如语雀服务宕机 8 小时、阿里云持续 3 个多小时的全球所有机房故障、滴滴系统故障持续 9 个多小时等，这其中任何一起事故都是历史罕见的，这也让我们意识到我们所依赖的、习以为常的互联网服务原来是那么脆弱。

这被网友调侃为“开猿节流，降本增笑”。因为近一两年来，许多大公司都进行了大规模裁员，尤其是在年底这个裁员高峰期，导致经验丰富的老员工都被赶走，留下的人又不足以维护系统的稳定运行，进而导致了多起大规模的事故。

这从侧边印证了互联网公司的一些问题：

一是对技术缺乏敬畏之心。尽管这些互联网巨头搭建了支持数亿用户的系统，却依旧被调侃为“没有技术”，外表光鲜亮丽，背后却是一群人苦苦支撑的烂摊子，一旦少了某个支撑点，整个系统可能就会崩塌。造成这一问题的根本原因是单纯的技术本身并不能给公司直接赚来钱，不能给领导的履历增色，不能给自己的绩效加分，所以从上到下都是“又不是不能用”的心态。

二是缺乏社会责任心，只会向钱看。像阿里、滴滴这种规模的企业，他们的服务已经渗透到我们的日常生活中，一旦出现大规模故障，所有人的生活都会受到影响，然而他们的决策不是为了用户体验或服务稳定，更多的是为了财报，与其假惺惺的搞一些公益基金会，不如好好善待自己的员工。

<hr />

## 技术

#### [TypeHero](https://typehero.dev)

TypeHero 是一个在线学习和练习 TypeScript 的网站，它与 Leetcode 有点类似，提供了一系列的挑战题目，可以在线提交和运行代码。

#### [Vite 5.0 is out!](https://vitejs.dev/blog/announcing-vite5)

Vite 发布了 5.0 大版本更新，但是没有太多的破坏性更新，比较大的升级点是底层升级到 Rollup 4，并且不再支持已结束生命周期的 Node.js 版本。

#### [Rspack 0.4 发布，增强版 CLI Rsbuild 登场！](https://mp.weixin.qq.com/s/dorbW52HcJCaJaL9yybC3Q)

[Rspack](https://rspack.dev/) 是基于 Rust 实现的 Web 构建工具，其高度兼容 webpack，所以也可以理解为 Rust 版的 webpack。[Rsbuild](https://rsbuild.dev/) 则是基于 Rspack 做的封装，集成了一些开箱即用的功能，降低使用门槛。

## 开源

#### [Float UI](https://www.floatui.com/)

Float UI 是一系列的 UI 组件和模版，基于 React 和 Tailwind CSS 开发，并且也支持 Vue.js、Svelte 和原生 HTML。它与 [shadcn/ui](https://ui.shadcn.com/) 有些类似，都不是传统意义上的组件库，而是提供组件的代码，把自己需要的组件代码复制到自己的项目中即可。

#### [1Panel](https://github.com/1Panel-dev/1Panel)

1Panel 是一个更现代的 Linux 服务器运维管理面板，基于 Golang 和 Vue.js 开发。对 Docker 提供了比较完善的支持，并且也支持域名管理、主机监控、文件管理等功能。

## 工具

#### [Hoppscotch](https://hoppscotch.com/)

Hoppscotch 是一款开源的接口调试工具，支持 HTTP、GraphQL、Websocket 等协议。现在 Postman 和 Insomnia 都越来越臃肿，并且必须要登录才能使用，所以 Hoppscotch 是个很不错的替代品，并且最近也[发布了基于 Tauri 的桌面应用](https://hoppscotch.com/blog/introducing-hoppscotch-desktop-application)。
