<template>
    <div class="author">
        <img class="author__avatar" :src="avatar" alt="avatar" draggable="false">
        <div class="author__link">
            <template v-for="(item, index) in links">
                <a :key="index">
                    <i :class="`fa fa-${item.name}`" aria-hidden="true"></i>
                </a>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'author',
    props: [ 
        'avatar',
        'links'
    ],
    methods: {

    }
}
</script>
