---
---

# CSS Layout

> 除了 `flex-box` 和 `grid-system` 是 CSS 专门用以处理复杂布局的模块方案外，其余的均是 [「历史遗留」](https://www.zhihu.com/question/19583370) 的解决方案

## 水平居中 & 垂直居中

-   flex - [Flex Layout](https://drafts.csswg.org/css-flexbox-1/)
-   ```css
    .container {
      display: flex;
      justify-content: center;  /* 水平居中 */
      align-items: center;      /* 垂直居中 */
    }
    .item {
    }
    ```
-   [DEMO](https://codepen.io/wizard67/pen/bMWqWv) # [IE10 +](https://caniuse.com/#search=flex)
^

-   transform - [Positioned Layout](https://drafts.csswg.org/css-position-3/) & [Transforms](https://drafts.csswg.org/css-transforms-1/)
-   ```css
    .container {
      position: relative;
    }
    .item {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    ```
-   [DEMO](https://codepen.io/wizard67/pen/JvNWpG) # [IE9 +](https://caniuse.com/#search=transform)
^

-   table - [Table](https://drafts.csswg.org/css-tables-3/)
-   ```css
    .container {
      display: table-cell;
      width: 100vw;
      text-align: center;
      vertical-align: middle;
    }
    .item {
      display: inline-block;  /* inline-* */
    }
    ```
-   当要定义 `100%` 的容器宽度，须使用 `100vw` 代替，或者添加外层为 `display: table` 的容器
-   [DEMO](https://codepen.io/wizard67/pen/rvmyQN) # [vw: IE9 +](https://caniuse.com/#search=vw)
^

-   margin - [Basic Box](https://drafts.csswg.org/css-box-3/#margin-props)
-   ```css
    .container {
      position: relative;
    }
    .item {
      position: absolute;
      top: 50%;
      left: 50%;

      width: 100px;
      height: 100px;
      margin: -50px 0 0 -50px;  /* -(width|height)/2 */
    }
    ```
-   [DEMO](https://codepen.io/wizard67/pen/MGmmKw)
^

-   position - [Positioned Layout](https://drafts.csswg.org/css-position-3/) & [原理](https://www.smashingmagazine.com/2013/08/absolute-horizontal-vertical-centering-css/#Explanation)
-   ```css
    .container {
      position: relative;
    }
    .item {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;

      width: 100px;
      height: 100px;
    }
    ```
-   [DEMO](https://codepen.io/wizard67/pen/KRmmMP)
^

-   inline element - [Text](https://drafts.csswg.org/css-text-3/#text-align-property)
-   ```css
    .container {
      height: 100px;
      text-align: center;
    }
    .item {
      display: inline;
      line-height: 100px; /* 值为父级容器高度 */
    }
    ```
-   适用于文本
-   [DEMO](https://codepen.io/wizard67/pen/JvNNKN)
^

-   ::before - [原理: 添加偽元素](http://www.oxxostudio.tw/articles/201408/css-vertical-align.html)
-   ```css
    .container {
      position: relative;
      text-align: center;
    }
    .container::before {
      content: "";
      display: inline-block;
      width: 0;
      height: 100%;
      vertical-align: middle;
    }
    .item {
      display: inline-block; /* inline-* */
      vertical-align: middle;
    }
    ```
-   [DEMO](https://codepen.io/wizard67/pen/yjbbgN)
^

## 两端对齐

-   flex - [Flex Layout](https://drafts.csswg.org/css-flexbox-1/)
-   ```css
    .container {
      display: flex;
      justify-content: space-between;
    }
    .item {
    }
    ```
-   [DEMO](https://codepen.io/wizard67/pen/XqRaWO) # [IE10 +](https://caniuse.com/#search=flex)
^

-   inline element - [原理](https://www.zhihu.com/question/19895400)
-   ```css
    .container{
      text-align: justify;
      text-justify: distribute-all-lines;  /* ie6-8 */
      text-align-last: justify;            /* ie9 */
      -moz-text-align-last: justify;       /* ff */
      -webkit-text-align-last: justify;    /* chrome 20+ */
    }
    /* hack webkit */
    @media screen and (-webkit-min-device-pixel-ratio:0) {
      .container {
        font-size: 0; 
      }
      .container::after {
        content: "";
        display: inline-block;
        width: 100%;
      }
    }
    .item{
      display: inline-block; /* inline-* */
      font-size: 16px;       /* reset */
    }
    ```
-   很不推荐，`text-align` 等相关属性会被继承下去。
-   [DEMO](https://codepen.io/wizard67/pen/YLVxXq)
^

-   grid - [Grid Layout](https://drafts.csswg.org/css-grid-1/)
-   ```css
    .container {
      display: grid;
      justify-content: space-between;
      grid-auto-flow: column;
    }
    .item {
    }
    ```
-   [DEMO](https://codepen.io/wizard67/pen/NMjepy) # [IE10 +](https://caniuse.com/#search=flex)
^
