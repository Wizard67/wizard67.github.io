<template>
    <header class="header-container">
        <img class="header-container__avater" alt="avatar" draggable="false" @click="click" :src="author.avatar"/>
        <slot></slot>
    </header>
</template>

<script>
import Headroom from './Headroom'

export default {
    name: 'headerBar',
    mixins: [ Headroom ],
    props: [ 'author' ],
    methods: {
        click() {
            this.$emit('avatarClick')
        }
    }
}
</script>

<style src="./style.scss" lang="scss"></style>
