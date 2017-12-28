<template>
    <header :class="type">
        <div class="header-main">
            <img class="header-main__avater" alt="avatar" draggable="false"
                 @click="toggleNav" :src="author.avatar"/>
            <div class="header-main__title">{{title}}</div>
            <div class="header-main__tool"></div>
            <nav-menu v-if="isShowNav" :author="author" :nav="nav"/>
        </div>
    </header>
</template>

<script>
import Headroom from './mixin'
import navMenu from '@/components/nav-menu'

export default {
    name: 'headerBar',
    mixins: [ Headroom ],
    data() {
        return {
            title: '文章标题'
        }
    },
    created() {
        this.$store.dispatch('getNav')
    },
    computed: {
        author() {
            return this.$store.state.author
        },
        nav() {
            return this.$store.state.nav
        },
        isShowNav() {
            return this.$store.state.isFocus
        }
    },
    methods: {
        toggleNav() {
            return this.isShowNav ? false : this.$store.commit('toggleFocus')
        },
        addEvet(){
            console.log('nihao')
        }
    },
    components: {
        navMenu
    }
}
</script>
