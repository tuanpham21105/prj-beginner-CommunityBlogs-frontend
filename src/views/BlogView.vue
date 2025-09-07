<template>
    <h1>Title</h1>
    <Markdown :source="markdownText" />
</template>

<script setup>
	import {ref} from 'vue';
    import Markdown from 'vue3-markdown-it';

    const markdownText = ref('# Hello World!');
</script>

<style scoped>

</style>