<template>
     <article class="content -article" v-html="content"></article>
</template>

<script>
import GetContent from '../mixin'

const namespace = 'article'

export default {
    path: `/${namespace}/:pre/:title`,
    name: `${namespace}`,
    mixins: [ GetContent(`${namespace}`) ],
    data() {
        return {}
    }
}
</script>

<style src="./style.scss" lang="scss"></style>
