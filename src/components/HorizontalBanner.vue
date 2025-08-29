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
            default: 'https://www.adspeed.com/placeholder-728x90-Test.gif',
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

