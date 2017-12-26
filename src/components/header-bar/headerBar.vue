<template>
    <header :class="type" class="shadow-on">
        <div class="header-main">
            <img class="header-main__avater" alt="avatar" draggable="false"
                 @click="toggleCategory" :src="author.avatar"/>
            <nav-menu :author="author" :nav="nav" v-if="isCategory"/>
            <div class="header-main__title">
                {{title}}
            </div>
            <div class="header-main__tool"></div>
        </div>
    </header>
</template>

<script>
import Headroom from './mixin'
import navMenu from '@/components/nav-menu'

export default {
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
        isCategory() {
            return this.$store.state.isFocus
        }
    },
    methods: {
        toggleCategory() {
            this.$store.commit('toggleFocus')
        }
    },
    components: {
        navMenu
    }
}
</script>
