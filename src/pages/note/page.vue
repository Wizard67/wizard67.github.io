<template>
    <article class="content -note" v-html="content"></article>
</template>

<script>
import GetContent from '../mixin'
import Masonry from 'masonry-layout'

const namespace = 'note'

export default {
    path: `/${namespace}/:pre/:title`,
    name: `${namespace}`,
    mixins: [ GetContent(`${namespace}`) ],
    data() {
        return {}
    },
    computed: {
        isLoad() {
            return this.$store.state[namespace].isLoad
        }
    },
    watch: {
        isLoad(n) {
            if (n) {
                this.$nextTick(()=>{
                    new Masonry( this.$el, {
                        columnWidth: 'dl',
                        percentPosition: true
                    })
                })
            }
        }
    }
}
</script>

<style src="./style.scss" lang="scss"></style>
