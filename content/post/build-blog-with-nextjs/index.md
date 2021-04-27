---
title: 使用 Next.js 搭建个人博客
date: 2021-01-30 15:31:22
description: 使用 Next.js 和 TailwindCSS 搭建个人博客，并部署到 Vercel
tags:
  - React
  - Next.js
  - TailwindCSS
  - Vercel
  - Blog
  - Gatsby
---

> 2021-02-15 更新：为了支持 MDX，调整了 Markdown 解析的部分逻辑，所以会有项目源码与文章部分内容不符，但不影响阅读。

最近把博客从 [Gatsby](https://www.gatsbyjs.com) 迁移到了 [Next.js](https://nextjs.org)，本文记录一下使用 Next.js 从 0 到 1 搭建一个博客网站的流程，以及所使用到的一些技术 ~~(npm 包)~~。

## Next.js vs Gatsby

Next.js 和 Gatsby 都是 React 生态内比较优秀的框架，都追求极致的用户体验和开发体验。两者虽然都可以用来搭建博客网站，但两者的定位还是有些许不同的。

Gatsby 算是大而全的框架，有自己的插件机制和生态，各种功能都可以通过 npm 安装对应的插件来快速实现，但使用起来较繁琐，概念较多，你需要去了解各种概念和插件的用法；Next.js 属于小而美（不意味着功能弱）的框架，有着 Vercel 产品一贯的美感，开箱即用，没有太多自创的概念和插件用法，直接接入 npm 生态。

## 初始化项目

关于 Next.js 的使用和如何新建项目，参考[官方文档](https://nextjs.org/docs)就好了，本文不再赘述了。建议实际上手项目前先大致浏览一遍文档，从而对 Next.js 有个大致的了解。

## 使用 TailwindCSS

[TailwindCSS](https://tailwindcss.com/) 是最近比较流行的一个 CSS 框架，它提供了大量 Utility-First 的原子类，帮你快速实现页面样式而无需手写任何 CSS 文件。个人认为 TailwindCSS 有以下几个有点：

- 快速开发，无需手写 CSS；
- 可以保证项目整体设计风格的一致性，包括颜色、边距等；
- 设计风格更灵活、易定制，而不是像 Bootstrap 那样一眼就能认出你的页面是不是用的 Bootstrap；
- 不需要再费尽脑汁给 class 起名了；

由于 TailwindCSS 是基于 PostCSS 实现的，并且 Next.js 默认内置了 PostCSS 及一些配置项，所以在 Next.js 项目中使用时需要自定义 PostCSS 的配置文件。好在修改这些配置并不繁琐，并且 TailwindCSS 官方文档提供了在 Next.js 项目中使用的教程，具体参考官方文档就好了：

- [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs) (TailwindCSS 的文档)
- [Customizing PostCSS Config](https://nextjs.org/docs/advanced-features/customizing-postcss-config) (Next.js 的文档)

当然你也可以完全不使用 TailwindCSS，Next.js 支持 CSS Modules、Sass/Less、CSS in JS 等多种方式，可根据自己的喜好进行选择。不过强烈建议你尝试一下 TailwindCSS，真的很好用。

## 获取数据

项目搭建好就需要获取数据了，也就是页面上展示的博客内容。我没有使用其他 CMS 来管理这些数据，而是直接写 Markdown 文件，保存在项目的 `content` 目录下，然后在项目编译阶段读取写这些文件来生成静态页面。

> Next.js 支持服务端渲染，同时也支持直接导出静态文件。

### getStaticProps

Next.js 中所有页面都是默认导出一个 React 组件，如果需要在编译期间获取组件所需的数据，那就再具名导出一个 `getStaticProps` 函数，Next.js 会在编译期间执行该函数，并将函数返回的数据以 props 的形式注入到页面组件中。

博客中主要是两个页面，一个是首页，展示文章列表；一个是文章页，展示文章具体内容。以首页为例，代码大致如下：

```jsx
export default function Home({ posts }) {
  // 省略页面组件内容
}

export async function getStaticProps() {
  const posts = getPostList();
  return {
    props: { posts },
  };
}
```

文章页同理，在 `getStaticProps` 中获取文章详情即可。

### getStaticPaths

文章的数目不是固定的，所以我们的文章页本质上是一个共用的模板，通过路由来区分具体展示哪篇文章，在代码中，文章页位于 `pages/post/[slug].jsx`，slug 作为路由参数。

但是在编译期间，Next.js 并不知道你有多少篇文章，需要生成多少个静态页。这时候我们就需要用 `getStaticPaths` 来告诉 Next.js 共有多少个页面需要生成，同 `getStaticProps` 一样，在页面文件中具名导出一个 `getStaticPaths` 函数就行了。

`getStaticPaths` 需要返回一个对象数组，每一条表示一个页面，包含该页面的一些参数，我们这里只需要一个名为 `slug` 的路由参数就行了。具体返回值的格式参考 Next.js 的官方文档。

文章页的大致代码如下：

```jsx
export default function PostItem({ post }) {
  // 省略页面组件内容
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const slugList = getPostSlugList();
  return {
    paths: slugList.map((slug) => ({
      params: { slug }, // 这个 params 可以在 getStaticProps 的参数中获取到
    })),
    fallback: false,
  };
}
```

## Markdown 解析

文章是以纯文本的形式保存的，上述伪代码中的 `getPostList`、`getPostBySlug` 等函数是读取文件并解析后返回一定格式的对象。读取文件是通过 Node.js 的 fs 模块实现的，没什么好说的。

文章的 Markdown 文件格式如下：

```markdown
---
title: 文章标题
date: 2021-01-31 12:01:54
---

这里是 Markdown 格式的文章内容
```

可以看到上面是 yaml 格式的 Front Matter，用来写一些文章信息，标题、日期等，都可以根据自己喜好来自定；下面是 Markdown 格式的文章内容。

这里用到两个 npm 包来解析 Markdown 文件：

- 使用 [gray-matter](https://www.npmjs.com/package/gray-matter) 把 Front Matter 和文章内容分离，并将 Front Matter 解析为 JS 对象；
- 使用 [remark](https://www.npmjs.com/package/remark) 将上一步分离出的文章内容解析为 HTML 格式，使用 remark 时需要用到多个相关插件，稍微麻烦了一点；

使用 remark 时，可以使用 [remark-prism](https://www.npmjs.com/package/remark-prism) 实现代码高亮，记得在文章页导入一个 prism 的主题 CSS 文件，不然文章中插入的代码没有高亮。

## 其他

### 页面布局

博客所有页面的布局都是统一的，比如顶部导航和底部版权信息在所有页面都显示，在每个页面都写一遍肯定是不现实的，这时候就可以通过[自定义 App](https://nextjs.org/docs/advanced-features/custom-app) 来实现统一的布局，在 `pages` 目录下新建一个 `_app.jsx` 即可。具体参考官方文档或本项目源码。

### Google Analytics

博客使用 Google Analytics 来做访问统计，按照 Google 的文档提示，需要在所有页面的 `head` 标签中插入两个 `script` 标签。`_app.jsx` 是用来自定义 `body` 标签内的内容的，显然不适合用它来实现，这时候就可以通过[自定义 Document](https://nextjs.org/docs/advanced-features/custom-document) 来实现这个需求了。具体参考官方文档或本项目源码。

### 部署

Next.js 是由 [Vercel ](https://vercel.com/dashboard) 开发的，所以把项目部署到 Vercel 再合适不过了，而且很简单、很方便，并且对个人用户有一定的免费额度，对于个人博客来说完全足够了。

首先把代码上传到 GitHub，然后在 Vercel 新建一个项目，授权并选择对应的代码仓库后，它就会自动拉取代码并部署了，并且在代码有更新时自动进行重新部署。

## 参考链接

- [本博客源码仓库](https://github.com/pengtikui/pengtikui.cn)
- [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
- [Customizing PostCSS Config](https://nextjs.org/docs/advanced-features/customizing-postcss-config)
- [Data Fetching](https://nextjs.org/docs/basic-features/data-fetching)
- [Next.js 官方文档](https://nextjs.org/docs)
- [TailwindCSS 官方文档](https://tailwindcss.com/docs)
- [gray-matter](https://www.npmjs.com/package/gray-matter)
- [remark](https://remark.js.org)
- [Prism](https://prismjs.com)
- [Next.js on Vercel](https://vercel.com/docs/next.js/overview)
