<template>
    <div class="grid-3-7-container">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script setup>
	import {ref} from 'vue';
</script>

<style scoped>
    .grid-3-7-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        min-height: 100%;
        height: fit-content;
    }

    .grid-3-7-container > * {
        margin: 0 4px;
        padding: 0px 10px;
    }

    .left {
        display: block;
        width: 30%;
    }

    .right {
        display: block;
        width: 70%;
        border-left: 1px #666 solid;
    }

    @media (max-width: 960px) {
        .grid-3-7-container {
            width: 100%;
            display: block;
        }

        .left {
            width: 100%;
            margin: 10px 0;
        }
        
        .right {
            width: 100%;
            margin: 10px 0;
        }
    }
  </style>