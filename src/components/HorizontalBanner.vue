<template>
    <a :href="Url">
        <img class="banner" :src="Uri" alt="Banner" >
    </a>
</template>

<script setup>
    const props = defineProps({
        Uri: {
            type: String,
            required: true,
            default: 'https://placehold.jp/900x90.png',
        },
        Url: {
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
    }
</style>

