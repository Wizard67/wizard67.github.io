<template>
    <ul class="catalogueList">
        <template v-for="(item, index) in nav">
            <li class="catalogueList__item" :key="index" @click="getIndex(item.column)">
                {{item.column}}
            </li>
        </template>
    </ul>
</template>

<script>
export default {
    name: 'navBar',
    props: [
        'nav'
    ],
    methods: {
        getIndex(index){
            this.$emit('getIndex', index)
        },
    }
}
</script>