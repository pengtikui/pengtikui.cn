---
title: 第29期：设计师需要懂开发吗
date: 2023-07-01
description: 设计师还是懂点开发比较好
---

![](/static/weekly/issue-29-cover.jpg)

Figma 最近发布了名为 Dev Mode 的新功能，具体内容可以查看官方博客 [Making Figma better for developers with Dev Mode](https://www.figma.com/blog/introducing-dev-mode/)。这个功能的名字也清晰地表明了 Figma 的目标：为开发者提供更友好的体验。

简单来说，Dev Mode 是一个让开发者以自身视角浏览设计文件的工具，类似于 Chrome 开发者工具。Figma 还将一些设计概念（如形状、图层等）变得更接近于开发的概念，以便开发者能更方便地查看和导出编程所需的信息，如元素的宽高、颜色等，同时支持多种语言。此外，Figma 也提供了一些工具，比如 VS Code 插件可以在写代码时给出更准确的提示。

这个功能对开发者非常友好，但它也对设计师提出了更高的要求。如果想要使 Dev Mode 生成的信息更准确，设计师需要对开发有一定的理解，例如需要按照 Web 中元素的嵌套关系和布局方式进行设计，而不是在 Figma 中随意地画。

从 Dev Mode 的功能来看，以设计一个 Web 网页为例，如果设计师的设计稿足够规范，那么 UI 部分的代码基本上可以完全由 Figma 来生成，开发者只需关注逻辑部分，从而大大提高开发效率。然而，根据以往的经验，大多数国内的设计师对开发并没有太多的了解，这不合理，这就好比建筑设计师对建筑材料和力学不了解。

<hr />

## 技术

#### [Chat about the future for stitches](https://github.com/stitchesjs/stitches/discussions/1149)

Stitches 是一个 CSS-in-JS 库，近期官方宣布该库不再进行维护，原因是 React 18 中进行运行时注入变得很困难，并且 React 官方好像并没有对此作出规划。

其实不止 Stitches，所有的 CSS-in-JS 库都面临这个问题，使用 CSS-in-JS 就不能用 React 18 中的一些新特性，如流式渲染等，React 官方好像也不打算解决这个问题，CSS-in-JS 就要退出历史舞台了，或者仅用于某些场景了吗？

## 开源

#### [DevPod](https://github.com/loft-sh/devpod)

用于创建可复制的开发环境的工具，可以理解为 GitHub Codespaces 的开源替代品，但他仅包含客户端部分，后端可以 Docker、K8S、AWS 等任意服务，不限制服务供应商。

#### [Dragonfly](https://github.com/dragonflydb/dragonfly)

世界上最快的内存数据库，更现代的 Redis 替代品，官方测试数据显示其 QPS 能达到 Redis 的 25 倍，且内存占用更低。不过实际体验来看，对中小项目来说内存占用却更高，可能比较适合大型项目吧。

#### [Pines](https://github.com/thedevdojo/pines)

基于 TailwindCSS 和 Alpine 的 UI 组件库，组件的丰富度还不错。除了基础组件外，还包含一些业务性的组件，如 Header、Heros 等，但要登录才能免费查看部分代码。

## 其他

#### [【爱否】手机马上被淘汰？彻底了解 Vision Pro](https://www.bilibili.com/video/BV1Na4y1c7Cu)

彭林对 Vision Pro 的深度解读视频，对 VR 感兴趣的话可以看看，除了 Vision Pro 的体验外，还有对 VR 行业未来前景的解读。不得不说评测行业像爱否这种还在输出高质量内容的团队不多了。

#### [M2 Ultra：干翻英伟达！决战 AI 之巅](https://www.bilibili.com/video/BV1fh4y1M7DX)

苹果 M 系列芯片的统一内存架构完美踩中了当下 AI 的风口，不知道算是苹果的有意为之还是意外收获。这个视频聊了统一内存架构在 AI 大模型时代的潜力。

#### [B 站可以年轻，但终究要进入大人的世界](https://mp.weixin.qq.com/s/QRzjgKe7nBF_La67lJBfmg)

B 站 14 周年庆时宣布从此不再显示视频的播放量，取而代之的是播放时长。这个决定看似有点怪异，但其实也很好理解。

简单来说就是要打破以播放量来衡量商业价值的逻辑，广告主喜欢以播放量来对广告进行定价，但 B 站的主要内容是中长视频，相较于抖音快手的短视频，其播放量不占优势，也间接导致 UP 主为追求播放量而降低视频质量，希望这次的改动能够提升 B 站的视频质量，同时也提高 UP 主的变现能力。
