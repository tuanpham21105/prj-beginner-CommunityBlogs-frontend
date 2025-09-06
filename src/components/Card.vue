<template>
    <div class="card" v-on:click.left="RedirectToLink">
        <img v-bind:src="imgUrl" alt="Image">
        <div class="title">{{ title }}</div>
        <div class="details">
            <div class="views">
                <i class="fa-solid fa-eye"></i>
                <p>1</p>
            </div>
            <div class="status">
                <i class="fa-solid fa-pen"></i>
                <p>Update</p>
            </div>
            <div class="date">
                <i class="fa-solid fa-calendar-days"></i>
                <p>25/09/2025</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import router from '../router/index';

    const props = defineProps({
        inputObject: {
            type: Object,
            required: true,
        }
    });

    const redirectLink = ref('/');
    const imgUrl = ref('https://picsum.photos/600');
    const title = ref('');

    onMounted(() => {
        if (props.inputObject.hasOwnProperty('redirectLink')) redirectLink.value = props.inputObject.redirectLink === null ? '/' : props.inputObject.redirectLink;
        if (props.inputObject.hasOwnProperty('imgUrl')) imgUrl.value = props.inputObject.imgUrl === null ? 'https://picsum.photos/600' : props.inputObject.imgUrl;
        if (props.inputObject.hasOwnProperty('title')) title.value = props.inputObject.title === null ? 'No title' : props.inputObject.title;
    });

    function RedirectToLink() {
        router.push(redirectLink);
    }
</script>

<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 12px;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        padding-bottom: 5px;
    }

    /* Hover effect */
    .card:hover {
        transform: translateY(-10px) scale(1.03);
        box-shadow: 0 12px 20px rgba(0,0,0,0.25);
        z-index: 10;
    }

    /* Ảnh */
    .card img {
        width: 100%;
        height: 200px; /* chiều cao cố định */
        object-fit: cover; /* vừa và cắt nếu cần */
        display: block;
    }

    /* Title */
    .card .title {
        padding: 16px;
        font-size: 1.1rem;
        font-weight: bold;
        text-align: left;
        flex-shrink: 0; /* không bị co lại */
        display: -webkit-box;
        -webkit-line-clamp: 3;   /* số dòng tối đa */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .card .details {
        display: flex;
        flex-direction: row;
        padding: 0 16px;
        justify-content: space-between;
    }
    
    .card .details div {
        display: flex;
        flex-direction: row;
    }

    .card .details div i {
        padding: 0 4px;
    }
</style>