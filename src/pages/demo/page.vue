<template>
    <main>
        <article class="type -demo" v-html="content">
        </article>
    </main>
</template>

<script>
import GetContent from '../mixin'

export default {
    path: '/demo/:title',
    name: 'demo',
    mixins: [ GetContent('demo') ],
    data() {
        return {}
    }
}
</script>
