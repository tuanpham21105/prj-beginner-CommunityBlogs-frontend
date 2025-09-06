<template>
    <button @click.left="RedirectToLink" class="btn-rounded"><h3><slot></slot></h3></button>
</template>

<script setup>
	import {ref} from 'vue';
    import router from '../router/index';
    
    const props = defineProps({
        redirectLink: {
            type: String,
            default: '/',
        },
    });

    function RedirectToLink() {
        router.push(redirectLink);
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