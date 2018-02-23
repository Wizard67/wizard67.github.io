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
    mounted() {
        const grid = document.getElementsByTagName('article')[0]
        const msnry = new Masonry( grid, {
            columnWidth: 20
        })
    },
}
</script>
