---
---

# CSS Layout

##  页面布局

### 水平居中 & 垂直居中

-   gird - [Grid Layout](https://drafts.csswg.org/css-grid-1/)
-   ```css
    .container {
      display:grid;
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(3, 1fr);
    }
    .item {
      grid-row: 2;
      grid-column: 2;
    }
    ```
-   [IE10 +](https://caniuse.com/#search=grid)
^

-   flex - [Flex Layout](https://drafts.csswg.org/css-flexbox-1/)
-   ```css
    .container {
      display: flex;
      justify-content: center;  /* 水平居中 */
      align-items: center;      /* 垂直居中 */
    }
    .item {
      /* ... */
    }
    ```
-   [IE10 +](https://caniuse.com/#search=flex)
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
-   [IE9 +](https://caniuse.com/#search=transform)
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
      /* ... */
    }
    ```
-   当要定义 `100%` 的容器宽度，须使用 `100vw` 代替，或者添加外层为 `display: table` 的容器
-   vw - [IE9 +](https://caniuse.com/#search=vw)
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
^

-   position absolute - [Positioned Layout](https://drafts.csswg.org/css-position-3/) & [原理](https://www.smashingmagazine.com/2013/08/absolute-horizontal-vertical-centering-css/#Explanation)
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
^

-   inline element - [Text](https://drafts.csswg.org/css-text-3/#text-align-property)
-   ```css
    .container {
      height: 100px;
      text-align: center;
    }
    .item {
      display: inline; /* inline | inline-* */
      line-height: 100px;
    }
    ```
^

-   ::before
-   ```css
    .container {
      position: relative;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      text-align: center;
    }
    .container::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
    .item {
      display: inline; /* inline | inline-* */
    }
    ```
^

