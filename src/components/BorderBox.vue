<template>
    <div class="box">
        <div class="box-title">{{title}}</div>
        <slot></slot>
    </div>
</template>

<script setup>
	import {ref} from 'vue';

    const props = defineProps({
        title: String,
    });
</script>

<style scoped>
    .box {
        position: relative;
        border: 2px solid #333;
        padding: 20px;
        padding-top: 25px;
        width: 100%;
        height: fit-content;
        border-radius: 20px;
    }

    .box-title {
        position: absolute;
        top: -8px;
        left: 4%;
        background: white;
        padding: 0 6px;
        font-weight: bold;
        font-size:small;
    }

    @media (min-width: 960px) {
        .box-title {
            position: absolute;
            top: -15px;
            left: 3%;
            background: white;
            padding: 0 6px;
            font-weight: bold;
            font-size: x-large;
        }
    }
</style>