<template>
    <main>
        <article class="type -article" v-html="article">
        </article>
    </main>
</template>

<script>
export default {
    path: '/article/:title',
    name: 'article',
    data() {
        return {
        }
    },
    watch: {
        $route(n){
            this.$store.dispatch('getContent', n)
        }
    },
    computed: {
        article() {
            return this.$store.state.article.article
        }
    },
    mounted(){
        this.$store.dispatch('getContent', this.$route)
    },
    components: {

    }
}
</script>
