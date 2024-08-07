---
title: 第67期：Web 技术概览
date: 2024-07-07
description: 对 Web 技术有个整体的概念和认知
---

![](/static/weekly/issue-67-cover.jpg)

现在的互联网由各式各样的 Web 网页和 App 组成，它们分别属于 BS（浏览器-服务端）架构和 CS（客户端-服务端）架构，两种技术架构最主要的区别是客户端资源的加载方式，BS 架构下的 Web 网页，客户端资源（如 JS、CSS 等静态资源）是每次使用时通过网络加载的，等这些客户端资源加载完成后再去请求后端接口来获取业务数据，CS 架构下的 App 是由用户提前下载安装的，每次使用时不需要加载客户端资源这一步。

而现在各种类 Web 技术，如小程序等用于 App 开发，也有些混合开发技术直接把网页融合到 App 中，让 BS 和 CS 两种技术架构的界限越来越模糊了，Web 技术的应用也越来越广泛了，整个互联网很大程度上是靠 Web 技术做支撑的。这里就以一个最简单的网站为例，对 Web 所涉及的技术栈做个简述，以后有机会的话，对每一项技术再做详细的介绍。

![](/static/weekly/issue-67-web-arch.jpg)

上图是一个**最简单**的 Web 网页或 App 的架构图，主要分为客户端和服务端两部分，中间可能还会有个代理或负载均衡服务，其工作流程为：

1. 用户访问网页，从后端服务或 CDN 服务加载网页资源，其中包括 HTML、CSS、JS 等静态资源；
2. 浏览器渲染网页，执行 JS 脚本，然后请求后端服务获取业务数据；
3. 浏览器请求后端服务时可能会经过代理服务进行中转，当然这个代理服务也可以不要；
4. 后端收到请求后，执行对应的业务逻辑，比如读写数据库、请求三方服务等；
5. 后端返回业务数据，浏览器接收到数据后渲染到页面上；

下面就逐一简单介绍一下整个流程中所涉及到的技术。（突然发现这好像一个经典的面试题“浏览器输入 URL 后回车发生了什么”哈哈哈）

#### HTTP

从上面的架构图中可以看出，无论是加载网页静态资源还是业务数据，都是通过 HTTP 请求完成的，大多数的 App 在和服务端交互时也都是通过 HTTP 完成的。本质上来说前端是一个 HTTP 客户端，后端是一个 HTTP 服务端。

**HTTP 是整个互联网运行的基石**。它是一个基于请求与响应的协议，定义了客户端与服务器之间的请求和响应格式，可以把请求和响应简单地理解为具有固定格式的纯文本，其中请求包括请求方法、URL、请求头和请求体，响应包括响应状态码、响应头和响应体等。

#### Web 网页

Web 网页是指客户端部分，它在浏览器中渲染和运行，一般一个网页由 HTML、CSS 和 JavaScript 三部分组成，其中 HTML 是网页的结构，如页面由导航栏、表格、列表等组成，CSS 为网页的结构添加样式，如页面的布局、字体大小颜色、动画效果等，JavaScript 是网页的交互逻辑，如页面的点击事件、表单提交、接口请求等。

目前常用的前端框架中用到的 JSX 或 Vue 的模版语法，以及 Less 或 Sass 等 CSS 预处理器的语法，在浏览器中都是不能直接运行的，所以都需要编译这一步将它们编译成 HTML、CSS 和 JavaScript。目前浏览器能直接运行的语言只有 HTML、CSS、JavaScript 和 WebAssembly。

网页的静态资源是每次用户打开页面时实时请求来的，这些资源可以通过后端服务提供，也可以通过 CDN 服务提供，通常在前后端分离的架构中，业务后端服务不需要关心这些，它们由单独的 HTTP 服务来提供。这种架构下，用户每次请求到的都是最新版，相较于 App 需要发版、等用户安装更新，这种迭代效率会更高，且不需要兼容旧版本。

#### 后端服务

这里的后端服务仅指处理业务逻辑相关的后端服务，它本质上是一个 HTTP 服务，一般是由 Java、Go 等语言编写，主要用于接收客户端发来的 HTTP 请求，然后根据请求处理业务逻辑，比如读写数据库、请求三方服务等，最基础的内容是数据库的增删改查，复杂一点的会涉及缓存、消息队列等技术。

一般来说后端服务的逻辑都是靠 HTTP 请求来触发的，当然复杂的业务逻辑中也会有些其他的触发方式，比如定时任务、消息队列等。

#### 代理和负载均衡

代理和负载均衡本质上也是个 HTTP 服务，它介于后端服务和客户端之间，主要负责转发和处理请求。代理一般使用 Nginx 来实现，可以用来隐藏后端服务的真实地址，增强服务的安全性，也可以聚合多个后端服务，比如 `/api/v1` 路径对应一个后端服务，`/api/v2` 路径对应另一个后端服务，另外代理服务还可以提供 HTTPS 服务、处理跨域请求等，业务后端服务就不需要关心这些业务无关的东西了。

负载均衡的作用与代理类似，但它通常用于流量较大的网站，比如单台服务器不足以支撑需求，这时就需要将服务部署到多台服务器上，负载均衡将请求根据特定的规则分发到不同的服务器上。另外也可以通过负载均衡来实现服务的高可用，比如当某个服务器出现故障时，负载均衡会将请求分发到其他服务器上，保证服务的可用性。

#### 认证和授权

