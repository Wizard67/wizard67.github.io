<template>
    <nav>
        <!-- nav -->
        <ul class="nav">
        <template v-for="(i, k) in nav">
            <li class="nav__item" :key="k" @click="getIndex(i.column)">
                {{i.column}}
            </li>
        </template>
        </ul>

        <!-- category -->
        <transition name="slide-fade" appear>
        <transition-group name="list" tag="div" class="category">
            <template v-for="(i, k) in categorys">
            <section class="category__item" :key="k + i.category">
                <p class="category__title">
                    {{ i.category }}
                </p>

                <ul class="nav">

                <template v-for="(i1, k1) in i.items">
                    <li :class="isTag" :key="k1">
                        <router-link :to="{name: index.toLowerCase(), params: { pre: i['category'], title: i1['title'] }}">{{i1['title']}}</router-link>
                    </li>
                </template>
                    
                </ul>
            </section>
            </template>

        </transition-group>
        </transition>
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
            this.isCategory = true
            this.index = index
        },
        handleClickOutside(e) {
            if ( !this.$el.contains(e.target) ) {
                this.$store.commit('toggleFocus')
            }
        }
    },
    computed: {
        isTag() {
            return this.index === 'Note'?'nav__item -tag':'nav__item'
        },
        categorys() {
            return this.nav.filter(item => item.column === this.index)[0].categorys
        }
    },
    mounted() {
        ['click','touchstart'].forEach( event =>
            document.addEventListener(event, this.handleClickOutside)
        )
    },
    destroyed() {
        ['click','touchstart'].forEach( event =>{
            document.removeEventListener(event, this.handleClickOutside)}
        )
    }
}
</script>
