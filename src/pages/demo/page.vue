<template>
    <main>
        <article class="type -demo" v-html="content">
        </article>
    </main>
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
