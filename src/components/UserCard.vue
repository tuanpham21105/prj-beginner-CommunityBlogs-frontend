<template>
    <div class="user-card">
        <img :src="userDetails.avatarUrl" alt="User Avatar">
        <div class="user-info">
            <h1>{{ userDetails.username }}</h1>
            <h3><i class="fa-solid fa-calendar-days"></i> Ngày lập: <span class="info">{{ userDetails.joinDate }}</span></h3>
            <h3><i class="fa-solid fa-thumbs-up"></i> Vote: <span class="info">{{ userDetails.vote }}</span></h3>
            <Button><i class="fa-solid fa-flag"></i> Báo cáo</Button>
        </div>
    </div>
</template>

<script setup>
    import {onMounted, ref} from 'vue';
    import Button from '@/components/Button.vue';
    import { GetUserDetails } from '@/services/UserServices.vue';

    const props = defineProps({
        username: {
            type: String
        }
    });

    //Data
        //user
    const userDetails = ref({
        username: 'defaultUsername',
        avatarUrl: 'https://placehold.jp/150x150.png',
        joinDate: '1/1/1',
        vote: 0,
    });

    onMounted(async () => {
        const data = await GetUserDetails(props.username);
        if (data != false) {
            userDetails.value = data.userDetails;
        }
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