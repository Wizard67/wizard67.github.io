<template>
    <div id="app">
        <side-bar :author="author" :nav="nav"></side-bar>
        <hr>
        <router-view/>
    </div>
</template>

<script>
import sideBar from '@/components/side-bar'

export default {
    name: 'app',
    data() {
        return {
            author: {
                avatar: '/static/images/avatar.jpg',
                links: [
                    {
                        name: 'github',
                        link: ''
                    }
                ]
            }
        }
    },
    computed: {
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