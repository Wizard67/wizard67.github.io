<template>
    <main>
        <article class="type -demo" v-html="demo">
        </article>
    </main>
</template>

<script>
export default {
    path: '/demo/:title',
    name: 'demo',
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
        demo() {
            return this.$store.state.demo.demo
        }
    },
    mounted(){
        this.$store.dispatch('getContent', this.$route)
    },
    components: {

    }
}
</script>
