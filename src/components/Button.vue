<template>
    <button @click.left="OnClick" class="btn-rounded"><h3><slot></slot></h3></button>
</template>

<script setup>
	import {ref} from 'vue';
    
    const emits = defineEmits(['onClick']);

    const props = defineProps({
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
    .btn-rounded {
        height: inherit;
        width: auto;
        padding: 10px 20px;
        /* border: 2px solid #007bff;       */
        background-color: #fff;       
        color: #333;              
        border-radius: 8px;     
        text-align: center;
        display: flex;
        align-items: center;  
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0,0,0,0.15); 
        transition: 0.3s;
        margin: 0 2px;
    }

    .btn-rounded:hover {
        background-color:#333;
        color: #fff;               
    }
</style>