<template>
    <div class="categorys">
        <template v-for="(item, index) in categorys">
            <section :key="index">
                <h2>{{ item.category }}</h2>
                <template v-for="(i, k) in item.items">
                    <li :key="k">
                        <a href="#">{{i['title']}}</a>
                    </li>
                </template>
            </section>
        </template>
    </div>
</template>

<script>
export default {
    name: 'categorys',
    props: [
        'categorys'
    ],
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

