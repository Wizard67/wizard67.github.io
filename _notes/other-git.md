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

-   添加文件到暂存区
-   ```bash
    $ git add <file> | <dir> | .
    ```
-   如果需要在添加变化前进行确认，可使用 `-p` 参数
^

-   提交变动到仓库区
-   ```bash
    # 提交暂存区文件到仓库区, 省略 <file> 则全部提交
    $ git commit <file> -m <message>
    ```
-   使用 `--amend` 参数覆盖上一次提交信息
^

-   撤销操作
-   ```bash
    # 恢复暂存区的文件到工作区
    $ git checkout <file> | .
    
    # 撤销上次提交操作的文件到工作区
    $ git reset HEAD^
    ```
-   [关于 `HEAD^` 与 `HEAD~` 的关系](http://www.cnblogs.com/chjbbs/p/6418339.html)
^

-   分支新建与删除
-   ```bash
    # 删除指定分支
    $ git branch -d <branch>

    # 切换分支
    # 使用 -b 参数表示新建分支，并切换
    $ git checkout <branch>
    ```
^

-   合并命令
-   ```bash
    # 合并指定分支到当前分支
    $ git merge <branch>

    # 选择一个commit，合并进当前分支
    $ git cherry-pick <commit>

    # 变基合并指定分支到当前分支
    $ git rebase <branch>
    ```
^

-   标签
-   ```bash
    # 列出所有tag
    $ git tag

    # 新建一个标签， 如有 <commit> 信息则在指定提交中创建
    $ git tag <tag> <commit>

    # 提交所有tag
    $ git push <remote> --tags

    # 删除本地tag
    $ git tag -d <tag>

    # 删除远程tag
    $ git push origin :refs/tags/<tag>
    ```
-   push 命令不会主动推送 `tag`
^

-   查看信息
-   ```bash
    # 显示有变更的文件
    $ git status

    # 显示当前分支的版本历史
    $ git log

    # 显示工作区文件与当前分支最新提交信息间的差异
    $ git diff HEAD
    ```
^

-   文件处理
-   ```bash
    # 删除工作区文件，并将删除操作记录到暂存区
    $ git rm <file>

    # 停止文件追踪，文件仍然保留在工作区
    $ git rm --cached <file>

    # 文件重命名，并将操作记录到暂存区
    $ git mv <file-name> <file-renamed>
    ```
^

##  常用命令（远程版本库）

-   clone 命令
-   ```bash
    # 克隆远程版本库
    $ git clone <url>

    # 命名被克隆的远程主机，默认名为 origin
    $ git clone -o <shortname> <url>
    ```
-   `clone` 支持多种协议
^

-   remot 命令
-   ```bash
    # 关联远程版本库
    $ git remote add <shortname> <url>

    # 显示远程主机地址
    $ git remote -v

    # 删除关联的远程版本库
    $ git remote rm <shortname>
    ```
^

-   fetch 命令
-   ```bash
    # 获取远程版本库的更新信息，无 <branchname> 时获取所有分支
    $ git fetch <shortname> <branchname>
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
    # 获取远程版本库分支并与本地分支合并，如果与当前分支合并可省略 <branchname>
    # pull 时可选择 --rebase 模式
    $ git pull --rebase <shortname> <remotebranchname>:<branchname>
    ```
-   `pull` 命令实质上等效于先执行 `git fetch` 再执行 `git merge`
^

-   push 命令
-   ```bash
    # 将本地分支的更新推送到远程版本库，无 <remotebranchname> 时表示推送到存在追踪关系的远程分支
    # 若远程分支不存在则新建分支
    # 若省略 <branchname> 表示删除指定的远程分支
    $ git push <shortname> <branchname>:<remotebranchname>
    ```
-   如果需要本地分支去覆盖远程分支，可使用 `--force/-f` 参数
-   ```bash
    $ git push -f origin master
    ```
^
