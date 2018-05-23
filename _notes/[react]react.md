---
---

# React

> Facebook 开源的专注于页面 UI 渲染的 Javascript 库，拥有强大的生态圈

[React](https://reactjs.org/) [React 中文](https://doc.react-china.org/) [React.js 小书](http://huziketang.mangojuice.top/books/react/)

## Base

### usage

-   ```bash
    # use create-react-app
    $ npm install -g create-react-app
    $ create-react-app my-app
    $ cd my-app
    $ npm start
    ```
^

### syntax

-   Fragments
-   ```JS
    render() {
        return [
            "Some text.",
            <h2 key="heading-1">A heading</h2>,
            "More text.",
            <h2 key="heading-2">Another heading</h2>,
            "Even more text."
        ]
    }
    ```
-   使用数组时，子元素需要用逗号隔离并且设置唯一 `key`；字符串必须在引号内
-   ```js
    render() {
        const Fragment = React.Fragment;
        return (
            <Fragment>
                <ChildA />
                <ChildB />
                <ChildC />
            </Fragment>
        )
    }
    ```
-   `Fragment` 目前唯一接受 `key` 属性 
-   ```js
    render() {
        return (
            <>
            Some text.
            <h2>A heading</h2>
            More text.
            <h2>Another heading</h2>
            Even more text.
            </>
        )
    }
    ```
-   Create React App 暂时不支持部分 Fragments 语法（<></>）
-   <></> 语法不接受属性


## Notes

[谈一谈创建React Component的几种方式](https://segmentfault.com/a/1190000008402834)

[为什么在 React 的 Render 中使用箭头函数和 bind 会造成问题](https://zhuanlan.zhihu.com/p/29266705)

## Tips

[vscode 中在 jsx 里使用 Emmet](https://github.com/Microsoft/vscode/issues/4962)

-   ```json
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    }
    ```
^
