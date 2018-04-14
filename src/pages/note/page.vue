<template>
    <article class="content -note" v-if="content" v-html="content" />
    <Loading v-else />
</template>

<script>
import Masonry from 'masonry-layout'
import Loading from '@/components/loading'

let masonry

export default {
    path: '/notes/:pre/:title',
    name: 'notes',
    components: {
        Loading
    },
    computed: {
        content() {
            return this.$store.state['notes'].content
        }
    },
    mounted() {
        this.$store.dispatch('notes/getContent', this.$route)
    },
    watch: {
        content(){
            this.$nextTick(()=>{
                masonry = new Masonry( this.$el, {
                    columnWidth: 'dl',
                    percentPosition: true
                } )
            })
        }
    },
    destroyed() {
        masonry.destroy()
    }
}
</script>

<style src="./style.scss" lang="scss"></style>
