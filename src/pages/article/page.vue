<template>
    <main>
        <article v-html="article">
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
            this.$store.dispatch('articles/getArticle', n.params.title)
        }
    },
    computed: {
        article() {
            return this.$store.state.articles.article
        }
    },
    mounted(){
        this.$store.dispatch('articles/getArticle', this.$route.params.title)
    },
    components: {

    }
}
</script>
