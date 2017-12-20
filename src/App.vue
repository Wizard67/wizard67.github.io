<template>
    <div id="app">
        <side-bar :author="author" :nav="nav"/>
        <header-bar/>
        <router-view/>
    </div>
</template>

<script>
import headerBar from '@/components/header-bar'
import sideBar from '@/components/side-bar'

export default {
    name: 'app',
    data() {
        return {}
    },
    methods: {

    },
    computed: {
        author() {
            return this.$store.state.author
        },
        nav() {
            return this.$store.state.nav
        }
    },
    created() {
        this.$store.dispatch('getNav')
    },
    components: {
        headerBar,
        sideBar
    }
}
</script>

<style src="@/assets/css/base.scss" lang="scss"></style>
