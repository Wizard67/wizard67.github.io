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

## 常用命令（本地版本库）

-   初始化 Git 仓库
-   ```bash
    $ git init
    ```
^

##  常用命令（远程版本库）

-   clone 命令
-   ```bash
    $ git clone <url>
    # 克隆远程版本库

    $ git clone -o <shortname> <url>
    # 命名被克隆的远程主机，默认名为 origin
    ```
-   `clone` 支持多种协议
^

-   remot 命令
-   ```bash
    $ git remote add <shortname> <url>
    # 关联远程版本库

    $ git remote -v
    # 显示远程主机地址

    $ git remote rm <shortname>
    # 删除关联的远程版本库
    ```
^

-   fetch 命令
-   ```bash
    $ git fetch <shortname> <branchname>
    # 获取远程版本库的更新信息，无 <branchname> 时获取所有分支
    ```
-   获取到的更新需要使用 `<shortname>/<branchname>` 读取，eg `origin/master`
-   合并到本地时，可以新建一个分支，或在本地分支上 `merge` 或 `rebase`
-   ```bash
    $ git checkout -b newBranch origin/master
    $ git merge origin/master
    $ git rebase origin/master
    ```
^

-   pull 命令
-   ```bash
    $ git pull --rebase <shortname> <remotebranchname>:<branchname>
    # 获取远程版本库分支并与本地分支合并，如果与当前分支合并可省略 <branchname>
    # pull 时可选择 --rebase 模式
    ```
-   `pull` 命令实质上等效于先执行 `git fetch` 再执行 `git merge`
^

-   push 命令
-   ```bash
    $ git push <shortname> <branchname>:<remotebranchname>
    # 将本地分支的更新推送到远程版本库，无 <remotebranchname> 时表示推送到存在追踪关系的远程分支
    # 若远程分支不存在则新建分支
    # 若省略 <branchname> 表示删除指定的远程分支
    ```
-   如果需要本地分支去覆盖远程分支，可使用 `--force/-f` 参数
    ```bash
    $ git push -f origin master
    ```
-   `git push` 不会推送 `tag`，除非指名 `--tags` 选项
-   ```bash
    $ git push origin --tags
    ```
^
