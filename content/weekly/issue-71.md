---
title: 第71期：来写个富文本编辑器吧
date: 2024-08-25
description: 先画个饼
---

![](/static/weekly/issue-71-cover.jpg)

在上期的话题中简单介绍了一下 Lexical 编辑器框架，再回头看看感觉写得不太好，也遗漏了一些比较关键的概念，比如 Node、Command 和 Selection 等，毕竟 Lexical 还是挺复杂的，一篇短文难以覆盖的比较全面。

只讲概念比较枯燥和难理解，所以从下期开始，将基于 Lexical 实现一个富文本编辑器，在实践中穿插一些概念性内容的讲解，由于内容较多，需要分多期进行，这期就先偷个懒吧。功能上会参考其他编辑器，对常见的功能进行一一实现，比如工具栏、快捷键、Markdown 语法、图片视频插入、悬浮工具栏、代码高亮等等，甚至是类似 Notion 的交互形式，如果你比较感兴趣，就先关注一下吧。

<hr />

## 技术

#### [前端构建系统概述](https://mp.weixin.qq.com/s/e5sHD_QrDBMhNkPzIcdBXA)

本文介绍了前端构建系统的概念、构建步骤（包括转译、打包和压缩）、开发者工具以及当前的前端构建趋势，对于前端初学者来说，可以更好地理解前端。

#### [前 Firefox 工程师迁移到 Rspack 的经验教训](https://mp.weixin.qq.com/s/MXpE5ULV3jXVNO3lXfFM6Q)

Rspack 是一个基于 Rust 的 webpack 替代品，本文作者介绍了自己将两个 webpack 项目迁移到 Rspack 的一些经验教训，包含 TS、CSS、Service Workers 等多个方面，也有一些对 Rspack 的未来展望，对于想要使用 Rspack 的开发者来说，是个不错的参考。

#### [One Thing Nobody Explained To You About TypeScript](https://kettanaito.com/blog/one-thing-nobody-explained-to-you-about-typescript)

本文探讨了使用 TypeScript 时容易忽视的一个重要细节 - 如何正确地配置 tsconfig.json 文件，作者从一个简单的程序开始逐步讲解了 tsconfig.json 的内容，以及如何配置这些内容。

## 开源

#### [postgres.new](https://github.com/supabase-community/postgres-new)

postgres.new 是一个运行在浏览器中的 Postgres 沙箱环境，每个数据库都一个 AI 助手，可以直接导入 csv 文件来生成数据库，也可以查询数据直接生成图表、生成数据库关系图、语义化读写数据库等，底层基于 [PGlite](https://pglite.dev) 实现。

#### [drawDB](https://github.com/drawdb-io/drawdb)

drawDB 是一个运行在浏览器中的数据库实体关系编辑器，通过点击就可以创建数据表、生成关系图、导出 SQL 脚本等。

#### [Swapy](https://github.com/TahaSh/swapy)

Swapy 是一个框架无关的工具，它可以快速实现拖拽交换的布局，比如在一个网格布局中可以通过拖拽来交换位置，并且内置了比较丝滑的过渡动画。

## 产品

#### [Zen](https://www.zen-browser.app)

Zen 是一个设计精美、隐私优先的浏览器，UI 和交互上与 Arc 浏览器有些类似，但功能要更丰富，并且它是基于 Firefox 开发的，代码开源。
