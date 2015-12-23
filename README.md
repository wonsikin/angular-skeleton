前端项目
-------

##安装开发环境##

1. 先安装node.js

2. 安装gulp和bower： `npm install -g gulp bower`

3. 进入到根目录，执行 `npm install`

4. 执行`gulp serve`命令，即可启动项目。

##目录说明##


```
├── doc/                  # 文档目录
├── e2e/                  # 端到端测试目录
├── gulp/                 # 前端构建工具gulp的脚本
├── src/                  # 源码目录
│   └── app/
│       └── components/   # 公共组建
│       └── views/        # 各个分页面
│       └── index.*.js    # 配置文件
│       └── index.less    # 样式表
│   └── assets/           # 一些静态资源
│       └── images/       # 图片
│   └── favicon.ico
│   └── index.html
├── bower.json            # 前端第三方依赖配置文件
├── gulpfile.js           # 前端构建工具gulp的脚本入口
├── karma.conf.js         # 前端测试的配置文件
├── package.json          # 前端自动化依赖关系的配置文件
├── README.md             # 说明文件
```

其他一些文件夹
`bower_components`: 前端第三方依赖包所在目录；`node_modules`: 项目自动化构建依赖包所在目录；`dist`: 经过压缩合并等处理后待发布到生产的项目

##开发##

运行`gulp serve`可以进入开发模式。开发模式下，在源代码上的修改都能在浏览器中自动刷新。

```shell
It's time to use Gulp tasks:
- `$ gulp` to build an optimized version of your application in folder dist
- `$ gulp serve` to start BrowserSync server on your source files with live reload
- `$ gulp serve:dist` to start BrowserSync server on your optimized application without live reload
- `$ gulp test` to run your unit tests with Karma
- `$ gulp test:auto` to run your unit tests with Karma in watch mode
- `$ gulp protractor` to launch your e2e tests with Protractor
- `$ gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
```
