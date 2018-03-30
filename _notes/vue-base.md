---
---

## 安装

npm
: ```bash
    $ npm install vue      // vue@2.5.3
  ```
^

cdn
: ```html
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
  ```
^

vue 目录结构
: ```
  node_modules/vue/dist
    ├─ vue.js                   // UMD & Full
    ├─ vue.runtime.js           // UMD & Runtime-only
    ├─ vue.common.js            // CommonJS & Full
    ├─ vue.runtime.common.js    // CommonJS & Runtime-only
    ├─ vue.esm.js               // ES Module & Full
    ├─ vue.runtime.esm.js       // ES Module & Runtime-only
    ├─ ...
```
: Full | 包含模板编译器和运行时的版本
: Runtime-only | 仅包含运行时的版本
: 编译器 | 在客户端将模板字符串编译成 `render` 函数
: 运行时 | 创建实例、处理虚拟 DOM 的代码


## 基础语法

vue 目录结构
: ```html
  <div id="app-2">
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
  </div>
  ```