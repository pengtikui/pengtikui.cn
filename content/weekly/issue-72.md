---
title: 第72期：写个富文本编辑器（一）
date: 2024-09-01
description: 基于 Lexical 的富文本编辑器
---

![](/static/weekly/issue-72-cover.jpg)

如上期所说，这期要基于 Lexical 写个富文本编辑器，本期为系列教程的第一期，由于内容较长，单独作为一篇文章发布，点击 [基于 Lexical 写个编辑器（一）](/weekly/issue-71) 查看吧，下面是本期的分享内容。

<hr />

## 技术

#### [Rspack 1.0 发布公告](https://rspack.dev/zh/blog/announcing-1-0)

Rspack 是基于 Rust 编写的下一代 JavaScript 打包工具，兼容 webpack 的 API 和生态，并提供 10 倍于 webpack 的构建性能。近期 Rspack 发布了 1.0 版本，这意味着已经达到生产稳定，上面的编辑器用到的 Rsbuild 就是基于 Rspack 的，体验挺不错。

#### [开发体验的彻底提升，从 Vite 迁移到 Rspack](https://moonvy.com/blog/post/2024/migrate-vite-to-rsbuild/)

这篇文章分享了 Moonvy 从 Vite 迁移到 Rspack 的背后原因和经验，原因主要包括 Vite 开发与生产不一致、大型项目刷新慢等，并分享了 Rspack 的一些优势。

## 开源

#### [Terminus](https://github.com/beclab/Terminus)

Terminus 是一个开源的基于 Kubernetes 的自托管家庭云，可用于构建 AI 应用、同步和备份数据、创建影音库等，并且内置了应用市场，从目前的介绍来看挺不错，尝试安装了一下，但安装失败了，不知道实际体验怎么样。

#### [cursor.directory](https://github.com/pontusab/cursor.directory)

最近 Cursor 挺火的，cursor.directory 是一个收集 Cursor 规则的网站，网站的内容和代码都开源，你也可以提交新的规则，这些规则本质上是一些提示词。

## 产品

#### [fnOS](https://www.fnnas.com/)

飞牛私有云 fnOS 是国内公司的开发的 NAS 操作系统，基于 Debian 且开放 SSH，兼容主流的 x86 硬件，并且内置了相册、影视、Docker 等功能，简单体验了一下，作为一个新产品，目前的完成度还是很不错的，未来可期。
