<template>
    <main>
        <article class="type -note" v-html="content">
        </article>
    </main>
</template>

<script>
import GetContent from '../mixin'

export default {
    path: '/note/:pre/:title',
    name: 'note',
    mixins: [ GetContent('note') ],
    data() {
        return {}
    }
}
</script>
