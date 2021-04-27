---
title: Koa2 简单上手体验
date: 2017-03-27 16:25:55
description: Koa2 是由 Express 团队打造的下一代 Node.js Web 框架，基于 ES7 的 async/await 实现。
tags:
  - Node.js
  - Koa
---

Koa2 是由 Express 团队打造的下一代 Node.js Web 框架，基于 ES7 的 async/await 实现。由于 Node.js v7.6.0 开始完全支持 async/await，所以需要 Node.js 版本在 7.6.0 以上才能正常使用 Koa2。

Koa2 只封装了 context、request、response 以及最核心的中间件处理流程，所以很多功能，比如路由等都需要自行编写或从 npm 安装中间件来实现。本文仅对 Koa2 做一个简单的体验，使用一些常用的中间件，使用 yarn 作为包管理工具。

### Hello World

首先安装 Koa2：

```bash
# 初始化 package.json
yarn init
# 安装 Koa2
yarn add koa
```

按照惯例，先来个 Hello World，新建一个 `app.js` 文件：

```javascript
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

启动上面的 Hello World：

```bash
node app.js
```

浏览器访问 `localhost:3000` 就可以看到 Hello World 了！

### 路由

Koa2 本身并没有封装路由，但是可以通过判断 `ctx.request.url` 来定制所需的路由。但是这样做比较繁琐，本文就不做赘述，我们直接使用路由中间件 `koa-router` 。

首先安装 `koa-router`：

```bash
yarn add koa-router@next
```

然后在上文的基础上修改 `app.js` 文件：

```javascript
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router
  .get('/', ctx => {
    ctx.body = 'Home Page';
  })
  .get('/user', ctx => {
    ctx.body = 'User Page';
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
```

用浏览器分别访问 `localhost:3000` 和 `localhost:3000/user` 就可以看到效果了！

除了 GET 方法外，koa-router 支持 POST、PUT 等多种 HTTP 方法，本文不再详细讲述，更多用法请参考 [koa-router 文档](https://github.com/alexmingoia/koa-router/tree/master)。

### 获取 GET 请求数据

获取 GET 请求数据是通过 request 对象中的 query 方法或 querystring 方法，query 方法返回格式化的参数对象，querystring 返回的是请求字符串，例如下面的路由：

```javascript
router.get('/query', ctx => {
  console.log(ctx.query);
  console.log(ctx.querystring);
});
```

访问 `localhost:3000/query?a=1&b=2`，`ctx.query` 的值为 `{ a: '1', b: '2' }`，`ctx.querystring` 的值为 `a=1&b=2`。

### 获取 POST 请求数据

Koa2 中没有封装获取 POST 请求中参数的方法，需要解析 `ctx.req` 对象获取数据，`ctx.req` 为原生 Node.js 请求对象。本文不对其进行详细解析，我们直接使用 `koa-bodyparser` 中间件将数据解析到 `ctx.request.body` 中。首先安装 `koa-bodyparser` 中间件：

```bash
yarn add koa-bodyparser
```

然后在 `app.js` 中使用该中间件：

```javascript
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
```

然后再添加一个 POST 请求的路由：

```javascript
router.post('/query', ctx => {
  ctx.body = ctx.request.body;
});
```

使用 Postman 提交一个带参数的 POST 请求，就可以看到效果了！

### 模板引擎

在 Koa2 中使用模板引擎，首先要安装 `koa-views` 中间件，该中间件支持 ejs、jade、pug、swig、react 等大多数模板引擎，然后再安装你想要使用模板引擎，本文以 ejs 为例：

```bash
yarn add koa-views ejs
```

在 `app.js` 中引入中间件并配置模板引擎：

```javascript
const views = require('koa-views');
// 配置模板文件目录和后缀名
app.use(
  views(__dirname + '/views', {
    extension: 'ejs',
  })
);
```

新建模板文件 `views/index.ejs`：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title><%= title %></title>
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to Koa2</p>
  </body>
</html>
```

然后添加一个路由：

```javascript
router.get('/ejs', async ctx => {
  let title = 'Hello Koa2';
  await ctx.render('index', { title });
});
```

使用浏览器访问 `localhost:3000/ejs` 就可以看到效果了！

### Cookie

Koa2 提供了从上下文中直接读取和写入 cookie 的方法 `ctx.cookies.get(name, [options])` 和 `ctx.cookies.set(name, value, [options])`。

由于 Koa2 的 cookies 操作是使用的 [cookies](https://github.com/pillarjs/cookies) 模块，所以参数和用法都与其一致。

> 本文参考了 [koa2 进阶学习笔记](https://chenshenhai.github.io/koa2-note/)，在此对原作者表示感谢，更多关于 Koa2 的用法请参考 [Koa2 的官方文档](https://github.com/koajs/koa/tree/master/docs)。
