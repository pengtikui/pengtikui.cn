---
title: 第65期：讨厌卖课
date: 2024-06-23
description: 真的烦
---

![](/static/weekly/issue-65-cover.jpg)

现在越来越多的程序员都开始转行卖课了，其实就是写各种教程，然后卖给其他程序员，这种平台也挺多的，比如极客时间、掘金小册等，做得好的赚得盆满钵满，做得一般的也能混口饭吃。我对这种行为特别讨厌，虽然也有一些质量很高的课程，但绝大部分还是太烂了，导致对这个行业的整体印象不好。

一是绝大部分课程并不能授人以渔，更多的是鼓励别人比着葫芦画瓢。比如有课程的主题是教你使用某个框架，它只会流水账似的告诉你第一步该怎么做，第二步该怎么做，但不会告诉你为什么要这么做、还有没有其他方式用来应对不同的场景，至于为什么会这样，那是因为作者也不会，他以前工作中就这么干的而已，更多的场景他也没遇到过。

二是过度营销，贩卖焦虑，造成行业浮躁氛围。各种“XX 从入门到实践”、“XX 天掌握 XX”、“XX 通关秘籍”等标题，让你误以为自己看完这些课程就能真的掌握这些技术，实际情况是课程作者都不一定真的很熟悉这技术。再者说了，你觉得你几天学习的东西凭什么就能比得上别人多年的积累，有看这些课程的时间不如自己多看看文档，多动手实践一下。

三是含水量过高，且有其他更好的选择。有些可能讲的框架作者自己可能都没有在实际的项目中应用过，只是简单看过文档，卖给你的课程只是对文档的通俗化解读和一些脑补的实践，那还不如直接看官方文档嘛。如果你说官方文档看不懂，这些教程比较简单易懂，那我觉得大概率是你缺乏学习能力，现在你需要的是提高学习能力，而不是吃别人嚼过的饭，学会读文档真的很重要。

四是行业门槛越来越低，滥竽充数的作者太多。前几年刚兴起知识付费的时候，卖课的那些人确实还是有些真本事的，要么是行业大牛，要么是大厂技术骨干，可现在呢，是个人都能出来卖课，基本的逻辑思维和表达能力都不太行，你能指望他写出来的可能会好？

总之就是现在这个行业大多数课程烂、大多数作者烂，高质量的课程实在是不好找，还不如多看看书、多看看官方文档、多动手实践。

<hr />

## 技术

#### [华为自研编程语言仓颉](https://developer.huawei.com/consumer/cn/cangjie/)

在华为开发者大会 2024 上，华为正式发布了自研编程语言仓颉，号称是面向全场景智能的新一代编程语言，主打原生智能化、天生全场景、高性能、强安全，从语法上来看有着 Go、TypeScript 等多种语言的影子，看来是集众家之所长。

#### [State of JavaScript 2023](https://2023.stateofjs.com/)

没看错，就是 2023，State of JavaScript 最近刚发布了 2023 年的开发者调查报告，通过这份报告可以了解到 JavaScript 开发者都在使用或者不使用哪些特性，哪些库和工具比较受欢迎等，其中 Vite 拿到了“采用最多的技术”、“最高满意度”、“最受喜爱的库”奖项。

#### [How React 19 (Almost) Made the Internet Slower](https://blog.codeminer42.com/how-react-19-almost-made-the-internet-slower/)

好像是有点标题党的一篇文章，但内容还不错，主要内容是 React 19 禁用了同一 Suspense 内的并行加载逻辑，导致 TanStack Query 等三方库加载资源速度变慢，但好在 React 团队决定暂停该变更。

## 开源

#### [LlamaIndex](https://github.com/run-llama/LlamaIndexTS)

LlamaIndex 是一个用于开发基于大语言模型的应用的开发框架，提供了结构化数据提取、RAG 等功能，与 LangChain 类似，同时也提供了 Python 和 TypeScript 两个语言的版本。

#### [tableflip](https://github.com/cloudflare/tableflip)

tableflip 是 Cloudflare 开源的一个库，可用于不停机重启 Go 程序，相较于 Docker、K8S 等方案，该库可以比较轻量级的实现不停机更新应用，它也可以与 systemd 结合使用。

#### [Tailus UI React](https://github.com/Tailus-UI/tailus-ui-react)

Tailus UI 是一组 React 组件集合，具有高度的可定制性和良好的可访问性支持，其基于 Tailwind CSS 和 Radix UI 实现，默认的 UI 主题也比较现代化。

## 工具

#### [SQL Studio](https://github.com/frectonz/sql-studio)

SQL Studio 是一个跨平台的数据库 GUI 客户端，与常规的客户端不同的是，它通过命令行启动服务和连接数据库，GUI 以网页的形式来展现。
