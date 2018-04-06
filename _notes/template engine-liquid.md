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
  >  title
: ```liquid
  {%- raw -%}
  {%- assign key = "title" -%}
  {{ key }}
  {% endraw %}
  ```
  >  title
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