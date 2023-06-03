---
title: 第26期：Headless 组件库
date: 2023-06-03
description: 总结一些目前常用的 Headless 组件库
---

![](/static/weekly/issue-26-cover.jpg)

在 [第 15 期：一切皆可 Headless](/weekly/issue-15) 中简单提到过 Headless 组件库。简单来说，Headless 组件库就是不包含样式的组件库，目前常用的组件库如 Ant Design、MUI 等都是包含样式的，可以做到开箱即用，而 Headless 组件库不包含样式，使用时需要自行实现样式。这样做的好处是将组件的逻辑和样式解耦合，让用户更方便地实现个性化的样式，而不需要使用各种 hack 的方式覆盖组件库的样式。

这里总结一下目前常用的 Headless 组件库，以方便在后续的项目中做选择参考：

- [Radix UI](https://www.radix-ui.com)：应该是目前认知度最高的、组件最丰富的 Headless 组件库，仅支持 React，组件有 30 个左右，在第 5 期中推荐的 [shadcn/ui](https://github.com/shadcn/ui) 就是基于 Radix UI 实现的；
- [Headless UI](https://headlessui.com)：由 Tailwind CSS 团队的开发，有 React 和 Vue 两个版本，组件数量不算多，目前仅有 10 个，但质量都比较高；
- [Downshift](https://www.downshift-js.com)：专注于创建自定义下拉框、多选框的库，目前仅有 Combobox、MultipleSelection 和 Select，与其他组件库不同的是，它不提供组件，仅提供 Hooks，DOM 节点也由用户完全自定义，仅支持 React；
- [Reach UI](https://reach.tech)：专注于可访问性的通用组件库，包含一些常用的组件，仅支持 React，但目前项目的活跃度很低；
- [React Aria](https://react-spectrum.adobe.com/react-aria)：由 Adobe 开源的一套组件库，专注于可访问性，和 Downshift 一样不提供组件，仅提供 Hooks，功能极其丰富且文档质量很高，另外 Adobe 的组件库 [React Spectrum](https://react-spectrum.adobe.com/) 就是基于 React Aria 实现的。
- [TanStack Table](https://tanstack.com/table)：它仅有一个 Table 相关的能力，提供一些基础组件和方法，可以用来实现很复杂的表格组件，支持 React、Vue、Svelte、Solid 和原生 JS；
- [React Hook Form](https://react-hook-form.com)：从名字也能看出来它是个表单库，基于它可以实现比较复杂的表单组件，同时性能也很不错，仅支持 React；

这些 Headless 组件库都或多或少的提到自己对可访问性的重视，希望更多开发者也能够更重视可访问性，实现 UI 的同时，顺便关注一下可访问性的问题。

<hr />

## 技术

#### [一个无后端也无前端彻底无服务的网页版记事本](https://mp.weixin.qq.com/s/BpezTF7O2SAndG8AaG96Mw)

一个挺有意思的想法，其实就是一个 `div` 标签加了 `contenteditable` 属性，让整个页面是可编辑的状态。虽然代码很简单，但这其中也包含了几个前端的知识点，比如 Data URL、Base64、contenteditable 等。

这个记事本虽然简单，但它功能很强大，比如从编辑器复制一段代码粘贴进去，是可以保留代码高亮的，也可以直接粘贴图片进去，也可以将你写好的内容保存为一个 HTML 文件。这也从侧面说明了浏览器的复杂性，浏览器实现了各种你能想到和想不到的能力，可以让前端开发者尽情发挥自己的想象。

另外可以参考 [awfice](https://github.com/zserge/awfice) 这个开源项目，它实现了多个类似的有趣功能。

## 开源

#### [Windmill](https://github.com/windmill-labs/windmill)

开源的无代码开发平台，主要用于内部工具的开发，可以将脚本转换为工作流和 UI 界面，支持 Python, Typescript, Go 等多种语言，是 Airplane 和 Retool 的开源替代品。

#### [Plane](https://github.com/makeplane/plane)

开源的项目管理工具，JIRA 的开源替代品，UI 比 JIRA 更简洁现代，更简单易用。目前仍处于开发阶段，可以使用 [Plane Cloud](https://app.plane.so/) 来体验一下。

#### [Next.js Enterprise Boilerplate](https://github.com/Blazity/next-enterprise)

基于 Next.js 的模板项目，用于高性能、可维护的企业级项目，包含样式解决方案、代码 Lint、静态资源分析、测试、自动化部署等能力，功能很丰富，即使用不到那么多功能，也可以拿来做参考。

## TMT

#### [Meta 发布 Quest 3 VR 头显](https://www.ithome.com/0/697/067.htm)

Meta 抢在苹果之前发布了 Quest 3 VR 头显，得益于 Pancake 光学方案，它比 Quest 2 薄了 40%，同时新的处理器也带来了 GPU 性能的翻倍，但没有公布处理器的具体型号，另外正面的三个摄像头会改善一些透视体验。Quest 3 将在今年秋天发售，499 美元起。
