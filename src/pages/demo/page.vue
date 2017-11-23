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
            this.$store.dispatch('demos/getDemo', n.params.title)
        }
    },
    computed: {
        demo() {
            return this.$store.state.demos.demo
        }
    },
    mounted(){
        this.$store.dispatch('demos/getDemo', this.$route.params.title)
    },
    components: {

    }
}
</script>
