---
title: 第57期：往期回顾
date: 2024-03-31
description: 回顾一下往期推荐的内容
---

![](/static/weekly/issue-57-cover.jpg)

周刊发布了这么多期，已经推荐和介绍了不少技术、项目或产品，那它们现在都发展的怎么样了？放到现在还是不是个好的选择？这期就随机选几个往期推荐的内容进行回顾一下，以后也会不定期的做一些回顾，好的东西就看一下它为什么越来越好了，不好的东西就看看它为什么失败了。

第一个是 [第 6 期：Supabase - Firebase 开源替代方案](https://pengtikui.cn/weekly/issue-6) 中推荐的 Supabase。目前 Supabase 在 GitHub 上的 star 数已经增长了一倍多，作为 Firebase 的开源替代品，现在它也走出了自己的路，趁着 AI 的风口，引入了向量数据库等 AI 相关的能力，其他的基础功能也保持着稳定的更新节奏，整个项目也越来越成熟稳定。

第二个是 [第 10 期](https://pengtikui.cn/weekly/issue-10) 中推荐的开源图片压缩工具像素丢失，现在它已更名为 [Pixzip](https://xiangsu.fun/)，并且基于 shacn/ui 重新设计了 UI，更加美观和完善了，另外 shacn/ui 也是推荐过多次的项目。

第三个是 [第 11 期](https://pengtikui.cn/weekly/issue-11) 中推荐的 Spin，一个用 WebAssembly 构建、部署和运行微服务的框架，并且推荐了 [我判断，今年 WebAssembly 会流行起来](https://mp.weixin.qq.com/s/GtJGjW5-P--YACgaMcSJFg) 这篇文章，目前来看这篇文章中的判断好像并没有成为现实，看来大家对一个较陌生的东西还是比较排拆的，并且各个 Serverless 服务厂商都在做兼容 WinterCG 的运行时，让 JS 走向标准和通用，而非再创造一个东西出来。

<hr />

## 技术

#### [JSR](https://jsr.io/)

JSR 是 Deno 新推出的 JavaScript / TypeScript 包注册表，类似于 Node.js 的 npm registry，不同的是 JSR 只接受 ESM 格式的包，支持多种运行时，并且原生支持 TypeScript，更多内容可以参考官方的 [Why JSR?](https://jsr.io/docs/why) 文档。

## 开源

#### [Nunu](https://github.com/go-nunu/nunu)

Nunu 是用于构建 Go 应用的脚手架，它整合了 Golang 生态中比较流行的库，主要包含了 Gin、GORM、Wire、Swaggo 等常用的库，并采用了经典的分层架构。

#### [Midday](https://midday.ai/)

Midday 是一个智能的商业管理工具，功能比较繁杂，包含交易管理、项目追踪、文件管理等各种功能，虽然是个商业项目，但代码全部开源，全 TypeScript 技术栈，可以自部署。

#### [Superjson](https://github.com/blitz-js/superjson)

JSON 序列化和解析只支持基本数据类型，比如数字、字符串等，Date、BigInt 等引用类型则不支持，Superjson 就是为了解决这个问题的，可用于 SSR 等场景。

## 产品

#### [TimeGo（时光）](https://apps.apple.com/cn/app/%E6%97%B6%E5%85%89%E6%97%B6%E9%92%9F/id6448658165)

TimeGo 是一款轻量简洁的计时提醒应用，仅支持 macOS 系统，近期发布的 2.0 版本带来了全新的 UI 设计，整个应用的体积还不到 1M，目前正在进行限时免费活动。
