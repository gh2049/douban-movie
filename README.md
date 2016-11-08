

## 程序目录

```
.
├── bin                      # 启动脚本
├── blueprints               # redux-cli的蓝图
├── build                    # 所有打包配置项
│   └── webpack              # webpack的指定环境配置文件
├── config                   # 项目配置文件
├── server                   # Express 程序 (使用 webpack 中间件)
│   └── main.js              # 服务端程序入口文件
├── src                      # 程序源文件
│   ├── main.js              # 程序启动和渲染
│   ├── components           # 全局可复用的表现组件(Presentational Components)
│   ├── containers           # 全局可复用的容器组件
│   ├── layouts              # 主页结构
│   ├── static               # 静态文件(不要到处imported源文件)
│   ├── styles               # 程序样式
│   ├── store                # Redux指定块
│   │   ├── createStore.js   # 创建和使用redux store
│   │   └── reducers.js      # Reducer注册和注入
│   └── routes               # 主路由和异步分割点
│       ├── index.js         # 用store启动主程序路由
│       ├── Root.js          # 为上下文providers包住组件
│       └── Home             # 不规则路由
│           ├── index.js     # 路由定义和代码异步分割
│           ├── assets       # 组件引入的静态资源
│           ├── components   # 直观React组件
│           ├── container    # 连接actions和store
│           ├── modules      # reducers/constants/actions的集合
│           └── routes **    # 不规则子路由(** 可选择的)
└── tests                    # 单元测试
```
## 豆瓣 api
本项目使用的是 [douban v2版API](https://developers.douban.com/wiki/?title=movie_v2)，某些高级接口未开放权限，无法调用其接口。

公开 API 如下：
- 正在上映 : /v2/movie/in_theaters
- 即将上映 : /v2/movie/coming_soon
- 电影条目 : /v2/movie/subject/:id
- 影人条目 : /v2/movie/celebrity/:id
- 电影条目搜索 : /v2/movie/search?q={text}
- Top250 :  /v2/movie/top250
- 北美票房榜 ： /v2/movie/us_box

## 感谢
[React脚手架](https://github.com/bodyno/react-starter-kit)


