---
---
## 基础语法

类型
: ### 字符串

  ```liquid
  {%- raw -%}
  {% assign key = "title" %}
  {% endraw %}
  ```

: ### 数字

  ```liquid
  {%- raw -%}
  {% assign num = 666 %}
  {% endraw %}
  ```

: ### 布尔

  ```liquid
  {%- raw -%}
  {% assign isTrue = true %}
  {% endraw %}
  ```

: ### 数组

  ```liquid
  {%- raw -%}
  {% assign arr = "title, author, date" | split: ", " %}
  {{ arr[0] }}
  {% endraw %}
  ```

  > title
^

逻辑
: ### 基本操作符

  `==` |  相等
  `!=` |  不相等
  `>`  |  大于
  `<`  |  小于
  `>=` |  大于或等于
  `<=` |  小于或等于
  `or` |  逻辑或
  `and`|  逻辑与

: ### 包含

  ```liquid
  {%- raw -%}
  {% if arr contains 'title' %}
    This array contains with 'title'.
  {% endif %}
  {% if string contains 'hello' %}
    This string contains the word hello.
  {% endif %}
  {% endraw %}
  ```
^

输出

: ### 对象

  ```liquid
  {%- raw -%}
  {{ title }}
  {% endraw %}
  ```

  > titleName

: ### 过滤器

  ```liquid
  {%- raw -%}
  {{ "world!" | capitalize | prepend: "Hello " }}
  {% endraw %}
  ```

  > Hello World!

: ### 空白符处理

  ```liquid
  {%- raw -%}
  {% assign key = "title" %}
  {{ key }}
  {% endraw %}
  ```

  > <br>
  > title

: ```liquid
  {%- raw -%}
  {%- assign key = "title" -%}
  {{ key }}
  {% endraw %}
  ```

  > title
^

控制
: ### if

  ```liquid
  {%- raw -%}
  {% if key == 'title' %}
    the key is 'title'.
  {% elsif key == 'author' %}
    the key is 'author'.
  {% else %}
    the key is other.
  {% endif %}
  {% endraw %}
  ```

: ### unless

  ```liquid
  {%- raw -%}
  {% unless key == 'title' %}
    the key isn't 'title'.
  {% endunless %}
  {% endraw %}
  ```

: ### case/when

  ```liquid
  {%- raw -%}
  {% case key %}
    {% when 'title' %}
      the key is 'title'.
    {% when 'author' %}
      the key is 'author'.
    {% else %}
      the key is other.
  {% endcase %}
  {% endraw %}
  ```
^

迭代/循环
: ### for

  ```liquid
  {%- raw -%}
  {% for item in arr %}
    {{ item }}
  {% endfor %}
  {% endraw %}
  ```
  
  > title author date
^

## 过滤器

abs
: 返回一个数字的绝对值

  ```liquid
  {%- raw -%}
  {{ -17 | abs }}
  {{ "-19.86" | abs }}
  {% endraw %}
  ```

  > 17
  > 19.86

append
: 将两个字符串拼接起来并返回拼接之后的值

  ```liquid
  {%- raw -%}
  {{ "hello" | append: " world!" }}
  {% endraw %}
  ```

  > hello world!

capitalize
: 将字符串首字母转为大写

  ```liquid
  {%- raw -%}
  {{ "hello world!" | capitalize }}
  {% endraw %}
  ```
  > Hello world!

^