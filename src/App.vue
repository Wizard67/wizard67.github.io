<template>
    <div id="app">
        <side-bar :author="author" :nav="nav"/>

        <router-view/>
    </div>
</template>

<script>
import sideBar from '@/components/side-bar'

export default {
    name: 'app',
    data() {
        return {}
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
        sideBar
    }
}
</script>

<style src="@/assets/css/base.scss" lang="scss"></style>