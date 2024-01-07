---
title: 第49期：2023 前端总结
date: 2024-01-06
description: 简单做个总结吧
---

![](/static/weekly/issue-49-cover.jpg)

2023 年过完了，又到了做年度总结的时候，这期周刊就不按照往期的格式来了，简单做个 2023 年前端行业的总结吧，总结一些值得关注的项目、人和事件，以下内容都是纯个人主观看法，并且涉及范围不够全面，欢迎讨论。

2023 年的前端圈依旧是“前端娱乐圈”，各种哗众取宠的人层出不穷，但好在整个行业还是积极向上的，有不少新的项目、新的理念让人眼前一亮。

### 全栈化

全栈化是 2023 年前端的一个重要趋势，也可以说是技术的轮回。以 [Next.js](https://nextjs.org/) 为代表的框架都在强调自己的全栈能力，不再甘心于只是做页面渲染，Next.js, [Remix](https://remix.run/), [Nuxt.js](https://nuxt.com/), [SvelteKit](https://kit.svelte.dev/) 等框架的 API 设计也在趋同，相较于以往的常规 SSR、静态页面生成等能力，现在他们也都增强自己的数据请求和数据修改的能力，像是回到了 PHP 时代。

上面提到的框架都在增强自己的全栈能力，并且模糊前后端的边界。以 Next.js 的服务端组件为例，组件不仅包含 UI 部分的内容，还可以直接请求接口，甚至是直接读取数据库；在数据修改方面，Remix 中页面上的表单提交可以直接调用服务端运行的 action 方法，开发者无需关心中间的请求过程。

因为服务端的逻辑都是运行在 Node.js 或其他 JavaScript 运行时里面，自然而然地就拥有了完整的服务端能力。在这个架构下，诞生了一些比较优秀的全栈项目，比如 [Dub](https://dub.co/) 这个基于 Next.js 的短链接服务。

这些前端框架向全栈发展主要是为了实现更好的前端用户体验，而不是为了取代后端，毕竟专业的事还是交给专业的人来做更好一点。

### Rust 化

这一点在 [第 46 期：Rust 重塑前端？](https://pengtikui.cn/weekly/issue-46) 中有提到过。2023 年有越来越多的前端工具在用 Rust 重写，得益于语言本身的优势，这些工具都带来了数倍、数十倍，甚至上百倍的性能提升，大幅提升了开发开发者的开发体验和效率。

Rust 涉及到了前端的各个方面，涵盖了 WASM、运行时、打包工具、跨端应用框架、Lint 工具等，具体可以看看 [第 46 期：Rust 重塑前端？](https://pengtikui.cn/weekly/issue-46)，这里不再重复了。

当然除了 Rust，其他语言也在试图改进前端，比如使用 Golang 编写的 [esbuild](https://esbuild.github.io/)、Zig 编写的 [Bun](https://bun.sh/) 等。

### 框架

说来你可能不信，[React](https://react.dev/) 在 2023 年没有发布过新的正式版本，目前最新的 18.2 版本发布于 2022 年 6 月，但这不妨碍它依旧是前端框架的老大，不论是 star 数、npm 下载量，还是社区生态方面，都是当之无愧的第一。

三大框架中 [Vue](https://vuejs.org/) 和 [Angular](https://angular.dev/) 在 2023 年也都发展的比较稳健，没有太大的变化，比较值得关注是在 2023 年尾，Vue 2 结束了其生命周期，以后不再提供任何维护和更新。Angular 依然是企业级项目不会出错的一个选择。

其他的新兴框架，如 [Svelte](https://svelte.dev/)、[Solid.js](https://www.solidjs.com/) 等依旧是雷声大雨点小，社区好评一片，但在实际业务中使用的还是很少，属于“你用我推荐、我用我不用”的尴尬局面。[Astro](https://astro.build/) 和 [Nue](https://nuejs.org/) 也比较值得关注，前者是专为内容型网站设计的，岛屿架构比较有意思，后者号称是最接近 Web 标准的框架，向标准靠拢就值得支持。

### 后端

得益于 Node.js，JavaScript 也可以做后端了，但最近几年后端框架方面没有大的变化，依旧是 Express、Koa 那一套。2023 年比较热门的后端框架应该是 [tRPC](https://trpc.io) 了，它最大的亮点是端到端的类型安全，相较于 REST 和 GraphQL，tRPC 可以直接在前端和后端项目中共享类型文件，但这要求你的项目是前端后代码在一块的全栈项目，对于前后端分离的复杂项目可能并不适合。

老牌的 [Nest.js](https://nestjs.com/) 可能依旧是 Node.js 后端框架的最优选择，依旧稳定、功能完善，可以达到企业级的标准，其他同类框架更像是个玩具。新型的框架中，[Hono](https://hono.dev/) 和 [ElysiaJS](https://elysiajs.com/) 值得重点关注一下，两者都支持多种 JavaScript 运行时，如 Node.js, Deno, Bun 或 Vercel, Cloudflare 的 Serverless 环境，前者是比较轻量的框架，后者着重支持 Bun，在 Bun 环境中有着超越 Rust 和 Golang 框架的性能。

### 值得关注的项目

2023 年最火热、最值得关注的项目，我认为是 [shadcn/ui](https://ui.shadcn.com/)，它是一个基于 [Radix](https://www.radix-ui.com/primitives) 和 [Tailwind CSS](https://tailwindcss.com/) 的 React 组件库，但与其他组件库不同的是，它不是通过 npm 安装，而是通过 CLI 工具将组件代码复制到你的项目中，并自动安装底层依赖。

值得关注的原因，一是项目质量很高，并且已经有大量的项目和框架使用了它，二是该项目体现了两个我比较认同的理念：不重复造轮子和避免过度抽象。shadcn/ui 中的组件都是基于 Radix 实现，Radix 中没有的组件就选择社区中已有的最优方案，比如 DataTable 组件使用了 [TanStack Table](https://tanstack.com/table)、Toast 组件使用了 [Sonner](https://sonner.emilkowal.ski/)、Drawer 组件使用了 [Vaul](https://vaul.emilkowal.ski/) 等。

它倾向于将社区中已有的优秀方案组合使用，而不是一言不合就重复造轮子，并且这些组件都保留了其底层组件的 API 设计，没有自己再封装一层，降低了开发者的学习成本，同时它选择将代码复制到项目中，而非使用 npm 安装，极大的提高了灵活性，在以往的组件库中，如 Ant Design、MUI 等，如果某个组件不符合自己的需求，想要修改很困难，而 shadcn/ui 就不存在这个问题，源码完全由你控制。

### 值得关注的人

#### Dan Abramov

好像俄罗斯的程序员都很厉害，Dan 也是来自俄罗斯的，作为 Redux 的作者、React 团队核心成员，因为通俗易读的技术文章被大家熟知，也被称为 Dan 神。在 2023 年他主导了 React 新官网的上线，上线不久后就宣布从 Meta 辞职，不过仍然作为 React 团队的独立开发者，后续的去向目前还不清楚。

#### 尤雨溪

尤雨溪是 Vue、Vite 的作者，Vue 生态的精神领袖，前端没有了他就会少很多乐趣。他总能时不时的挑起一些话题，然后 Vue 的拥护者就会跟随他去声讨“竞争对手”，而他又总能站在道德制高点全身而退，营销能力非一般人所能及的。

### 值得关注的事

#### React 不再推荐使用 CRA

CRA（Create React App）一直是 React 官方推荐的脚手架，但是在 React 发布了新的官网和文档后，则推荐开发者直接使用 Next.js 或 Remix 等框架。React 将自己定位为元框架，让开发者不再直接使用它，而是使用基于它构建的上层框架，Next.js 甚至直接使用 Canary 版的 React，而非正式版，或许这也是 React 一年多不更新正式版的原因。

#### 多个框架放弃 TypeScript

先是 Svelte 宣布将源码用 TypeScript 切换到 JSDoc，后是 DHH 宣布 Turbo 放弃 TypeScript，好像大家都开始嫌弃 TypeScript 了。

不过大家不要被“忽悠”了，对于一些框架和库，从 TypeScript 转到 JSDoc 确实是个不错的选择，但在实际的业务项目中还是老老实实地用 TypeScript 吧，毕竟场景不同，没有参考意义，另外 TypeScript 都写不好的人你还能指望他把 JSDoc 写好吗。

#### Rome 宣布停止维护

Rome 是 Meta 开发的一个前端工具链，从发布到宣布停止维护仅有三年时间，并且成立了独立的公司，拿到了融资，但从未发布过正式版本。Rome 的目标是做一个全能的工具链，包含编译器、打包工具、Lint 工具、测试工具等，可能是因为其目标过于宏大吧，所以一直没能实现。

不过它的核心团队前段时间发布了 [Biome](https://biomejs.dev/) - 基于 Rust 开发的 Lint 工具，也算是有点成果了吧。看来画饼不能画太大啊，容易噎到。

#### React 发布十周年

2023 年是 React 发布的第十年，十年间影响了整个前端生态的发展，也一定程度上推动了前端的现代化和工程化发展。在第十年，React 也选择“退居幕后”，将自己作为其他框架的元框架。十年前的我还不明白前端到底是什么。

#### Chrome 正式发布 WebGPU

在 2023 年，Chrome 团队宣布在 Chrome 113 中正式默认支持 WebGPU。作为一个新的图形 API，其性能远高于 WebGL，并且提供了一些 WebGL 不具备的高级功能，Babylon.js 和 Three.js 等框架也已支持 WebGPU。希望随着 WebGPU 的普及，能够推进 Web 3D 和 WebXR 的发展，进一步扩展前端的能力边界。
