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
                    <h2 class="category__title">
                        {{ i.category }}
                    </h2>

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

<style lang="scss">
@import "~@/assets/css/utils";

aside {
    @include _flex( start );

    width: 600px;
    padding: 40px 10px;

    .author {

        &__avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            box-shadow: 0 4px 5px 0 rgba(0,0,0,.14),
                        0 1px 10px 0 rgba(0,0,0,.12),
                        0 2px 4px -1px rgba(0,0,0,.3);
        }
    }

}
</style>
