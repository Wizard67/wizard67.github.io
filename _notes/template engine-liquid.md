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

数值处理

: ### plus

  两个数相加

  ```liquid
  {%- raw -%}
  {{ 4 | plus: 2 }}
  {{ 183.357 | plus: 12 }}
  {% endraw %}
  ```
  > 6   
  > 195.357

: ### minus

  从一个数中减去另一个数

  ```liquid
  {%- raw -%}
  {{ 4 | minus: 2 }}
  {{ 183.357 | minus: 12 }}
  {% endraw %}
  ```
  > 2  
  > 171.357

: ### times

  将一个数乘以另一个数

  ```liquid
  {%- raw -%}
  {{ 3 | times: 2 }}
  {{ 183.357 | times: 12 }}
  {% endraw %}
  ```
  > 6  
  > 2200.284

: ### divided_by

  将两个数相除，结果向下取整

  ```liquid
  {%- raw -%}
  {{ 16 | divided_by: 4 }}
  {{ 5 | divided_by: 3 }}
  {% endraw %}
  ```
  > 4   
  > 1

: ### modulo

  返回除法运算的余数

  ```liquid
  {%- raw -%}
  {{ 3 | modulo: 2 }}
  {{ 183.357 | modulo: 12 }}
  {% endraw %}
  ```
  > 1  
  > 3.357

: ### abs

  返回一个数字的绝对值

  ```liquid
  {%- raw -%}
  {{ -17 | abs }}
  {{ "-19.86" | abs }}
  {% endraw %}
  ```

  > 17   
  > 19.86

: ### floor

  舍弃数值小数部分

  ```liquid
  {%- raw -%}
  {{ 1.2 | floor }}
  {{ "3.5" | floor }}
  {% endraw %}
  ```
  > 1   
  > 3

: ### ceil

  将一个浮点数向上取整并返回一个最接近的整数

  ```liquid
  {%- raw -%}
  {{ 1.2 | ceil }}
  {{ 183.357 | ceil }}
  {{ "3.5" | ceil }}
  {% endraw %}
  ```
  > 2  
  > 184  
  > 4

: ### round

  将浮点数舍入到最近的整数或指定精度

  ```liquid
  {%- raw -%}
  {{ 1.2 | round }}
  {{ 183.357 | round: 2 }}
  {% endraw %}
  ```
  > 1  
  > 183.36
^




字符串处理

: ### capitalize

  将字符串首字母转为大写

  ```liquid
  {%- raw -%}
  {{ "hello world!" | capitalize }}
  {% endraw %}
  ```
  > Hello world!

: ### downcase

  将字符串换为小写形式

  ```liquid
  {%- raw -%}
  {{ "HEllo WORld" | downcase }}
  {% endraw %}
  ```
  > hello world

: ### escape

  对字符串字符进行转译

  ```liquid
  {%- raw -%}
  {{ "hello world!!" | escape }}
  {% endraw %}
  ```
  > hello%20world!!

: ### escape_once

  转义字符串并且不修改已经转义过的实体

  ```liquid
  {%- raw -%}
  {{ "hello%20world !!" | escape }}
  {% endraw %}
  ```
  > hello%20world%20!!

: ### prepend

  在一个字符串前面附加另一个字符串

  ```liquid
  {%- raw -%}
  {{ "world!" | prepend: "hello " }}
  {% endraw %}
  ```
  > hello world!
  
: ### append

  将两个字符串拼接起来并返回拼接之后的值

  ```liquid
  {%- raw -%}
  {{ "hello" | append: " world!" }}
  {% endraw %}
  ```

  > hello world!

: ### lstrip

  删除字符串左侧的所有空白符

  ```liquid
  {%- raw -%}
  {{ "          hello world!     " | lstrip }}
  {% endraw %}
  ```
  > hello world!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

: ### rstrip

  删除字符串右侧的所有空白字符

  ```liquid
  {%- raw -%}
  {{ "      hello world!     " | lstrip }}
  {% endraw %}
  ```
  > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hello world!

: ### strip

  删除字符串左右两侧的所有空白符号

  ```liquid
  {%- raw -%}
  {{ "      hello world!     " | lstrip }}
  {% endraw %}
  ```
  > hello world!

: ### strip_newlines

  从字符串中删除所有换行字符

  ```liquid
  {%- raw -%}
  {% capture string %}
  hello
  world!
  {% endcapture %}
  {{ string | newline_to_br }}
  {% endraw %}
  ```
  > <br/\>  
  > <br/\>  
  > hello 
  > world!

: ### strip_html

  从字符串中删除所有 HTML 标签

  ```liquid
  {%- raw -%}
  {{ "<h1>hello world!</h1>" | strip_html }}
  {% endraw %}
  ```
  > hello world!

: ### truncate

  将字符串截短为指定的字符个数

  ```liquid
  {%- raw -%}
  {{ "hello world!" | truncate: 8 }}
  {{ "hello world!" | truncate: 8, "" }}
  {{ "hello world!" | truncate: 8, "~~~" }}
  {% endraw %}
  ```
  > hello...  
  > hello wo  
  > hello~~~

