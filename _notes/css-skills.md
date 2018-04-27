---
---

# CSS Skills

##  页面布局

### 水平垂直居中

-   flex
-   ```css
    .container {
      display: flex;
      justify-content: center;
      align-item: center;
    }
    .item {
      /* ... */
    }
    ```
^

-   transform
-   ```css
    .container {
      position: relative;
    }
    .item {
      display: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    ```
^

-   table
-   ```css
    .container {
      display: table-cell;
      text-align: center;
      verical-align: middle;
    }
    .item {
      display: inline-block;
    }
    ```
^

-   margin
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

-   position absolute
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

      width: 100px;
      height: 100px;
      margin: auto;
    }
    ```
^
