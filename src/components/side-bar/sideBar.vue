<template>
    <aside>
        <div class="nav-wrap">
            
            <!-- author -->
            <div class="author">
                <!-- avatar -->
                <img class="author__avatar" alt="avatar" draggable="false"
                     :src="author.avatar" />
                <div class="author__links">

                    <!-- icon -->
                    <template v-for="(i, k) in author.links">
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
        <div class="category">
            
            <template v-for="(i, k) in categorys">
                <section class="category__item" :key="k">
                    <p class="category__title">
                        {{ i.category }}
                    </p>

                    <ul class="nav -category">
                        <template v-for="(i1, k1) in i.items">
                            <li class="nav__item" :key="k1">
                                <router-link :to="{name:index.toLowerCase(), params: { title: i1['title'] }}">{{i1['title']}}</router-link>
                            </li>
                        </template>
                    </ul>

                </section>
            </template>

        </div>
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
            index: this.nav[0].column
        }
    },
    methods: {
        getIndex(index){
            this.index = index
        }
    },
    computed: {
        categorys() {
            return this.nav.filter(item => item.column === this.index)[0].categorys
        }
    }
}
</script>

