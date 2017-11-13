<template>
    <div id="app">
        <side-bar :author="author" :nav="nav"></side-bar>
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
            },
            nav: [
                {
                    index: '前端',
                    catalogue: [
                        {
                            collections: 'Essential Links',
                            item: [
                                {title: 'Core Docs', link: ''},
                                {title: 'Forum', link: ''},
                                {title: 'Community', link: ''},
                                {title: 'Chat', link: ''},
                                {title: 'Twitter', link: ''}
                            ]
                        },
                        {
                            collections: 'EEcosystem',
                            item: [
                                {title: 'vue-router', link: ''},
                                {title: 'vuex', link: ''},
                                {title: 'vue-loader', link: ''},
                                {title: 'awesome-vue', link: ''}
                            ]
                        }
                    ]
                },
                {
                    index: '后端',
                    catalogue: [
                        {
                            collections: 'Essential Links',
                            item: [
                                {title: 'Core Docs', link: ''},
                                {title: 'Forum', link: ''}
                            ]
                        },
                        {
                            collections: 'EEcosystem',
                            item: [
                                {title: 'vue-router', link: ''},
                                {title: 'vuex', link: ''}
                            ]
                        }
                    ]
                }
            ]
        }
    },
    components: {
        sideBar
    }
}
</script>

<style src="@/assets/css/base.scss" lang="scss"></style>