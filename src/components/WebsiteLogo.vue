<template>
    <div class="website-logo" href="/">
        <img src="/images/logo.png" alt="">
    </div>
</template>

<script setup>
	import {ref} from 'vue';
</script>

<style>
    .website-logo {
        width: 5%;
        height: auto;
        display: flex;
        align-items: center;  
    }
    .website-logo img {
        height: inherit;
        width: 100%;
    }

    @media (max-width: 600px) {
        .website-logo {
            width: 15%;
        }
    }
</style>