: ### truncatewords

  将字符串截短为指定的单词个数

  ```liquid
  {%- raw -%}
  {{ "hello world!" | truncatewords: 1 }}
  {{ "hello world!" | truncatewords: 1, "" }}
  {{ "hello world!" | truncatewords: 1, "~~~" }}
  {% endraw %}
  ```
  > hello...  
  > hello  
  > hello~~~

: ### newline_to_br

  将所有换行符(\n) 替换为 HTML 的 (\<br\>) 标签

  ```liquid
  {%- raw -%}
  {% capture string %}
  hello
  world!
  {% endcapture %}
  {{ string | newline_to_br }}
  {% endraw %}
  ```
  > \<br /\>  
  > hello\<br /\>  
  > world\<br /\>

: ### remove

  从一个字符串中删除所有出现的另一个子字符串

  ```liquid
  {%- raw -%}
  {{ "hello hello world!" | remove: "hello " }}
  {% endraw %}
  ```
  > world!

: ### remove_first

  从一个字符串中仅仅删除第一次出现的另一个子字符串

  ```liquid
  {%- raw -%}
  {{ "hello hello world!" | remove: "hello " }}
  {% endraw %}
  ```
  > hello world!

: ### replace

  将参数中给出的第一个参数全部替换为第二个参数

  ```liquid
  {%- raw -%}
  {{ "hello hello world!" | replace: "hello ", "hey " }}
  {% endraw %}
  ```
  > hey hey world!

: ### replace_first

  从一个字符串中删除所有出现的另一个子字符串

  ```liquid
  {%- raw -%}
  {{ "hello hello world!" | replace_first: "hello ", "hey " }}
  {% endraw %}
  ```
  > hey hello world!

: ### slice

  返回字符串指定位置的字符

  ```liquid
  {%- raw -%}
  {{ "hello world!" | slice: 0 }}
  {{ "hello world!" | slice: 0,5 }}
  {% endraw %}
  ```
  > h  
  > hello

: ### size

  返回字符串中所包含的字符数

  ```liquid
  {%- raw -%}
  {{ "hello world!" | size }}
  {% endraw %}
  ```
  > 12
^




数组处理

: ### first

  返回数组的第一项

  ```liquid
  {%- raw -%}
  {{ arr.first }}
  {% endraw %}
  ```
  > title

: ### last

  返回数组中的最后一项

  ```liquid
  {%- raw -%}
  {{ arr.last }}
  {% endraw %}
  ```
  > date

: ### concat

  拼接多个数组

  ```liquid
  {%- raw -%}
  {% assign arr = arr1 | concat: arr2 %}
  {% for item in arr %}
  - {{ item }}
  {% endfor %}
  {% endraw %}
  ```
  > item1  
  > item1  
  > item2

: ### join

  拼接数组的项，并将参数作为分隔符

  ```liquid
  {%- raw -%}
  {% assign arr = "title, author, date" | split: ", " %}
  {{ beatles | join: " & " }}
  {% endraw %}
  ```
  > title & author & date

: ### reverse

  将数组中的所有项的顺序反转

  ```liquid
  {%- raw -%}
  {{ arr | reverse | join: ", " }}
  {% endraw %}
  ```
  > date, author, title

: ### sort

  对数组项进行排序，区分大小写

  ```liquid
  {%- raw -%}
  {{ arr | sort }}
  {% endraw %}
  ```
  > Date author title

: ### sort_natural

  对数组进行排序，并且大小写无关

  ```liquid
  {%- raw -%}
  {{ arr | sort }}
  {% endraw %}
  ```
  > author Date title

: ### uniq

  删除数组中的所有重复项

  ```liquid
  {%- raw -%}
  {% assign arr = "title, title, author, date, date" | split: ", " %}
  {{ arr | uniq | join: ", " }}
  {% endraw %}
  ```
  > title, author, date

: ### compact

  删除数组中的所有 nil 值

  ```liquid
  {%- raw -%}
  {% assign arr1 = arr | map: 'key' %}
  {% for item in arr1 %}
    {{ item }}
  {% endfor %}
  {% endraw %}
  ```
  > title   
  > &nbsp;  
  > author

  ```liquid
  {%- raw -%}
  {% assign arr1 = arr | map: 'key' | compact %}
  {% for item in arr1 %}
    {{ item }}
  {% endfor %}
  {% endraw %}
  ```
  > title     
  > author
^




其他

: ### date

  格式化时间戳，[格式语法](http://strftime.net/)

  ```liquid
  {%- raw -%}
  {{ date | date: "%a, %b %d, %y" }}
  {% endraw %}
  ```
  > Fri, Jul 17, 15

: ### default

  当值不存在时，为其指定一个默认值

  ```liquid
  {%- raw -%}
  {{ price | default: 2.99 }}
  {% endraw %}
  ```
  > 2.99

: ### map

  从对象（object）中提取指定名称的属性的值，并用这些值构建一个数组

  ```liquid
  {%- raw -%}
  {% assign arr = obj | map: "key" %}
  {% endraw %}
  ```

: ### split

  根据分隔符将字符串分解为数组

  ```liquid
  {%- raw -%}
  {% assign arr = "title, author, date" | split: ", " %}
  {% endraw %}
  ```
^

