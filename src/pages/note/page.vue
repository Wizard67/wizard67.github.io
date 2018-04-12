<template>
    <article class="content -note" v-if="content" v-html="content">
    </article>
    <!-- loding -->
    <div class="loading-wrap" v-else>
        <div></div>
        <div></div>
    </div>
</template>

<script>
import Masonry from 'masonry-layout'

const namespace = 'notes'

export default {
    path: `/${namespace}/:pre/:title`,
    name: namespace,
    data() {
        return {
            masonry: ''
        }
    },
    computed: {
        content() {
            return this.$store.state[namespace].content
        }
    },
    mounted() {
        this.$store.dispatch(`${namespace}/getContent`, this.$route)
    },
    watch: {
        content(){
            this.$nextTick(()=>{
                this.masonry = new Masonry( this.$el, {
                    columnWidth: 'dl',
                    percentPosition: true
                } )
            })
        },
        $route(n){
            this.$store.dispatch(`${namespace}/getContent`, n)
        }
    },
    destroyed() {
        this.masonry.destroy()
    }
}
</script>

<style src="./style.scss" lang="scss"></style>
