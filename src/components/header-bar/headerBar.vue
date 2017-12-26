<template>
    <header :class="type" class="shadow-on">
        <div class="header-main">
            <img class="header-main__avater" alt="avatar" draggable="false"
                 :src="avatar"/>
            <div class="header-main__title">
                {{title}}
            </div>
            <div class="header-main__tool"></div>
        </div>
    </header>
</template>

<script>
import Headroom from './mixin'

export default {
    mixins: [ Headroom ],
    data() {
        return {
            title: '文章标题'
        }
    },
    computed: {
        avatar() {
            return this.$store.state.author.avatar
        }
    }
}
</script>
