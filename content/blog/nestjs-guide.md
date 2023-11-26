---
title: Nest.js 上手指南
date: 2023-10-03
description: Nest.js 是用于构建高效、可靠和可扩展的服务端应用的 Node.js 框架。
tags:
  - Node.js
  - Nest.js
  - Nest
  - Egg.js
  - Egg
  - Fastify
  - Express.js
  - Express
  - Koa.js
  - Koa
  - Midway
  - Drizzle ORM
  - 数据库
  - 后端
---

## 是什么

Nest.js 是用于构建高效、可靠和可扩展的服务端应用的 Node.js 框架，可以用来开发 HTTP 服务、Websocket 服务和微服务，特点是可扩展和渐进式。可扩展是指它的模块化架构允许你灵活的引入任何第三方的库；渐进式是指框架本身没有包含所有的功能，而是可以按需引入功能模块或 Node.js 生态中的任意内容。

## 对比

Node.js 框架常用的有 Express、Koa、Fastify、Egg.js、Midway 等，简单做个对比：

- Express、Koa 与其说是个框架，不如说是个库，Express 只具备路由和中间件的能力，Koa 只有中间件能力，没有架构设计，对业务代码没有任何约束，用来开发大型项目时需要再做一层封装和能力补全，另外 Nest.js 的底层就是基于 Express 的；
- Fastify 除了路由和插件机制外，也没有提供太多的能力，主要卖点是基于 Schema 的性能优化，Nest.js 的底层框架也可以换成它；
- Egg.js、Midway 都号称是企业级的框架，但 Egg 对 TS 支持不好，并且强约束的目录结构不够灵活，Midway 也是阿里的，其设计和 Nest.js 很类似，但更追求大而全，并且同时支持面向对象和函数式，有时候给你太多的选择也不是好事；

## 基本概念

### 装饰器和依赖注入

Nest.js 与 Angular 类似，大量使用了装饰器语法和依赖注入机制：装饰器是一种特殊类型的声明，用于给类、方法、属性或参数添加元数据，在 Nest.js 里面一般用于类、方法和参数上；依赖注入是一种设计模式，可以灵活地在需要的地方来注入依赖的对象或方法等，来实现解耦合和可测试性。

举个例子：

```typescript
// user.controller.ts
@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/user')
  async getUser() {
    return this.userService.getUserById();
  }
}

// user.service.ts
@Injectable()
export class UserService {
  async getUserById() {
    // ...
  }
}
```

上面的 `@Controller()`、`@Get()`、`@Injectable()` 都是装饰器，UserController 的 `constructor` 方法中是通过依赖注入机制来导入 UserService 实例，并且该实例可以在其他地方复用，不会重复进行实例化。

### 模块

模块是 Nest.js 中组织代码的方式，本质上和 ESM 或 CommonJS 类似，都是为了将一部分内容打包到一块，并于其他模块做隔离。不同的是 Nest.js 的模块机制构建在 ESM 之上，聚合的也都是与框架相关的内容，并且这些内容可以分散在多个文件中。
Nest.js 中定义一个模块需要使用 `@Module()` 装饰器，并且接收 `imports`、`controllers`、`providers`、`exports` 参数来指定模块的内容：

- `imports` 用于导入其他模块，如果该模块中用到的其他模块中的内容，都需要在这儿导入相应的模块，可以类比为 ESM 中的 import 语法；
- `controllers` 用于声明控制器，控制器用来接收 HTTP 请求（或 RPC 请求）并返回响应；
- `providers` 用于声明 Provider，Provider 可以是任意可被注入的类或函数等，比如 Service 等，Provider 一般都会用 `@Injectable()` 装饰器来声明，Provider 也是 Nest.js 中比较重要的一个概念，大部分内容都可以归类为 Provider；
- `exports` 用来声明该模块可以导出、被其他模块所使用的内容，可以理解为 ESM 中的 export 语法；

```typescript
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
```

如上 UserModule 依赖了 DatabaseModule，可以在 UserService 中调用该模块的内容；UserController 中需要用到 UserService 中的一些方法，所以声明在了 `providers` 中；同时希望其他模块可以调用 UserService 中的方法，所以在 `exports` 中声明了 UserService。

每个完整的 Nest.js 应用至少要包含一个根模块。

### 控制器

控制器就是 MVC 架构中的 controller，它用来接收请求并返回响应，这个请求在 HTTP 服务中是 HTTP 请求，在微服务中是 RPC 请求。本质上也是一种路由机制，将特定的路径对应到特定的控制器上。

控制器的每个方法对应一个方法和路径，可以通过 `@Get()`、`@Post()` 等装饰器来定义，这些方法可以传入参数作为请求路径，如 `@Get('/user')`。如果一个控制器的所有方法有共同的路径，可以在 `@Controller()` 中来定义。

```typescript
@Controller('cats')
export class CatsController {
  @Get() // GET /cats
  async getAll() {
    // ...
  }

  @Post() // POST /cats
  async create() {
    // ...
  }

  @Get(':id') // GET /user/xx
  async detail() {
    // ...
  }
}
```

