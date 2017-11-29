<template>
    <main>
        <article class="type -note" v-html="content">
        </article>
    </main>
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
