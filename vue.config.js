const express = require('express')

module.exports = {
  // 配置 webpack-dev-server 的静态资源目录为 '_site'
  devServer: {
    before: app => {
        app.use('/', express.static('./_site'))
    }
  }
}
