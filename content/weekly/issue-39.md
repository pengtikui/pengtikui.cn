---
title: 第39期：前端为什么那么复杂？
date: 2023-09-23
description: 前端越来越复杂，你还学得动吗？
---

![](/static/weekly/issue-39-cover.jpg)

前端每隔一段时间就会诞生一些新的理念、新的库或框架、新的工具，很多人抱怨“学不动了”，也有不少人说前端越来越复杂了、搞不懂了。那么前端到底是为什么这么复杂呢，简单说一下我的想法吧。

**技术栈复杂多样**

浏览器支持 HTML、CSS、JavaScript 和 WebAssembly 四种语言，这四种语言的功能、特性和语法都完全不同。如果要开发一个完整的前端应用，那前三者都是必须要会的，并且要在三种思维方式上灵活切换，后端虽然也有很多种语言，但用它们要实现的功能都是一样的，思维方式是一样的。

**运行环境多样且不可控**

前端代码是要运行在客户端的，客户端可能是手机、平板、电脑等，它们又运行着不同内核、不同版本的浏览器，前端代码需要考虑到这些设备的兼容性和性能问题，UI 上也要考虑适配不同尺寸的屏幕，而后端代码运行环境则是稳定可控的，并且性能问题也可以靠加机器来解决。

**工程化能力落后**

前端早期那种 jQuery 一把梭的开发方式是毫无工程化可言的，没有固定的范式、没有 Lint、没有 CI/CD，这样的代码很容易陷入混乱，难以维护。在 Node.js 诞生以后，前端的工程化发展就变得非常快，所以每隔一段就会有新的理念、新的工具诞生，它们都是在前端工程化发展的路上不断摸索、不断演进。目前大部分工程化工具都是基于 Node.js 的，而现在又出现了各种替代 Node.js 的工具，所以前端的工程化远没到稳定成型的地步。

**需求愈发复杂**

早期前端承担的更多的是内容展示的需求，并没有太多的用户交互，而现在前端从“页面”变成了“应用”，承担了更多的功能和更复杂的用户交互。另外，为了更好地优化用户体验，前端也在“向后发展”，逐渐演变出了 BFF、全栈等内容，前端的职责范围不再仅限于浏览器。

<hr />

下周就是中秋和国庆假期了，所以周刊就停更两周吧，提前祝你假期快乐。

<hr />

## 技术

#### [WebKit Features in Safari 17.0](https://webkit.org/blog/14445/webkit-features-in-safari-17-0/)

Safari 17 已经跟随 iOS 17 正式发布了，本文介绍了 Safari 17 中 WebKit 的新特性。HTML 方面新增了 `search` 元素，支持了 `popover` 属性；CSS 方面支持了 `font-size-adjust`、`text-transform` 等属性，新增四种媒体查询；JS 方面支持了 Storage API、Offscreen Canvas 等；另外新增了对 HEIC 图片、AV1 视频的支持，macOS 端也支持了 PWA 相关的能力。

#### [Remix v2](https://remix.run/blog/remix-v2)

Remix 是 React Router 团队开发的全栈 Web 框架，近期发布了 v2 版本。v2 相较于 v1 并没有太大的改动，因为大部分新特性已经在 v1 中通过 Future Flags 的方式提供，只是 v2 中移除了这些 Future Flags，不过 v2 提供了新的 `create-remix` CLI 工具，并且支持 Bun。另外值得注意的是 v2 版本仍然不支持 React 服务端组件，需要等到 v3 才能支持。

#### [Next.js 13.5](https://nextjs.org/blog/next-13-5)

Next.js 也发布了新版本 13.5，该版本没有引入一些新特性，只是常规的 bug 修复和性能提升，提高了本地开发服务和 HMR 的启动速度，降低了内存占用。

## 开源

#### [GoFrame](https://github.com/gogf/gf)

GoFrame 是基于 Golang 的模块化、高性能、企业级框架，提供了丰富的、开箱即用的组件，类似于 PHP 的 Laravel 或 Java 的 Spring 框架。

#### [Chartbrew](https://github.com/chartbrew/chartbrew)

Chartbrew 是一个开源的 Web 应用，它可以直接连接到数据库或 API 来创建数据图表，可用于创建一站式的数据看板，UI 设计的也很好看。

## 设计

#### [Untitled UI v4.0](https://www.untitledui.com/changelog)

Untitled UI 号称是世界上最大的 Figma 设计系统，它包含 10000 多种组件及其变体、420 多个页面示例和 2000 多个图标。最近发布了 v4.0 版本，也是迄今为止最大的更新，在该版本中支持了暗色模式，支持了 Figma 的新特性，如颜色变量、Auto Layout 5.0 等。

<hr />

> 感谢 ChangeHow 从意大利发来的热乎的照片作为本期封面图。
