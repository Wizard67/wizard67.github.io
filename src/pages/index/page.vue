<template>
    <main>
        <h1></h1>
        <img src="./../../assets/logo.png">
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
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
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
