---
title: 第41期：聊聊 Next.js 14
date: 2023-10-28
description: Next.js 14 的方向是不是走错了
---

![](/static/weekly/issue-41-cover.jpg)

在前几天的 Next.js Conf 上 Vercel 发布了 [Next.js 14](https://nextjs.org/blog/next-14)，该版本相较于 13，没有任何 API 变更，主要更新点是 Turbopack 带来了大幅的性能提升以及 Server Actions 功能进入稳定版本，不太理解为什么是 14 而不是 13.6，可能是出于营销方面的考虑吧。

虽然 14 没有大的更新，但 Server Actions 功能还是引起了比较多的讨论。这个功能大概就是在 React 组件中可以写一些服务端的逻辑，但这些代码会在编译时拆分开，不会被发送给浏览器端：

```tsx
export default function Page() {
  async function create(formData: FormData) {
    'use server';
    const id = await createItem(formData);
  }

  return (
    <form action={create}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

上面的代码中表单运行在浏览器，提交表单后会调用 create 方法，而这个方法是在服务端执行的，服务端的代码通过 `'use server'` 指令来标识，服务端代码可以执行任意操作，比如直接执行 SQL 语句。有没有很熟悉的感觉，这不就是 PHP 嘛！

因为这奇怪的设计，网上也出现了不少调侃，大家创造出了 `use system` 直接调用系统指令、`use binary` 直接调用二进制代码等，哈哈哈。

我觉得这是 Vercel 过度注重商业化、不关注用户实际需求导致的结果，在他们眼中好像所有网站都是内容型的，但现实中很多网站是应用型的，这些网站对 SSR 并没有强诉求，这种像是开倒车的设计也会有些潜在的问题和隐患：

1. 框架越来越多的黑盒设计降低了开发者的信任度，也提高了开发调试的难度，比如上面表单的逻辑，从点击提交按钮到执行 `create` 方法之间的过程是由框架处理的，对开发者并不透明；

2. 前后端耦合并不是个好的选择，前端发展那么多年终于实现了前后端分离，这又给改回去了。前后端分离并不只是技术方面的考量，在分工愈发细致的今天，这是提高团队效率的重要方式，专业的事交给专业的人去做，而不是一个人包揽全部；

3. 提高了开发者的心智负担，因为在开发时你要时刻记得区分哪些是客户端逻辑、哪些是服务端逻辑，`'use server'` 这种 API 设计也不优雅、不方便，而且在服务端逻辑中要记得考虑安全问题，比如在服务端逻辑中写了 SQL 语句，很容易出现 SQL 注入的风险；

其实也不止 Next.js，目前大部分前端框架都过度关注了 SSR 相关的能力，相较于**做页面**的框架，我们更需要一个**做应用**的框架。

<hr />

## 技术

#### [Why I Won't Use Next.js](https://www.epicweb.dev/why-i-wont-use-nextjs)

本文作者从 Web 标准和复杂度的角度分享了自己为什么不使用 Next.js，如 Next.js 的一些 API 不遵守 Web 标准、框架内使用了很多黑盒魔法等，同时作者表示更推荐 Remix 哈哈。

#### [微信对话开放平台](https://chatbot.weixin.qq.com/)

微信最近上线了对话开放平台，通过该平台可以快速搭建智能对话机器人，可用于智能客服、智能家居助手等业务场景，并且提供零代码可视化开发，非开发者也能快速上手搭建机器人。目前这个服务是免费的，但等用户多了以后就不知道要不要收费了。

## 工具

#### [Bundlephobia](https://bundlephobia.com/)

Bundlephobia 是一个查询 npm 包打包信息的工具，它可以查询指定 npm 包的打包体积、依赖关系、是否支持 tree shaking 等信息。

#### [Dataflare](https://dataflare.app/)

Dataflare 是一个基于 Tauri 开发的数据库管理工具，支持 PostgreSQL、MySQL、SQLite 等多种数据库，UI 设计的比较简洁优雅，并且支持暗色模式。

## 设计

#### [Neubrutalism - UI Design Trend That Wins The Web](https://dodonut.com/blog/neubrutalism-web-design-trend/)

Neubrutalism (中性主义) 是一种设计风格，它的特点是简单、注重功能性，通过简单的几何形状和明亮的颜色组成页面，也就是本期周刊的封面图风格，这种风格目前在网页设计中也越来越多的被应用。

## TMT

#### [小米 14 系列手机发布](https://www.mi.com/xiaomi-14-pro)

小米发布了 14 系列手机，各方面都是目前安卓机的顶级水平，首发的高通 8Gen3 处理器也可以吊打苹果了。我比较喜欢的设计是四边四角等 R 弯曲，这样屏幕的圆角和手机边框的圆角弧度一致，视觉效果更舒服，安卓机里目前能做到好像还比较少。

除了小米 14，这次发布会另一个重要产品是小米澎湃 OS，通过底层重构实现了手机、汽车、智能家居设备的互联互通，小米大方地承认了该系统是基于安卓的，希望能够早日摆脱安卓发展自己生态吧。
