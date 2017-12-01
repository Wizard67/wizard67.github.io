---
---

* TOC
{:toc}

---

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题

---

__加粗__ 、**加粗**、 _斜体_、 *斜体*、 以及 ~~删除~~

---

缩略语

*[缩略语]: 这是一个缩略语

---

* 无序列表
+ 无序列表

1. 有序列表
2. 有序列表
3. 有序列表

定义列表
: 定义
: 定义
: 定义

---

``` js
function() {
    return 'code block'
}
```

`code`

---

> 引用段落。

---

| 项目  | 单价  | 数量 |
| :--   | :--:  | --: |
| 计算机| \$1600| 15   |
| 手机  | \$120 | 340  |
| ===  | ===   | ===  |
| 合计 | \$1720 | 355 |

---

![标题](smile.png)

[标题](http://example.com)

<http://example.com>

![标题]

[标题][linkid]

[标题]: smile.png
[linkid]: http://example.com

---

$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$

---

这是正文部分。这是一段文本[^1]。这是另外一段文本[^2]。

[^1]: Some *crazy* footnote definition.
[^2]: test hello.

---

给一段文本（Block级元素）添加属性id='param-one'
{: #para-one}

> 给一段引用区域（block级）添加title='TBT'和id='myid'
{:title="TBT" #myid}

给行内[链接](demo.html){:rel='haha'}这个Span级元素添加rel='haha'属性；

---

Move to HTML please.
*[HTML]: Hyper Text Markup Language

---
