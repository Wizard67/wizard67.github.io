---
---

# Jekyll

> Jekyll 是一个简单的静态博客生成器。使用约定的目录结构和文档格式，通过 Markdown 以及 Liquid 转化成一个完整的静态网站，并且可以运行在 GitHub Page 上。

[jekyll](https://jekyllrb.com/)
[jekyll 中文](http://jekyllcn.com/)

-   #### 快速开始
-   ```bash
    ~ $ gem install jekyll bundler                  # 安装 jekyll 与 bundler
    ~ $ jekyll new my-awesome-site                  # 创建新的 jekyll 站点
    ~ $ cd my-awesome-sit                           # 进入项目目录
    ~/my-awesome-sit $ bundle install               # 安装 bundler 依赖
    ~/my-awesome-sit $ bundle exec jekyll serve     # 启动 jekyll 服务
    ```

## Kramdown

GitHub Page 中使用的 Markdown 解析器为 kramdown，兼容并且提供了新的 markdown 语法。

[kramdown](https://kramdown.gettalong.org/)

-   ```yaml
    # /_config.yml
    markdown: kramdown  # 指定 markdown 解释器
    ```
^

## Rouge

语法高亮解释器兼容 [pygments](http://pygments.org/) 。

[Rouge](https://github.com/jneen/rouge)

[Pygments CSS Themes Builder](https://jwarby.github.io/jekyll-pygments-themes/builder.html) : 高亮样式在线编辑

## Liquid

Liquid 为 Ruby 实现的模板语言，提供了丰富的 Tags 和 Filters 来帮助模板数据的快速填充。

[Liquid 中文](https://liquid.bootcss.com/basics/introduction/)

