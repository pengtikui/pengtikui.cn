---
title: 第44期：抽象与复制
date: 2023-11-18
description: 编程中的平衡与挑战
---

![](/static/weekly/issue-44-cover.jpg)

抽象是一种很重要的编程思想，它是指将一些通用的模式、功能提取出来，以便于在代码中重复使用。在前端中最常见的一种抽象就是组件库，抽象可以减少重复的代码，提高代码的可读性和可维护性。

在写代码时考虑进行抽象是个很好的习惯，但在实际的业务开发中，受限于开发人员的水平和需求变更的不确定性，甚至是为了秀技术，可能会出现过度抽象或不合理抽象的情况，这会导致代码的复杂性增加，修复 Bug 和需求代码也变得更困难。因此在实际的业务开发中，适当地使用复制粘贴、多一些冗余代码也是个相对合理的选择。

最近有两个产品的理念与上面的观点类似：

一是 [shadcn/ui](https://ui.shadcn.com)，在往期周刊中也推荐过它。它是一个前端组件库，但又不是传统意义上的组件库，比如 Ant Design 等，它不能通过 npm 安装，而是在使用时通过 CLI 工具将组件的代码直接复制到项目中，你可以根据自己的需求对组件任意修改，如果使用 Ant Design 之类的组件库，在遇到组件与自己的需求不符的情况下，就比较难修改了。

二是 [ShipFast](https://shipfa.st)，是独立开发者 Marc Lou 的新产品，该产品目前每个月有数万美元的收入。ShipFast 本质上是一套 Next.js 的模版代码，集成了授权、邮件、支付等能力，使用方式也比较简单粗暴，你需要哪些功能，就把对应的代码复制来就好了，能够帮助开发者快速开发出一个完整的产品，而不需要在基础功能的开发上耗费太多精力，并且某些功能不符合自己的需求时也可以快速方便的修改代码。

另外，现在 AI 辅助编程越来越普遍，大多数的重复代码都可以由 AI 生成，并不会耗费我们太多时间。适当的代码冗余，可以帮助我们更好地应对未知的需求变更。

<hr />

## 技术

#### [The Startup CTO’s Handbook](https://zachgoldberg.com/ctohandbook/)

初创公司 CTO 手册，除了技术架构方面的内容，更多的是关于领导力、团队建设方面的内容。

#### [Go, Containers, and the Linux Scheduler](https://www.riverphillips.dev/blog/go-cfs/)

Docker 可以给每个容器设置 CPU 限制，以保证单个容器不会耗费掉所有 CPU 资源，但运行在容器中的 Go 应用不会感知到这一限制，并且会使用宿主机的所有 CPU 资源，本文解释了为什么会出现这种情况以及怎么解决。

## 开源

#### [PGMQ](https://github.com/tembo-io/pgmq)

一个轻量的消息队列，比较特别的是，它是基于 Postgres 实现的，使用 Rust 编写，并提供了 Rust 和 Python 版本的客户端。

#### [react-datasheet-grid](https://github.com/nick-keller/react-datasheet-grid)

与 Airtable 或 Notion 类似的 React 表格组件，用法简单但功能强大，支持直接从 Excel 复制粘贴、完整的键盘和快捷键支持、支持自定义右键菜单，性能也比较好。

## 设计

#### [Porsche Design System](https://designsystem.porsche.com/)

保时捷的设计系统，提供的组件库支持原生 JS、React 和 Angular。

#### [Risk tolerance: why some countries prefer more complex UIs](https://uxdesign.cc/risk-tolerance-why-some-countries-prefer-more-complex-uis-25dae4402df4)

本文从文化的角度，主要以亚马逊的网站为例，分析了为什么有些国家更喜欢复杂的界面。
