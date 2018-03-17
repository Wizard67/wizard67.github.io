<template>
    <div id="app">
        <header-bar/>
        <main :class="{'-focus': isFocus}">
            <router-view/>
        </main>
    </div>
</template>

<script>
import headerBar from '@/components/header-bar'

export default {
    name: 'app',
    computed: {
        isFocus() {
            return this.$store.state.isFocus
        }
    },
    components: {
        headerBar
    }
}
</script>

<style src="./style.scss" lang="scss"></style>
