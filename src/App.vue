<template>
    <div id="app">
        <side-bar :author="author" :nav="nav"></side-bar>
        
        <hr>
        {{article}}
        <router-view/>
    </div>
</template>

<script>
import sideBar from '@/components/side-bar'
import _ from 'lodash/object'
const merge = require('merge-objects')

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
            },
            nav: [
                {
                    column: '前端',
                    categorys: [
                        {
                            category: 'Essential Links',
                            items: [
                                {title: 'Core Docs', url: ''},
                                {title: 'Forum', url: ''},
                                {title: 'Community', url: ''},
                                {title: 'Chat', url: ''},
                                {title: 'Twitter', url: ''}
                            ]
                        },
                        {
                            category: 'EEcosystem',
                            items: [
                                {title: 'vue-router', url: ''},
                                {title: 'vuex', url: ''},
                                {title: 'vue-loader', url: ''},
                                {title: 'awesome-vue', url: ''}
                            ]
                        }
                    ]
                },
                {
                    column: '后端',
                    categorys: [
                        {
                            category: 'Essential Links',
                            items: [
                                {title: 'Core Docs', url: ''},
                                {title: 'Forum', url: ''},
                                {title: 'Community', url: ''},
                                {title: 'Chat', url: ''},
                                {title: 'Twitter', url: ''}
                            ]
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        article() {
            console.log(this.$store.state.nav)
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