<template>
    <main>
        <article class="type -article" v-html="content">
        </article>
    </main>
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
