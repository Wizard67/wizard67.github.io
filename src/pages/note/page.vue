<template>
    <article class="content -note" v-html="content"></article>
</template>

<script>
import GetContent from '../mixin'

const namespace = 'note'

export default {
    path: `/${namespace}/:pre/:title`,
    name: `${namespace}`,
    mixins: [ GetContent(`${namespace}`) ],
    data() {
        return {}
    }
}
</script>
