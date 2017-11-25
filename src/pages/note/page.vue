<template>
    <main>
        <article class="type -note" v-html="note">
        </article>
    </main>
</template>

<script>
export default {
    path: '/note/:title',
    name: 'note',
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
        note() {
            return this.$store.state.note.note
        }
    },
    mounted(){
        this.$store.dispatch('getContent', this.$route)
    },
    components: {

    }
}
</script>
