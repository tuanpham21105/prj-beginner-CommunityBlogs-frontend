<template>
    <div class="user-card">
        <img src="https://via.placeholder.com/150" alt="User Avatar">
        <div class="user-info">
            <h3>Nguyễn Văn A</h3>
            <p>Ngày lập: 25/09/2022</p>
            <p class="vote-score">Vote Score: 1234</p>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
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
    }

    .user-card img {
        width: 70px;
        height: 70px;
        border-radius: 50%; /* avatar tròn */
        object-fit: cover;
        margin-right: 15px;
        border: 2px solid #333;
    }

    .user-info {
        flex: 1;
    }

    .user-info h3 {
        margin: 0;
        font-size: 20px;
        color: #333;
    }

    .user-info p {
        margin: 5px 0;
        font-size: 14px;
        color: #666;
    }

    .vote-score {
        font-weight: bold;
        color: #007bff;
        margin-top: 5px;
    }
</style>