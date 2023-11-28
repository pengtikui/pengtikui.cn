---
title: 第32期：kee.so 上线
date: 2023-07-29
description: kee.so - Your home screen on internet
---

![](/static/weekly/issue-32-cover.png)

经过几个月的开发和拖延，[kee.so](https://kee.so) 终于上线了！kee.so 是一个 Link in bio 服务，用于创建“个人页面”，人们可以在自己的页面上自由拼贴各种 UI 的创意。

同类产品中最著名的是 Linktree。Linktree 提供的是“横条”的陈列，一维空间，从上到下，非常简单。而 kee.so 想制造差异化的体验，于是想到了 Grids 的形态，一维空间变成二维空间，横向纵向都可以排列。借助 app 与 widgets 形态的灵感，将个人页体验变得丰富，制造出更多可能性。一个可以自由组合 app 与 widgets 的个人主页，于是给了它这个概念："home screen"。

在 kee.so 的这个页面上，可以集中展示一个用户的各个社交链接、网页链接、图片作品、文字作品。这个页面链接，由用户唯一定义，可以放在任何地方，放在 Instagram、Twitter、TikTok，放在任何社交平台。这个页面的设计，由用户自由创意，emoji 的 icon ，每个 widget 的不同背景色，主屏幕的 "壁纸"，给壁纸模糊，加上噪点，都没有问题。

如果你感兴趣，欢迎来体验一下，这里有个[邀请链接](https://kee.so/gift/dh36bx)，有 10 次邀请机会。

<hr />

## 技术

#### [[RFC] Zero-runtime CSS-in-JS implementation](https://github.com/mui/material-ui/issues/38137)

React 18 中引入了 Server Components 这个全新的架构，但现有的 CSS in JS 方案大多都无法很好地支持 Server Components，Material UI 近期发布了一个 RFC 来尝试解决问题。

在这篇 RFC 中介绍了 Server Components 存在的问题、目前已有的零运行时的 CSS in JS 方案，并给出了自己的方案设计，该方案将会用于 Material UI 和 Joy UI。

#### [Data visualization tools](https://awesome.cube.dev/)

一个关于数据可视化工具的 awesome list，主要是一些前端的图表库，可以按框架和渲染方式进行筛选，页面设计的也挺好看。

#### [TOAST UI](https://ui.toast.com/)

韩国 NHN Cloud 公司开发一系列前端组件，包含图表、富文本编辑器、表格、日历等逻辑比较重的组件，也有日期选择器、下拉选择框等常规组件。

## 开源

#### [NuxtLabs UI](https://github.com/nuxtlabs/ui)

由 [NuxtLabs](https://nuxtlabs.com/) 开发的基于 [Headless UI](https://headlessui.com/) 和 [Tailwind CSS](https://tailwindcss.com/) 的 Vue.js 组件库，主要用 [Nuxt](https://nuxt.com/) 应用。组件比较全面，并且支持深色模式和键盘快捷键。

## 产品

#### [FoodCa](https://apps.apple.com/cn/app/foodca-ai%E5%8A%A0%E6%8C%81%E7%9A%84%E9%A3%9F%E7%89%A9%E7%83%AD%E9%87%8F%E9%80%9F%E6%9F%A5%E4%B8%8E%E8%AE%B0%E5%BD%95%E5%B7%A5%E5%85%B7/id6451112435)

一款 AI 加持的食物热量速查与记录 App，可以通过语义化描述自己吃了什么来自动记录，相较于以往的手动一个个输入要好很多，但如果能通过拍照自动识别那就更好了。

另外，目前大多数 AI 产品都是 ChatGPT 的复刻或套壳，没什么意思，希望能多一些 FoodCa 这类产品，通过 AI 来优化已有产品的用户体验。

## 其他

#### [北方超级高温的底层地理逻辑，究竟是什么？](https://www.bilibili.com/video/BV1Xc411c7rT/)

地球知识局出品的地球操作系统系列视频之一，通过专业的地理知识来分析今年为什么气温那么高，视频质量很高，地球操作系统系列的其他视频也都很不错，强烈推荐！
