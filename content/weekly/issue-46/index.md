---
title: 第46期：Rust 重塑前端？
date: 2023-12-16
description: Rust 重塑前端生态
---

![](/static/weekly/issue-46-cover.jpg)

Rust 和前端的关联，最早好像只有 WebAssembly，作为浏览器支持的第四种语言，Rust 对 WebAssembly 有着较高的支持优先级。

最近几年 Rust 自身变得更火了，它在前端中的应用也越来越广泛，运行时、打包工具、Lint 工具、跨端应用等都有所覆盖，几乎把前端生态重塑了一遍，把前端的开发体验提升了一个层次。

这里就梳理一下前端生态中使用 Rust 开发的一些已经被广泛应用的工具、框架等。

- [Tauri](https://tauri.app)：对标 Electron 的跨平台桌面应用开发框架，它的优势是极小的包体积和较好的性能，但由于 Tauri 没有内置 Webview，而是调用系统的，所以兼容性不如 Electron。

- [Deno](https://deno.com)：Node.js 作者开发的另一个 JavaScript 运行时，原生支持 TypeScript 和 JSX，并且兼容 Node.js 和 npm，相较于 Node.js，Deno 的性能更好，并且内置了测试、Lint 等工具。

- [SWC](https://swc.rs)：前端构建工具，其核心功能与 Babel 类似，支持编译、打包、代码压缩等功能，也具备插件能力，目前在 Next.js、Deno 中都有应用。

- [NAPI-RS](https://napi.rs)：用于构建 Node.js 扩展的框架，可以把它理解为 Node.js 和 Rust 之间的桥梁，可以在 Node.js 中直接调用 Rust 编译后的二进制文件。

- [fnm](https://github.com/Schniz/fnm)：Node.js 版本管理工具，类似于 nvm，但安装和使用更简单，性能也要更好。

- [Rspack](https://www.rspack.dev)：前端打包工具，可以理解为 Rust 版的 webpack，其 API 设计也高度兼容 webpack，从 webpack 迁移过来比较容易。

- [oxlint](https://oxc-project.github.io/docs/guide/usage/linter.html)：Lint 工具，与 ESLint 类似，支持来自 ESLint 的 200 多条规则，但性能要高出 50-100 倍，不过它的目标不是完全取代 ESLint，而是作为增强和补充。

- [Biome](https://biomejs.dev)：格式化和 Lint 工具，与 Prettier 类似，前段时间 Prettier 作者悬赏一万美元用 Rust 重写 Prettier，Biome 就是获胜者。

- [Rome](https://github.com/rome/tools)：一体化的前端工具，包含 Lint、打包、编译、测试等功能，目标是同时取代 Babel, ESLint, webpack, Prettier, Jest 等，不过由于其目标过于不切实际，现在已经死了。
<hr />

## 技术

#### [WinterCG](https://wintercg.org)

WinterCG (Web-interoperable Runtimes Community Group) 是指 **Web 可互操作运行时社区组**，它是由社区成员组成的一个工作组，成员包括 Cloudflare、Deno、Node.js、Vercel 等。该工作组的目标是推广统一 API 的 JavaScript 运行时，无论是服务端还是边缘计算环境都有统一的 API，比如同一套代码可以在 Node.js 中运行，也可以在 Deno、Cloudflare 环境中运行，无需额外的适配。

#### [Fly Postgres, managed by Supabase](https://supabase.com/blog/postgres-on-fly-by-supabase)

Supabase 发布了与 Fly.io 合作的 Postgres 数据库托管服务 Fly Postgres，该服务由 Supabase 运维，基于 Fly.io 的边缘计算平台部署，该服务集成了 Supabase 的所有能力，包含集成 40 多个插件的全功能 Postgres 数据库、基于 pgvector 的向量搜索、基于 Supavisor 的连接池、自动备份等。

## 开源

#### [ElysiaJS](https://github.com/elysiajs/elysia)

一个为人设计的、符合人体工学的 TypeScript Web 框架，专注于生产力的提升，让开发者更多的关注业务逻辑，而非框架本身，比如内置的类型系统可以帮助开发者减少大量类型代码的编写。

得益于 Bun 运行时、静态代码分析和动态代码注入，Elysia 有着极高的性能，甚至超过一些 Go 和 Rust 的框架，另外它不仅限用于 Bun，任何兼容 WinterCG 的运行时都可以使用。

#### [templ](https://github.com/a-h/templ)

Go 的 HTML 模版语言，相较于 text/template 等同类方案，templ 开发体验更具优势，官方提供了 VSCode 插件，包含代码高亮、提示、自动补全等功能，另外其语法与 JavaScript 比较接近，上手成本较低。

#### [Trippy](https://github.com/fujiapple852/trippy)

基于 Rust 开发的网络诊断工具，结合了 traceroute 和 ping 的功能，但支持更多的协议，具备更强的可定制能力，并且支持生成多种格式的报告文件。
