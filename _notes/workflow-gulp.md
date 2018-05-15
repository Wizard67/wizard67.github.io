---
---

# Gulp

> 基于文件流的构建系统

[Gulp](https://gulpjs.com/)
[Gulp 3.x 中文](https://www.gulpjs.com.cn/)
[Gulp 4.0 api 中文](https://github.com/cssmagic/blog/issues/55)

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

## Base

-   gulp.src
-   读取所有匹配到的文件
-   ```js
    gulp.src(globs[, options])
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

[Gulp 资料大全：入门、插件、脚手架、包清单](https://juejin.im/entry/570c599a2e958a005c4fd307)
