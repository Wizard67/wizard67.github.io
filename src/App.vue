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
            const data = [
            {
                "column": "后端",
                "collections": [{
                    "collection": "articles",
                    "items": [{
                        "title": "test",
                        "date": "2017-11-16 22:14:08 +0800",
                        "url": "/articles/hello.html"
                    }]
                }]
            },

            {
                "column": "后端",
                "collections": [{
                    "collection": "articles",
                    "items": [{
                        "title": "test",
                        "date": "2017-11-16 22:14:08 +0800",
                        "url": "/articles/test.html"
                    }]
                }]
            }]

            const d = function(o1, o2) {
                console.log('ok')
                const o = Array.isArray(o1)? o1: [o1];
                const r = o.filter((item)=>{
                    return item.column === o2.column
                })

                console.log(r)
            }

            d(data[0],data[1])

            return
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