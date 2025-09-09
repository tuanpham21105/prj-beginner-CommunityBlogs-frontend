<template>
    <a :href="url">
        <img class="banner" :src="uri" alt="Banner" >
    </a>
</template>

<script setup>
    const props = defineProps({
        uri: {
            type: String,
            required: true,
            default: 'https://placehold.jp/900x90.png',
        },
        url: {
            type: String,
            required: true,
            default: '',
        }
    });
</script>

<style lang="css" scoped>
    .banner {
        box-sizing: content-box;
        width: 100%;
        height: auto;
        margin: 10px 0;
    }
</style>

