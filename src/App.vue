<template>
    <div id="app">
        <side-bar></side-bar>
        <router-view/>
    </div>
</template>

<script>
import sideBar from '@/components/side-bar'

export default {
    name: 'app',
    components: {
        sideBar
    }
}
</script>

<style src="@/assets/css/base.scss" lang="scss"></style>