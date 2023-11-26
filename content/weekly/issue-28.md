---
title: 第28期：不要用 Prisma
date: 2023-06-24
description: 简单吐槽一下 Prisma
---

![](/static/weekly/issue-28-cover.jpg)

[Prisma](https://prisma.io) 是一个 Node.js 的 ORM 库，号称下一代 Node.js & TypeScript ORM。最近在开发一个新的项目，因为 [Sequelize](https://sequelize.org) 和 [TypeORM](https://typeorm.io) 在之前都有使用过，并且 Prisma 比较火、社区评价也比较高，这次就尝试使用了一下，但使用后发现它并没有像别人说的那么好，甚至可以说它算不上是一个合格的 ORM，这里就简单吐槽一下。

一是模型定义。不论是 Sequelize 的对象形式还是 TypeORM 的类的形式，它们都是在用 JS/TS 语言本身的方式去定义数据模型，并没有发明新东西，而 Prisma 要使用它们自创的 schema 语法，从使用体验的角度来看，毫无必要且提高了学习成本；另外所有的模型定义都要写在 `prisma.schema` 这一个文件内，如果你的项目只有简单的几张表，那没什么问题，但如果表比较多，那维护起来简直是个灾难。

二还是模型定义。某些字段的定义不符合直觉，比如我的表中有个 `created_at` 字段，默认值为当前时间，在 Primsa 中的定义为 `created_at DateTime @default(now())`，然后我们用起来好像也没什么问题，但是看它创建出来的表结构会发现这个字段的 SQL 定义是 `created_at timestamp with time zone not null`，而没有 `default now()` 部分。这是因为默认值它并没有使用数据库本身的能力，而是由 Prisma 来生成的，如果你对这个时间的精度要求较高或应用服务到数据库服务之间的延迟较高，那这个默认值可能就是不符合预期的。

三是 SQL 查询。某些情况下的 SQL 查询是不符合预期的，比如我要对某张表中的某条数据进行 update 操作，对于一个正常的 ORM 来说，它执行的 SQL 语句应该是 `UPDATE xx SET xx=xx WHERE xx`，而 Prisma 执行的是一个事务，在事务中先后执行了 `SELECT`、`UPDATE`、`SELECT` 操作，也就是说一个简单的 update 操作，它执行了三条 SQL 语句。这只是个简单的单表 update 操作而已，如果你要执行更复杂的操作，那它执行的 SQL 语句就更多了，这不仅导致操作执行时间变长，也会增加数据库服务的压力。对于这个问题，三年前就有人在 GitHub 上提了 issue，但至今都是 open 状态。

吐槽了这么多，但还是要思考一下 Prisma 为什么能这么火。我想可能是对开发体验的重视吧，Prisma 应该是 Node.js ORM 中对 TypeScript 支持最好的，没有之一，并且也提供了各个编辑器的插件，进一步提升了使用体验；另外官网和文档也都做的很美观，浏览起来的愉悦感要好很多，Sequelize 和 TypeORM 这方面就做的比较差。

最后，虽然端午节已经过去了，但假期还没结束，就祝你端午安康、假期快乐吧。

<hr />

## 技术

#### [WebKit Features in Safari 17 beta](https://webkit.org/blog/14205/news-from-wwdc23-webkit-features-in-safari-17-beta/)

这篇文章在上期提到过，值得再来推荐一次。Safari 17 beta 推出了众多新特性，值得前端开发者关注，比较重要的有 macOS 端支持了 PWA、visionOS 中支持 WebXR、HTML 新增 `popover` 属性、支持 CSS 计数器等。

#### [NestJS v10 is now available!](https://trilon.io/blog/nestjs-10-is-now-available)

NestJS 是用于构建企业级服务端应用的 Node.js 框架，他们刚发布了 v10 大版本更新，功能层面没有大的变化，但是支持了 SWC，大幅提升编译速度。

#### [Astro 2.6](https://astro.build/blog/astro-260/)

Astro 是偏向用于内容型站点的 Web 框架，近期发布了 2.6 版本，中间件、Hybrid SSR 等实验性功能被标记为稳定，同时新增重定向功能、改进了对 Markdoc 的支持。

#### [StackOverflow Developer Survey 2023](https://survey.stackoverflow.co/2023/)

StackOverflow 发布了 2023 年度的开发者调查报告，超过 90000 名开发者参与调查，内容包含如何学习、正在使用什么工具等，同时今年新增了 AI/ML 相关内容。

## 开源

#### [Variant Vault](https://github.com/chrisabdo/motionvariants)

一系列基于 Framer Motion 的动画效果，可以直接复制其代码粘贴到自己的项目中来使用，官网做的也很好看。

#### [LiteFS](https://github.com/superfly/litefs)

LiteFS 是一个基于 FUSE 的文件系统，用于跨计算机集群复制 SQLite 数据库。可以将 SQLite 用于边缘网络的服务端应用，扩展了 SQLite 的应用场景，并且由于云存储的成本远低于云数据库，所以这也是中小型应用有效降低成本的一种方式。

#### [useHooks](https://github.com/uidotdev/usehooks)

一系列 React hooks 的集合，更现代且服务端安全。

## TMT

#### [晚点独家丨马云的非公开会议，淘宝天猫未来的三个方向](https://mp.weixin.qq.com/s/OnqUXcxUyr97YbZJFV1CSA)

马云提的三个方向 -- 回归淘宝、回归用户、回归互联网，但阿里本质上是个零售企业，这三个方向好像从来都不是阿里所擅长的。
