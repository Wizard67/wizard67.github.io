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
                    collections: [
                        {
                            collection: 'Essential Links',
                            items: [
                                {title: 'Core Docs', url: ''},
                                {title: 'Forum', url: ''},
                                {title: 'Community', url: ''},
                                {title: 'Chat', url: ''},
                                {title: 'Twitter', url: ''}
                            ]
                        },
                        {
                            collection: 'EEcosystem',
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
                    collections: [
                        {
                            collection: 'Essential Links',
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
            return this.$store.state.nav
        }
    },
    created() {
        this.$store.dispatch('getNav')

        var a = {
            "column": "后端",
            "collections": [{
                "collection": "articles",
                "items": [{
                    "title": "test",
                    "date": "2017-11-16 15:52:55 +0800",
                    "url": "/articles/hello.html"
                }]
            }]
        }
        var b = {
            "column": "前端",
            "collections": [{
                "collection": "articles",
                "items": [{
                    "title": "test",
                    "date": "2017-11-16 15:52:55 +0800",
                    "url": "/articles/test.html"
                }]
            }]
        }
        var c = Object.assign({},a,b)
        console.log(c)
    },
    components: {
        sideBar
    }
}
</script>

<style src="@/assets/css/base.scss" lang="scss"></style>