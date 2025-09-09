<template>
    <div @click.left="OnClick" class="tab">
        <h3>{{ textContent }}</h3>
    </div>
</template>

<script setup>
	import {onMounted, ref} from 'vue';

    const emits = defineEmits(['onClick']);

    const props = defineProps({
        textContent: {
            type: String,
            default: '',
        },
        redirectPath: {
            type: String,
            default: '/',
        },
    });

    function OnClick() {
        emits('onClick', props.redirectPath);
    }
</script>

<style scoped>
    .tab {
        height: inherit;
        width: fit-content;
        padding: 5px 20px;
        text-align: center;
        display: flex;
        align-items: center;  
        transition: 0.3s;
        color: #333;
    }

    .tab:hover {
        background-color:#333;
        color: #fff;
        cursor: pointer;
    }
</style>