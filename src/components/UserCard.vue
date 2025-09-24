<template>
    <div class="user-card">
        <img src="https://placehold.jp/150x150.png" alt="User Avatar">
        <div class="user-info">
            <h1>{{ userData.username }}</h1>
            <h3><i class="fa-solid fa-calendar-days"></i> Ngày lập: <span class="info">{{ userData.joinDate }}</span></h3>
            <h3><i class="fa-solid fa-thumbs-up"></i> Vote: <span class="info">{{ userData.vote }}</span></h3>
            <Button><i class="fa-solid fa-flag"></i> Báo cáo</Button>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import Button from '@/components/Button.vue';

    const props = defineProps({
        userId: {
            type: String
        }
    });

    //Data
        //user
    const userData = ref({
        username: 'defaultUsername',
        joinDate: '1/1/1',
        vote: 0,
    });
</script>

<style scoped>
    .user-card {
        display: flex;
        align-items: center;
        padding: 15px 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background: #fff;
        font-family: Arial, sans-serif;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        font-size: medium;
    }

    .user-card img {
        width: 15%;
        height: auto;
        border-radius: 50%; /* avatar tròn */
        object-fit: cover;
        margin-right: 15px;
        border: 2px solid #333;
    }

    .user-info {
        flex: 1;
    }
    .user-info h1 {
        margin: 10px 0;
        color: #333;
    }

    .user-info h3 {
        margin: 5px 0;
        color: #666;
    }

    .user-info .info {
        color: #333;
    }
</style>