当客户端请求后端服务时，通常不能不做任何限制，比如某些请求我们需要知道该请求来自于谁，**认证**是用于验证当前的用户是谁，而**授权**是用于判断当前用户是否有权限访问某个资源，这是两个不同的概念。从功能上能看得出来认证前置于授权，比如用户访问某个页面时，需要先判断当前用户是否已登录，再判断用户是否有权限访问该页面。

授权中常用的技术方案有 ACL 和 RBAC 两种，其他方案大多也是这两种方案的变种。ACL 是指 Access Control List（访问权限列表），即用户和权限直接进行多对多的绑定关系，而 RBAC 是指 Role-Based Access Control（角色权限控制），即用户和权限之间加一个角色，用户和角色绑定，角色和权限绑定，用户和权限不直接进行绑定。

认证的英文是 authentication，授权的英文是 authorization，两者都可以缩写为 auth，但这样就比较容易混淆，所以前者一般缩写为 authn，后者一般缩写为 authz。

#### Cookie 和 Token

前面提到了认证，为了实现对每个请求的认证，我们就需要一些标识信息来识别用户，但总不能每次请求时都让用户带上账号密码吧，因此就有了 Cookie。通常在用户登录后，后端服务生成一个 Cookie 返回给前端，后续前端的每次请求都会带上 Cookie，后端可以根据 Cookie 来判断当前用户是谁，Cookie 由后端放在 HTTP 响应的 Set-Cookie 响应头中，浏览器会自动保存它，并在后续求的请求中带在 HTTP 请求的 Cookie 请求头中。

一般返回给前端的 Cookie 是一个较短的、无意义的 ID，后端会在 Redis 等缓存服务保存 key-value 格式的数据，其中 key 为 Cookie 的值，value 为用户信息或其他信息，服务端拿到 Cookie 后去缓存中查询对应的用户信息，在缓存中保存的信息称为 Session，Session 是有时效的，并且可以在服务端提前销毁它，也可以限制同一用户的 Session 数量。另外 Cookie 也是有时效的，一般和 Session 保持一致，毕竟它俩是一对。

Token 一般是指 JSON Web Token，它是一种基于密钥的通用认证机制，通常用于在不同的服务之间传递身份验证信息。它一般是将用户信息或其他信息组合起来，生成一个唯一的字符串，再将该字符串加密后返回给前端，后端拿到该 Token 后将其解密就能拿到原始信息，而不需要在服务端保存原始信息。

#### 跨域和跨站

在了解跨域和跨站之前，需要先了解一下 URL。前后端之间的 HTTP 都有一个 URL 做标识，比如 `https://pengtikui.cn/api/v1/user?id=1`，URL 一般由协议、域名、端口、路径、查询字符串等组成，前面的例子可以拆解为：

- 协议：https
- 域名：pengtikui.cn
- 路径：/api/v1/user
- 查询字符串：id=1

另外这里没有指定端口，那会自动使用默认值，HTTP 的默认端口是 80，HTTPS 的默认端口是 443。

当两个 URL 的协议、域名和端口三者有任意一个不相同，则为跨域，比如在 `https://pengtikui.cn` 的页面中请求 `https://api.pengtikui.cn` 下的接口时，两者的域名不同，就会发生跨域。对于跨域的问题可以通过 CORS （跨源资源共享）来解决。

再以域名 `pengtikui.cn` 为例，其中 `.cn` 为一级域名，`pengtikui.cn` 为二级域名，`api.pengtikui.cn` 为三级域名，当两个 URL 的二级域名不相同或者协议不相同时，就会发生跨站。

不论是跨域还是跨站，浏览器对其都有不同程度的安全限制，可能会导致请求无法带上 Cookie 或跨域报错等问题，这也是开发中比较常见的问题。

对于 Web 开发中所涉及的技术就简单说到这里，当然以上内容还不是很全面，比如数据库、部署等内容还没有涉及，另外上面提到的技术也都是简述，后面有机会再一一进行详解和补全。（又开新坑~）

<hr />

## 技术

#### [Omakub](https://omakub.org/)

这是 Ruby on Rails 作者 DHH 新搞的一个工具，可以通过一行命令将 Ubuntu 系统配置成一个功能齐全、UI 美观的 Web 开发系统。本质上是一个懒人包式的工具，自动帮你安装各种应用，包含浏览器、编辑器、GUI，以及 Spotify、Zoom 等（国外）常用的软件。

#### [吐槽一下 Vue3 的语法设计](https://mp.weixin.qq.com/s/c1fywG0NJi7Idh9IjryXcg)

都说 Vue 比 React 更容易上手，但我一直认为 Vue 的设计和用法远比 React 复杂，对于想要深入学习的人来说 Vue 反倒是不简单，因为 Vue 自创了太多的 API 和语法。本文就是对 Vue3 语法设计的吐槽，整体来说这些吐槽还是比较客观和到位的。

## 开源

#### [craft.js](https://github.com/prevwong/craft.js)

一个用于构建拖拽式的页面编辑器的 React 框架，可以用于低代码/无代码的编辑器开发。它提供了一些灵活的 API，可以比较方便的进行扩展，并且数据是可序列化的 JSON 格式。

#### [REAFLOW](https://github.com/reaviz/reaflow)

REAFLOW 是一个模块化的、用于构建流程编辑器的图表引擎，主要用来构建流程图编辑器，具有自动布局、节点连接和重排、缩放平移等功能。

#### [Eidos](https://github.com/mayneyao/eidos)

一个可离线使用的 Notion 替代品，并且具备较强的可扩展性，所有的数据都是离线存储在本地的。目前该项目仍处于早期开发阶段，还不太成熟。
