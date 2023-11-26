---
title: 第35期：Node.js ORM 盘点
date: 2023-08-26
description: Node.js 生态盘点之 ORM 篇
---

![](/static/weekly/issue-35-cover.jpg)

随着 Node.js 的不断发展和演进，目前已经拥有了一个庞大的生态系统，可以帮助开发者快速实现需求，但 Node.js 的生态又相对混乱，让人眼花缭乱，所以打算写一系列 Node.js 生态盘点的相关内容，以帮助开发者快速进行技术选型。

这篇是该系列第一篇，来盘点一下 Node.js 生态中的 ORM：

[Sequelize](https://sequelize.org/)

Sequelize 应该是最老牌的 Node.js ORM 库了，支持 Oracle、Postgres、MySQL、SQLite 等多种数据库，具有完整的事务、关系、懒加载相关能力，功能比较完善。由于 Sequelize 历史比较久远，它对 TypeScript 的支持度不是很好，不过官方也在努力完善了。

[TypeORM](https://typeorm.io/)

TypeORM 也是功能比较完善、社区比较活跃的 ORM 库，应该也是当前用户最多的。它支持 Active Record 和 Data Mapper 模式，更容易写出高质量、低耦合、可扩展的代码，另外从名字也能看出来它对 TypeScript 的支持比较好，并且大量使用了装饰器语法，和 Nest.js 搭配使用比较舒服。不过目前仍没有发布 1.0 版本，issue 也相对较多。

[Prisma](https://www.prisma.io/)

Prisma 是最近几年比较火的 ORM 库，不同于 Sequelize 和 TypeORM 使用 JS 对象形式或 class 形式来定义模型，Prisma 实现了一套自己的语法来定于数据模型，并根据这些定义自动生成类型文件，因为对 TypeScript 的支持也比较好，开发体验也是最好的。不过它也有一些缺点，可以参考 [第 28 期：不要用 Prisma](https://pengtikui.cn/weekly/issue-28)。

[MikroORM](https://mikro-orm.io/)

MikroORM 是基于 Data Mapper、Unit of Work 和 Identity Map 模式的 ORM 库，支持多种数据库，对 TypeScript 的支持也比较好。由于它大量借鉴了 Java 和 PHP 的 ORM 库，所以和 Node.js 生态的习惯不太一样，使用起来比较繁琐，对大部分项目来说有点重，不过对于比较大型的复杂项目来说应该会比较合适。

[Drizzle ORM](https://orm.drizzle.team/)

Drizzle 是个比较新的 ORM 库，但功能比较完备，对 TypeScript 的支持也比较好。相较于其他 ORM 库，它的用法比较简单，更偏向于 SQL 本身，同时 API 大量使用了链式调用，比较符合 JavaScript 开发者的习惯，另外对 Serverless 数据库支持的也比较好。

<hr />

## 技术

#### [Using TypeScript with React](https://react.dev/learn/typescript)

现在 TypeScript 基本是前端的默认语言了，但 React 官方文档一直没提及过 TypeScript，近期 React 官方文档新增了一篇内容来介绍 如何在 React 中使用 TypeScript。

#### [Radix Themes](https://www.radix-ui.com/themes)

Radix UI 作为 Headless 组件库，一直没有样式相关的内容，但最近官方推出了 Radix Themes 提供一套完善的 UI 样式，组成了一套完整的组件库。当然你还可以继续使用 Headless 的 Radix UI。

## 开源

#### [Retake](https://github.com/getretake/retake)

Retake 是一个为 AI 数据设计的实时数据库，通过集成 Postgres 数据与 embedding 模型，实现数据的实时搜索能力。可用于 LLM 应用、个性化推荐等场景。

#### [V2exOS](https://github.com/isaced/V2exOS)

用 SwiftUI 开发的 V2EX 客户端，支持 macOS、iOS 和 tvOS，代码比较简单易懂，可以作为学习 SwiftUI 时的参考资料。

## 设计

#### [SnowUI](https://snowui.byewind.com/)

一套用于后台类应用的 Design System，配色比较素雅，除了常用的基础组件外，还有一些页面模版，以 Figma 设计文件的形式发布。

#### [Studio](https://tailwindui.com/templates/studio)

TailwindCSS 团队发布的一套页面模版，可适用于团队或公司的官网。基于 Next.js 和 Framer Motion 开发，动画效果很不错。

## 工具

#### [LocalCan](https://www.localcan.com/)

平时业务开发时，经常会需要将某个域名代理到本地的 localhost 进行开发调试，然而大多数代理工具都需要比较繁琐的配置，并且也比较难用。LocalCan 就是为了解决这个问题而生的，它的界面比较简洁，用法也很简单，但比较遗憾的是目前仅支持 `.local` 域名。
