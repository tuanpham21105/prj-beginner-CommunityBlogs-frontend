<template>
    <div class="grid">
        <component :is="childTag" v-for="d in childrenData" :input-object="d"/>
    </div>
</template>

<script setup>
	import { ref } from 'vue';

    const props = defineProps({
        childTag: {
            type: Object,
            required: true,
        },
        childrenData: {
            type: Array,
            required: false,
            default: [],
        }
    });
</script>

<style scoped>
    .grid {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 600px) {
        .grid {
        grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 960px) {
        .grid {
        grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (min-width: 1080px) {
        .grid {
        grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (min-width: 1640px) {
        .grid {
        grid-template-columns: repeat(5, 1fr);
        }
    }
</style>