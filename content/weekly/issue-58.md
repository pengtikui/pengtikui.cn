---
title: 第58期：细说 shadcn/ui
date: 2024-04-14
description: 一个有意思的项目
---

![](/static/weekly/issue-58-cover.jpg)

2023 JavaScript Rising Stars 中年度最火的项目是 [shadcn/ui](https://ui.shadcn.com)，你可能没有听过这个项目，但能成为年度最火的项目，并且在往期周刊中也多次提及，那它一定有特别之处，我们就好好看看它到底特别在哪。

目前比较受欢迎的组件库，如 antd、MUI 等，它们都包含组件逻辑和样式，通过 npm 安装。shadcn/ui 本质上不是组件库，是一个组件的合集，它的组件的逻辑部分来自于 [Radix UI](https://www.radix-ui.com/primitives)，样式部分使用 [Tailwind CSS](https://tailwindcss.com)，使用时直接按需把代码复制到自己的项目中即可，不需要通过 npm 安装。

Radix UI 是一个 Headless 组件库，也就是这个组件库没有样式，只有组件逻辑部分，样式可以用任意方式自行实现，当然除了 Raix UI，还用到了其他的一些 Headless 组件，比如 Data Table 组件基于 [TanStack Table](https://tanstack.com/table)、Command 组件基于 [cmdk](https://cmdk.paco.me) 等。shadcn/ui 基于这些社区已有的优秀项目来做，可以保证功能的丰富和稳定，同时也能极大减少开发量和维护成本，有种站在巨人的肩膀上的感觉。

在样式方面，很多项目都会直接使用成熟的组件库，如 antd 等，直接使用默认的样式或简单调整一下配色和尺寸等，这样会有些问题，一是必须使用组件库的样式方案，对技术选型会有一定的束缚，二是用这些组件库的项目越来越多，也就逐渐变得千篇一律，大家都审美疲劳了，也没了自己的品牌特色。Headless 组件库很大程度上解决了这些问题，但随之而来又有了新的问题，那就是我们都很懒，不想自己去做设计和写那些琐碎的代码，并且很多团队也没有专门的设计师，以大多数程序员的审美水平，让他们自己去设计还不如不设计。

shadcn/ui 的出现就很好的解决了上述的问题，逻辑部分它采用了社区已有的方案，减少工作量的同时也能保证组件质量，样式方面采用比较流行的 Tailwind CSS，原子化 CSS 方案有着较高的灵活性和自定义扩展能力，也不会像 CSS in JS 等方案对项目有过多的入侵，并且默认提供一套好看的样式。

shadcn/ui 的开发思路上体现了“不要重复造轮子”的思想，所有东西都采用社区的方案，不自己发明新的东西或概念，有点像组合怪，但组合的确实很好。另外在第 20 期中提到的 AHA 编程，在 shadcn/ui 上也有所体现，也就是复制粘贴的使用方式，这样给了开发者很大的自定义空间，对于不符合需求的组件可以自行任意修改，而常规的组件库则有点过度封装的感觉，哪怕只是想修改一下样式，就要用各种不优雅的方式来实现。

<hr />

## 技术

#### [ESLint v9.0.0 released](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/)

ESLint 最近发布了 v9.0 大版本更新，最大的变化是该版本默认使用新的扁平化配置文件格式，插件、规则等内容需要显示导入，并且不会自动合并配置文件，旧的配置文件格式会在 10.0 中完全废弃掉，关于新的配置文件格式可以参考其 [RFC](https://github.com/eslint/rfcs/tree/main/designs/2019-config-simplification)。

#### [Bun 1.1](https://bun.sh/blog/bun-v1.1)

Bun 也是今年比较火的项目之一，最近发布的 1.1 版本带来了一些新的特性和性能提升，但最大的更新是终于支持 Windows 系统了，能够进一步扩大用户范围了。

#### [计算机领域的三个重要思想：抽象，分层和高阶](https://ray-eldath.me/programming/three-important-ideas/)

一篇长文，主要是作者对抽象、分层和高阶重要思想的体会和认识。

## 开源

#### [老乡鸡菜品溯源报告](https://gitee.com/lxjchina/traceability-report-of-dishes)

老乡鸡将他们的所有菜品进行开源，内容包含菜品的原料来源、加工方式等信息，正如他们在 README 中写的“做菜和写程序一样，做菜时，我们需要挑选合适的食材，就像写程序时选择合适的算法和数据结构”，所以在 Gitee 开源也没毛病。

#### [HeyForm](https://github.com/heyform/heyform)

HeyForm 是一个开源的表单生成器，可以创建对话式表单，用于调查、问卷等场景，无论是交互还是 UI 都借鉴了 Typeform，可以自部署。
