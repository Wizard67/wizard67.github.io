<template>
    <header>
        <div class="header-container">
            <img class="header-container__avater" alt="avatar" draggable="false" @click="toggleNav" :src="author.avatar"/>
        </div>
        <nav-menu v-if="isShowNav && nav.length" :author="author" :nav="nav"/>
    </header>
</template>

<script>
import Headroom from './headroom'
import navMenu from '@/components/nav-menu'

export default {
    name: 'headerBar',
    mixins: [ Headroom ],
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
            this.$store.commit('toggleFocus')
        }
    },
    components: {
        navMenu
    }
}
</script>

<style src="./style.scss" lang="scss"></style>
