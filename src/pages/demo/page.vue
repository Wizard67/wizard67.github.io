<template>
    <article class="content -demo" v-html="content"></article>
</template>

<script>
import GetContent from '../mixin'

const namespace = 'demo'

export default {
    path: `/${namespace}/:pre/:title`,
    name: `${namespace}`,
    mixins: [ GetContent(`${namespace}`) ],
    data() {
        return {}
    }
}
</script>
