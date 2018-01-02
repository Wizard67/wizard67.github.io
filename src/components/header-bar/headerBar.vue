<template>
    <header>
        <div class="header-container">
            <img class="header-container__avater" alt="avatar" draggable="false" @click="toggleNav" :src="author.avatar"/>
            <div class="header-container__title">{{title}}</div>
            <nav-menu v-if="isShowNav" :author="author" :nav="nav"/>
        </div>
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
        title() {
            return this.$store.state.title
        },
        isShowNav() {
            return this.$store.state.isFocus
        }
    },
    methods: {
        toggleNav() {
            return this.isShowNav ? false : this.$store.commit('toggleFocus')
        }
    },
    components: {
        navMenu
    }
}
</script>
