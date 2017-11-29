<template>
    <main>
        <article class="type -article" v-html="content">
        </article>
    </main>
</template>

<script>
import GetContent from '../mixin'

export default {
    path: '/article/:pre/:title',
    name: 'article',
    mixins: [ GetContent('article') ],
    data() {
        return {}
    }
}
</script>
