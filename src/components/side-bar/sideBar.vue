<template>
    <aside>

        <div class="nav-wrap">
            <!-- author -->
            <div class="author">
                <!-- avatar -->
                <img class="author__avatar" alt="avatar" draggable="false"
                     :src="author.avatar" @click = 'toggleCategory' />
                <div class="author__links">
                <template v-for="(i, k) in author.links">
                    <!-- icon -->
                    <a class="icon" :key="k">
                        <i :class="`fa fa-${i.name}`" aria-hidden="true"></i>
                    </a>
                </template>
                </div>
            </div>

            <!-- nav -->
            <ul class="nav">
            <template v-for="(i, k) in nav">
                <li class="nav__item" :key="k" @click="getIndex(i.column)">
                    <a href="#">{{i.column}}</a>
                </li>
            </template>
            </ul>
        </div>

        <!-- category -->
        <transition name="slide-fade" appear>
        <transition-group name="list" tag="div" class="category" v-if="isCategory" appear>
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

    </aside>
</template>

<script>
export default {
    name: 'sideBar',
    props: [
        'author',
        'nav'
    ],
    data() {
        return {
            index: this.nav[0].column,
            isCategory: true
        }
    },
    methods: {
        toggleCategory() {
            this.isCategory = !this.isCategory
        },
        getIndex(index){
            this.isCategory = true
            this.index = index
        }
    },
    computed: {
        isTag() {
            return this.index === 'Note'?'nav__item -tag':'nav__item'
        },
        categorys() {
            return this.nav.filter(item => item.column === this.index)[0].categorys
        }
    }
}
</script>
