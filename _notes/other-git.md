---
---

# Git

> 开源的分布式版本控制系统，可以有效、高速地进行项目版本管理

[Git 官网](https://git-scm.com/)

[Pro Git 中文](https://git-scm.com/book/zh/v2)

## 配置

-   获取 SSH key
-   ```bash
    $ ssh-keygen
    $ cd ~/.ssh
    ```
^

-   用户名 & 邮箱
-   ```bash
    $ git config --global user.name "userName"
    $ git config --global user.email mail@example.com
    ```
-   Github 根据 Git 提交信息的用户名与邮箱[统计活跃](https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/)
^

## 常用命令

-   初始化 Git 仓库
-   ```bash
    $ git init
    ```
^

-   克隆远程仓库
-   ```bash
    $ git clone <url>
    # git clone git://user@server:path/to/repo.git
    ```
^

-   关联远程仓库
-   ```bash
    $ git remote add <shortname> <url>
    # git remote add origin git://user@server:path/to/repo.git
    ```
^
