<template>
    <nav class="nav-bar">
        <!-- menu -->
        <ul class="nav-bar__menu">
        <template v-for="(i, k) in nav">
            <li class="nav-bar__item" :key="k" @click="getIndex(i.column)">
                {{i.column}}
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
                this.$store.commit('toggleFocus')
            } else {
                if ( e.target.nodeName !== 'LI' && e.target.nodeName !== 'A') {
                    this.$store.commit('toggleFocus')
                }
            }
        }
    },
    computed: {
        categorys() {
            return this.nav.filter(item => item.column === this.index)[0].categorys
        }
    },
    mounted() {
        ['click','touchend'].forEach( event =>
            document.addEventListener(event, this.handleClickOutside)
        )
    },
    destroyed() {
        ['click','touchend'].forEach( event =>{
            document.removeEventListener(event, this.handleClickOutside)}
        )
    }
}
</script>
