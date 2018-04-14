<template>
    <div id="app">
        <header-bar :author = 'author'
            @avatarClick = 'toggleFocus' >

            <nav-menu v-if="isFocus"
                :nav="nav"
                @outsideClick = 'toggleFocus' >
                <p slot="empty">暂无内容</p>
            </nav-menu>

        </header-bar>

        <main :class="{'-focus': isFocus}">
            <router-view/>
        </main>
    </div>
</template>

<script>
import headerBar from '@/components/header-bar'
import navMenu from '@/components/nav-menu'

export default {
    name: 'app',
    computed: {
        author() {
            return this.$store.state.author
        },
        nav() {
            return this.$store.state.nav
        },
        isFocus() {
            return this.$store.state.isFocus
        },
    },
    methods: {
        toggleFocus() {
            this.$store.commit('toggleFocus')
        },
    },
    created() {
        this.$store.dispatch('getNav')
    },
    watch: {
        $route(n){
            this.$store.dispatch(`${this.$route.name}/getContent`, n)
        }
    },
    components: {
        headerBar,
        navMenu,
    }
}
</script>

<style src="./style.scss" lang="scss"></style>
