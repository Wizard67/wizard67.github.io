<template>
    <main>
        <article v-html="note">
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
            this.$store.dispatch('notes/getNote', n.params.title)
        }
    },
    computed: {
        note() {
            return this.$store.state.notes.note
        }
    },
    mounted(){
        this.$store.dispatch('notes/getNote', this.$route.params.title)
    },
    components: {

    }
}
</script>
