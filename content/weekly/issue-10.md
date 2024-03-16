---
title: 第10期：持续重构
date: 2023-01-07
description: 其实人也一样，需要持续重构自己。
---

![](/static/weekly/issue-10-cover.jpg)

这周在 V2EX 看到个帖子“[如何避免屎山代码，理论上可行的思路](https://www.v2ex.com/t/906667)”，除了各种阴阳怪气和 ChatGPT 式的回复，没有多少有价值的回复，那我就来说说我的看法吧。

首先，一个项目无论是技术架构还是产品架构，最初的设计无论多完美，后期都难避免不符合需求的情况，我们能做的就是让最初的架构尽可能健壮和灵活，允许一定的代码冗余，避免过度抽象。

但更重要的是要学会拥抱变化，说人话就是**持续重构**你的代码，在每次迭代中小规模地重构掉一些不合理或不符合未来需求的内容，避免将不合理内容的不断累积。至于为什么要小规模持续重构呢，一是你的领导不会给你一段时间专门做大规模的重构，这不现实，在每次迭代中预留出一小点时间做一点小重构是个不错的选择；二是小规模重构能够控制代码变更范围，将风险降到最低，大规模重构可能会引入一些新的 Bug 或事故；三是人都会进步的，今天写了段觉得很不错的代码，过段时间再看可能就觉得当初的自己咋这么笨呢，所以持续重构也能够让代码和你一起进步。

其实人也一样，需要持续重构自己。

<hr />

## 技术

#### [git cherry-pick 教程](https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)

最近因为工作需要用到 cherry-pick 将一个开发分支上的需求合并到两个主分支上去，但之前又没有用过，就简单学习了一下，阮一峰这篇教程不错，简单易懂。

#### [React Streaming SSR 原理解析](https://mp.weixin.qq.com/s/GVts2QW3H_aTrB9anGwl5g)

Streaming SSR 是基于 Suspense 的一种渲染方式，它可以将服务端渲染的内容分块返回给浏览器，而不需要像常规 SSR 那样等整个页面完全渲染完成后再返回给浏览器，Next.js 13 中的 `app` 目录就是 Streaming SSR，本文除解释了 Streaming SSR 是什么，还对源码实现做了分析。

#### [Comparing the Gatsby, Next, Nuxt, and Nest Open-source JavaScript Frameworks](https://www.twilio.com/blog/comparing-nextjs-nestjs-nuxt-gatsby)

Next, Nest, Nuxt 傻傻分不清楚。

## 开源

#### [Pake](https://github.com/tw93/Pake)

Pake 是个将网页打包生成桌面 App 的工具，支持 macOS、Windows、Linux，基于 Tauri 框架实现，简单易用，且生成的 App 体积很小。

#### [像素丢失](https://github.com/9t5c/pixel-loss)

像素丢失是一款桌面端的开源图片压缩软件，支持 macOS 和 Windows，其底层基于 [Sharp](https://github.com/lovell/sharp) 实现。

## TMT

#### 小米同时研发两款新车

据晚点报道，小米的第一款车分两个版本，一个版本定位 26 万 - 30 万，一个版本定位 35 万以上，不知道为啥现在原文已经删掉了。从目前的曝光照片来看，外观还挺不错，而且这个定价像是吸取了当初小米手机的教训，既没有定一个让人惊艳的低价，又没有过分抬高自己，给以后的发展留出余地。

#### [郑刚炮轰罗永浩](https://weibo.com/7762107285/MnblWD09V)

锤子科技投资人之一郑刚炮轰罗永浩，具体内容可以看原文。怎么感觉像是自己投资亏钱了，现在开始耍无赖了呢，风险投资嘛肯定有风险的啊，赚了算你的，赔了就不认账了吗，吃瓜看后续吧。
