---
---

# Gulp

> 基于文件流的构建系统

[gulp](https://gulpjs.com/)
[gulp 3.x 中文](https://www.gulpjs.com.cn/)
[gulp 4.0 api 中文](https://github.com/cssmagic/blog/issues/55)
[gulp plugins](https://gulpjs.com/plugins/)

## Usage

-   install
-   ```bash
    $ npm install gulp    # v3.9.1
    $ npm install gulpjs/gulp#v4.0.0-alpha.3    # v4.0.0-alpha.3
    $ npm install gulp@next    # v4.0.0
    ```
-   usage
-   ```js
    /* commonjs */
    const gulp = require('gulp')
    /* esm (需要 babel 支持) */
    import gulp from 'gulp'
    ```
^

-   with Babel
-   ```bash
    $ npm install @babel/core @babel/preset-env @babel/register --save-dev
    ```
-   ```json
    "babel": {
      "presets": [
        "@babel/preset-env"
      ]
    }
    ```
-   需要重命名 gulpfile.js 为 gulpfile.babel.js
^

## Base(常用)

-   gulp.src
-   读取所有匹配到的文件
-   ```js
    gulp.src(globs[, options])
    ```
^

-   gulp.dest
-   写入数据到文件
-   ```js
    gulp.dest(globs[, options])

    gulp.src('./src/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./dist'))
    ```
^

-   gulp.task
-   定义一个 gulp 任务
-   ```js
    gulp.task([name,] fn)
    ```
-   如果省略 name 参数，则使用 fn 的 name 属性或者 displayName 属性(可标记不可使用的函数名字符)
^

-   gulp.parallel
-   并行运行任务
-   ```js
    gulp.parallel(...tasks)

    gulp.task('default', gulp.parallel('one', 'two', function(done) {
        done()
    }))
    ```
-   tasks 参数: Array, String or Function
^

-   gulp.series
-   串行运行任务(类 gulp.parallel)
-   ```js
    gulp.series(...tasks)
    ```
^

-   gulp.watch
-   监控文件变化
-   ```js
    gulp.watch(globs[, opts], fn)
        .on(event, fn)
    ```
^

## BrowserSync

浏览器同步测试工具

[browsersync](http://www.browsersync.cn/)

-   usage
-   ```js
    const browserSync = require("browser-sync").create()
    const reload      = browserSync.reload
    ```
^

-   options
-   ```js
    /* 禁止自动开启浏览器 */
    server.init({
      open: false
    })
    ```
-   see: [Browsersync options](https://browsersync.io/docs/options)
^

**notice** 只能运行在页面中存在 `<body>` 的时候, [see](https://github.com/BrowserSync/browser-sync/issues/1065#issuecomment-254180616)

[with Gulp 4](https://github.com/gulpjs/gulp/blob/4.0/docs/recipes/minimal-browsersync-setup-with-gulp4.md)

# Notes

[gulp 资料大全：入门、插件、脚手架、包清单](https://juejin.im/entry/570c599a2e958a005c4fd307)

[gulp 源码解析（一）—— Stream详解](http://www.cnblogs.com/vajoy/p/6349817.html)

[gulp 源码解析（二）—— vinyl-fs](http://www.cnblogs.com/vajoy/p/6357476.html)

[gulp源码解析（三）—— 任务管理](http://www.cnblogs.com/vajoy/p/6359950.html)

[文件路径匹配模式 globs](http://yangbo5207.github.io/gulp/2016/08/10/new.html)

[gulp 有哪些功能是 webpack 不能替代的？](https://www.zhihu.com/question/45536395?sort=created)

[设计 gulp & webpack 构建系统 一](https://www.jianshu.com/p/9724c47b406c)

[设计 gulp & webpack 构建系统 二](https://www.jianshu.com/p/2cc6a22c9ecc)

---

[gulp 中的增量编译](http://www.cnblogs.com/zichi/p/6265208.html)

