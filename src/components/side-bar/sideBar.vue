<template>
    <aside class="sideBar">
        <div class="nav-wrap">
            <author :avatar="author.avatar" :links="author.links"></author>
    
            <nav-bar :nav="nav"></nav-bar>
        </div>

        <catalogue></catalogue>
    </aside>
</template>

<script>
import author from "./author.vue"
import navBar from "./navBar.vue"
import catalogue from "./catalogue.vue"

export default {
    name: 'sideBar',
    props: [
        'author',
        'nav'
    ],
    data() {
        return {
        }
    },
    components: {
        author,
        navBar,
        catalogue
    }
}
</script>

<style lang="scss">
@import "~@/assets/css/utils";

.sideBar {
    @include _flex( start );

    width: 180px;
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

        &__link {
            // @include _flex( between );
        }
    }

}
</style>
