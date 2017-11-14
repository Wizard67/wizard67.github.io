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
    computed: {
        article() {
            return this.$store.state.articles.article
        }
    },
    mounted(){
        this.$store.dispatch('articles/getArticle','test')
    },
    components: {

    }
}
</script>