### Middleware、Pipes、Guards

这三者本质上都是类似于 Express 的中间件，都是在一个请求到达 Controller 之前或 Controller 响应之后做一些操作，Nest.js 根据其功能做了细分。

Middleware：默认情况下，Nest.js 的中间件就是 Express 的中间件，与 Express 生态完全兼容，也可以是 `@Injectable()` 装饰器注释的类，并且实现了 `NestMiddleware` 类型。中间价可以执行任何代码，可以用来更改请求或响应对象，也可以提前结束当前请求等；

Pipes：管道是用 `@Injectable()` 装饰器注释的类，并且实现了 `PipeTransform` 类型。一般用来转换数据格式和参数验证，比如对请求参数做校验，对于非法的请求参数直接抛出错误并终止此次请求，也可以对请求的参数做一些转换，比如将 URL 中的一些请求参数从字符串转为数字等；

Guards：守卫是用 `@Injectable()` 装饰器注释的类，并且实现了 `CanActivate` 类型。一般用来做登录和权限的验证，当 `canActive` 方法返回 `false` 时，请求会终止；

这三种东西都可以全局配置，也可以按需配置。其执行顺序为：

客户端 -> Middleware -> Guards -> Pipes -> Controller

### 错误处理

Nest.js 内置了异常处理层，所有未捕获的错误都会被该层捕获，然后发送对用户友好的响应。你可以在代码中抛出 `HttpException`，它会自动生成对应的错误信息返回给客户端，出现无法识别的错误时，默认会返回 500 错误。

也可以自行实现 Exception filters 来按照自己的需求处理错误，比如需要添加日志或修改返回给客户端的错误信息的格式等。一个 Exception filter 需要实现 `ExceptionFilter` 类型，并且使用 `@Catch()` 装饰器来注释，例如：

```typescript
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
```

## 实践

### 安装

Nest.js 提供了 CLI 工具，可以快速创建一个项目：

```bash
# 全局安装 CLI 工具
npm i -g @nestjs/cli

# 创建项目
nest new project-name
```

创建的空项目默认会包含一个根模块 AppModule，以及 AppService 和 AppController，可以算作是一个完整的应用了。

### 配置

在一个项目中，配置是必不可少的内容，通常这些内容会根据环境的不同而不同，比如数据库配置、Secret 等。Nest.js 官方提供了 `@nestjs/config` 模块用来加载配置，他默认从 env 文件和环境变量中读取配置。

使用比较简单，安装后在项目的根模块引入即可：

```typescript
// app.module.ts
@Module({
  imports: [ConfigModule.forRoot({})],
  providers: [AppService],
})
export class AppModule {}

export class AppService {
  constructor(private configService: ConfigService) {}

  async func() {
    const DB_URL = this.configService.get('DB_URL');
  }
}
```

这样就可以在 AppModule 中调用 ConfigService 来读取配置了，需要注意的是，如果需要在其他模块中读取配置，也要在相应的模块中导入 ConfigModule。

如果想要 ConfigModule 在全局生效，不用繁琐的在每个模块都导入一边，那在根模块导入时的 `forRoot` 方法中添加 `{ isGlobal: true }` 的参数即可，这样 ConfigModule 就是一个全局模块了。

### 数据库

和 Nest.js 搭配比较好的 ORM 是 TypeORM，官方也提供了模块封装 `@nestjs/typeorm` 和详细的文档，按照官方文档安装并导入即可使用。

为了更好的说明 Nest.js 是如何工作的，这里就用 Drizzle ORM 来做个示例，这个 ORM 并没有提供 Nest.js 模块的封装，需要自己封装。这里补充一个知识点，前面提到的 Provider 都是 class，比如 Service 等，但 Provider 除了是 class，也可以是对象、工厂函数等。

使用 class 类型的 Provider 时的写法如下：

```typescript
@Module({
  providers: [AppService],
})
export class AppModule {}
```

他本质上是一个语法糖，完整的写法为：

```typescript
@Module({
  providers: [
    {
      provide: AppService,
      useClass: AppService,
    },
  ],
})
export class AppModule {}
```

除了 useClass，还可以是 useFactory、useValue 等，这里就用 useFactory 封装一个 Drizzle ORM 模块：

```typescript
export const DRIZZLE = Symbol('DRIZZLE_INSTANCE');

@Global()
@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const client = postgres(configService.get<string>('DATABASE_URL'));
        return drizzle(client);
      },
    },
  ],
  exports: [DRIZZLE],
})
export class DrizzleModule {}
```

这样就可以在其他模块中导入 Drizzle 实例了，并且多个模块中共用同一个实例，不会重复生成多个。

```typescript
@Injectable()
export class UserService {
  constructor(@Inject(DRIZZLE) private readonly drizzle: Drizzle) {}

  async getUserById() {
    // this.drizzle.select().from().where();
  }
}
```

至此已经包含了 Nest.js 中大多数的常用内容了，更详细的内容可以参考官方文档。
