---
---
## css

这是一个测试用的定义列表
: ```js
    /**
    * Does a thing
    */
    function helloWorld(param1, param2) {
        var something = 0;
        // Do something
        if (2.0 % 2 == something) {
            console.log('Hello, world!');
        } else {
            return null;
        }
    }
```
: [外链](//baidu.com)

^
这是一个测试用的定义列表
: ```js
    /**
    * Does a thing
    */
```
: [外链](//baidu.com)

^
这是一个测试用的定义列表
: 你好
: [外链](//baidu.com)

^
这是一个测试用的定义列表
: 列表项一
: 列表项二
: ```css
    @import extra.css;
    * {
        margin: 0;
    }
    ul li {
        list-style: linear;
        margin: 2em 20% 15px 0;
    }
    #content {
        -webkit-font-smoothing: antialiased;
        background: url(img/gradient.png);
        background: linear-gradient(to bottom, red, rgba(255,0,0,0))
    }
```
: [外链](//baidu.com)

^

这是一个测试用的定义列表
: 列表项一
: 列表项二
: [外链](//baidu.com)

^

这是一个测试用的定义列表
: 列表项一
: 列表项二
: [外链](//baidu.com)

^

这是一个测试用的定义列表
: 列表项一
: 列表项二
: [外链](//baidu.com)

## js


JS 属性
: 对象
: 属性一
: 属性二
: [参考](//nihao.cc)

## html
html
: 对象
: 属性一
: ``` html
    <div class="CJ_dialog" data-js-dialog>
        <div class="CJ_dialog__main" style="background: url(./img/d1.png); width: 688px; height: 608px;">
            <img class="CJ_detail" src="./img/d1-c.png" style="top: 70px; right: 30px; cursor: pointer;" data-js-dialogClose>
            <div class="CJ_detail" style="width: 500px;top: 160px; right: 70px;">
                <p class="CJ_dialog__title">恭喜您获得</p>
            </div>
            <div class="CJ_detail" style="width: 500px;top: 360px; right: 70px;">
                <p class="CJ_dialog__summary">5000元奖励金</p>
            </div>
            <div class="CJ_detail" style="width: 500px;top: 440px; right: 70px; text-align: center;">
                <a href="" class="CJ_button -dialog" style="width: 164px; height: 51px;background: url(./img/d1-btn.png);" data-js-dialogClose>确定</a>
            </div>
        </div>
    </div>
```
: [参考](//nihao.cc)

## vue
vue
: ``` vue
    <template>
        <article class="content -note" v-html="content"></article>
    </template>

    <script>
    import GetContent from '../mixin'

    const namespace = 'note'

    export default {
        path: `/${namespace}/:pre/:title`,
        name: `${namespace}`,
        mixins: [ GetContent(`${namespace}`) ],
        data() {
            return {}
        }
    }
    </script>
```