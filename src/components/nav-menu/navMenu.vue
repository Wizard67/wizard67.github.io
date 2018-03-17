<template>
    <nav class="nav-bar">
        <!-- menu -->
        <ul class="nav-bar__menu">
        <template v-for="(i, k) in nav">
            <li class="nav-bar__item" :key="k">
                <a :href="`#${i.column}`" @click="getIndex(i.column)">{{i.column}}</a>
            </li>
        </template>
        </ul>

        <!-- category -->
        <div class="nav-bar__category">
        <template v-for="(i, k) in categorys">
        <section :key="k + i.category">
            <p class="nav-bar__type">
                {{ i.category }}<br>
            </p>

            <template v-for="(i1, k1) in i.items">
                <router-link class="nav-bar__title"
                             :key="k1"
                             :to="{name: index.toLowerCase(), params: { pre: i['category'], title: i1['title'] }}"
                             :title="i1['title']">{{i1['title']}}
                </router-link>
            </template>

        </section>
        </template>
        </div>
    </nav>
</template>

<script>
import Hammer from 'hammerjs'
const hammer = new Hammer(document)

export default {
    name: 'navMenu',
    props: [
        'author',
        'nav'
    ],
    data() {
        return {
            index: this.nav[0].column
        }
    },
    methods: {
        getIndex(index){
            this.index = index
        },
        handleClickOutside(e) {
            if ( !this.$el.contains(e.target) ) {
                e.target.alt !== 'avatar' && this.$store.commit('toggleFocus')
            } else {
                e.target.nodeName !== 'A' && this.$store.commit('toggleFocus')
            }
        }
    },
    computed: {
        categorys() {
            return this.nav.filter(item => item.column === this.index)[0].categorys
        }
    },
    mounted() {
        hammer.on('tap', this.handleClickOutside)
    },
    destroyed() {
        hammer.off('tap', this.handleClickOutside)
    }
}
</script>

<style src="./style.scss" lang="scss"></style>
