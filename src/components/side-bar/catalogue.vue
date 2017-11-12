<template>
    <div class="catalogue">
        <h1></h1>
        <h2>Essential Links</h2>
        <ul>
            <li><a href="">Core Docs</a></li>
            <li><a href="">Forum</a></li>
            <li><a href="">Community Chat</a></li>
            <li><a href="">Twitter</a></li>
            <br>
            <li><a href="">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="">vue-router</a></li>
            <li><a href="">vuex</a></li>
            <li><a href="">vue-loader</a></li>
            <li><a href="">awesome-vue</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'catalogue',
    data () {
        return {
        }
    }
}
</script>

<style scoped>
.catalogue {
    padding: 0 10px;
}
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>

