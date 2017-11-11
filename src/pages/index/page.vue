<template>
    <main>
        <HelloWorld></HelloWorld>
    </main>
</template>

<script>
import HelloWorld from '@/components/hello-world'
export default {
    path: '/',
    name: 'index',
    data() {
        return {
            
        }
    },
    computed: {
        data() {
            return this.$store.state.index.data
        }
    },
    components: {
        HelloWorld
    }
}
</script>
