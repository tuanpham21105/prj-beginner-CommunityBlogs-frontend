<template>
    <Grid37Layout class="blog-view">
        <template #left>
            <div class="sidebar">
                
                <div class="details">
                    <div class="user-box">
                        <img :src="authorData.avatarImgUrl" alt="User Avatar">
                        <a href="" @click.left="Redirect(`/user/${authorData.username}`)" class="username">{{ authorData.username }}</a>
                    </div>
                    <div v-if="loginState">
                        <Button style="width: 100%;" :redirectPath="`/editor/${blogId}`" @onClick="Redirect"><i class="fa-solid fa-pen-to-square"></i> Edit</Button>
                        <Button style="width: 100%;"><i class="fa-solid fa-trash"></i> Delete</Button>
                    </div>
                    <div class="details-box box">
                        <div class="views">
                            <i class="fa-solid fa-eye"></i>
                            <p>{{ detailsData.viewsText }}</p>
                        </div>
                        <div class="status">
                            <i class="fa-solid fa-pen"></i>
                            <p>{{ detailsData.statusText }}</p>
                        </div>
                        <div class="date">
                            <i class="fa-solid fa-calendar-days"></i>
                            <p>{{ detailsData.dateText }}</p>
                        </div>
                    </div>
                    <div class="vote-box box">
                        <div class="vote-number">
                            <i class="fa-solid fa-thumbs-up"></i>
                            <p>{{ voteText }}</p>
                        </div>
                        <div class="vote acitve">
                            <i class="fa-solid fa-circle-up"></i>
                            <p>Up vote</p>
                        </div>
                        <div class="vote">
                            <i class="fa-solid fa-circle-down"></i>
                            <p>Down vote</p>
                        </div>
                    </div>
                </div>

                <div class="contents">
                    <h3 class="title" @click.left="ToggleContents">Contents</h3>
                    <div v-show="enableContents" class="list">
                        <h4 v-for="item in contentsListData" :class="`header-${item.level}`" @click="JumpToContent(item.text)">{{ item.text }}</h4>
                    </div>
                </div>
            </div>
        </template>
    
        <template #right>
            <div class="alert">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <p>Alert Text</p>
            </div>
            <div class="post">
                <h1 class="title">{{ postData.title }}</h1>
                <img class="display-img" :src="postData.displayImgUrl" alt="">
                <hr>
                <!-- <Markdown class="content" :source="postData.content"/> -->
                 
                <MdPreview language="en-US" class="content" :modelValue="postData.content" @onGetCatalog="GetTableOfContents"/>
            </div>
        </template>
    </Grid37Layout>
</template>

<script setup>
    import {onMounted, ref} from 'vue';
    import Markdown from 'vue3-markdown-it';
    import Grid37Layout from '@/layouts/Grid37Layout.vue';
    import HorizontalBanner from '@/components/HorizontalBanner.vue';
    import { MdPreview } from 'md-editor-v3';
    import 'md-editor-v3/lib/preview.css';
    import Button from '@/components/Button.vue';
	import { useRouter, useRoute } from 'vue-router';
    import { GetBlogContent, GetBlogDetails } from '@/services/BlogServices.vue';

    const router = useRouter();
    const route = useRoute();

    const loginState = ref(false);

    //Input Data
        //Blog Data
    const blogId = ref(route.params.id);
        //Author Data
    const authorData = ref({
        avatarImgUrl: "https://placehold.jp/45x45.png",
        username: "",
    });
        //Details Data
    const detailsData = ref({
        viewsText: "",
        statusText: "",
        dateText: ""
    });
        //Vote Data
    const voteText = ref("");
        //Contents List Data
    const contentsListData = ref([
        {
            text: "Default",
            level: 1,
        },
        {
            text: "Default",
            level: 2,
        },
        {
            text: "Default",
            level: 3,
        },
    ]);
        //Post Data
    const postData = ref({
        title: "",
        displayImgUrl: "",
        content: "",
    });
    
    //Toggle Contents
    const enableContents = ref(false);

    //On load
    onMounted(async () => {
        //Details
        const blogDetailsData = await GetBlogDetails(blogId.value);
        if (blogDetailsData != false) {
            authorData.value.username = blogDetailsData.blogDetails.username;
            detailsData.value.viewsText = blogDetailsData.blogDetails.viewsText;
            detailsData.value.statusText = blogDetailsData.blogDetails.statusText;
            detailsData.value.dateText = blogDetailsData.blogDetails.dateText;
            voteText.value = blogDetailsData.blogDetails.voteText;
            postData.value.title = blogDetailsData.blogDetails.title;
            postData.value.displayImgUrl = blogDetailsData.blogDetails.imgUrl;
        }

        //Post Content
        const blogContentData = await GetBlogContent(blogId.value);
        if (blogContentData != false) {
            postData.value.content = blogContentData;
        }
    });

    function EnableContents(value) {
        enable.value = value;
    }

    function ToggleContents() {
        enableContents.value = !enableContents.value;
    }

    function Redirect(path) {
        router.push(path);
    }

    function GetTableOfContents(list) {
        contentsListData.value = list;
    }

    function JumpToContent(content) {
        const el = document.getElementById(content);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }
</script>

<style scoped>
    .blog-view .sidebar {
        position: sticky;
        top: 0;
        max-height: 90vh;
        height: fit-content;
        border: 1px solid #666;
        border-radius: 16px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.15); 
        padding: 10px;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        scroll-padding-bottom: 20px;
        scrollbar-gutter: stable;
    }

    .blog-view .sidebar::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 960px) {
        .blog-view .sidebar {
            position: relative;
            height: fit-content;
            overflow-y: visible;
        }
    }

    .blog-view .post {
        min-height: 100%;
        height: fit-content;
    }

    .blog-view .alert {
        width: 100%;
        display: flex;
        flex-direction: row;
        background-color: lightgoldenrodyellow;
        padding: 10px;
        margin: 10px 0;
        border-radius: 8px;
    }

    .blog-view .alert > * {
        margin: 0 2px;
        color: rgb(213, 213, 76);
    }

    .blog-view .post .title, .blog-view .post .content { 
        margin: 10px 0;
    }

    .blog-view .details > * {
        margin-bottom: 5px;
    }

    .blog-view .details .user-box {
        display: flex;            
        align-items: center;  
        width: 100%;              
        max-width: 100%;     
        box-sizing: border-box;
    }

    .blog-view .details .user-box img {
        width: 45px;             
        height: 45px;
        border-radius: 50%;     
        object-fit: cover;
        flex-shrink: 0;          
    }

    .blog-view .details .user-box .username {
        margin-left: 12px;
        font-size: 15px;
        font-weight: 600;
        color: #333;
        white-space: nowrap;      
        overflow: hidden;          
        text-overflow: ellipsis;   
        flex: 1;                  
        text-decoration: none;
        color: #555;
    }

    .blog-view .details .box {
        display: flex;
        justify-content: space-between; 
        align-items: center;
        border: 1px solid #ddd;
        padding: 10px 5px;
        border-radius: 6px;
        background: #f9f9f9;
        font-family: sans-serif;
    }

    .blog-view .details .details-box > div, .blog-view .details .vote-box > div {
        display: flex;
        align-items: center;
        gap: 6px; 
        color: #333;
        font-size: 14px;
        padding: 2px;
        transition: 0.3s;
    }

    .blog-view .details .vote-box .vote {
        cursor: pointer;
        border-radius: 8px;
    }

    .blog-view .details .vote-box .vote:hover {
        background-color: #ddd;
        color: #333;
    }
    
    .blog-view .details .vote-box .active {
        background-color: #333;
        color: #fff;
    }

    .blog-view .sidebar .contents {
        border: 1px solid #ddd;
        border-radius: 6px;
    }

    .blog-view .sidebar .contents .title {
        text-align: center;
        padding: 10px 0;
    }

    .blog-view .sidebar .contents .title:hover {
        background-color: #ddd;
        border-radius: 6px;
        cursor: pointer;
    }

    @media (max-width: 1300px) and (min-width: 960px) {
        .blog-view .details .details-box, .blog-view .details .vote-box {
            display: block;
        }
    }

    .blog-view .sidebar .contents .list > h4 {
        border-left: 2px solid #666;
        padding: 4px;
        cursor: pointer;
    }

    .blog-view .sidebar .contents .list > h4:hover {
        background-color: #ddd;
    }

    .blog-view .sidebar .contents .list .header-2 {
        margin-left: 20px;
    }

    .blog-view .sidebar .contents .list .header-3 {
        margin-left: 40px;
    }

    .blog-view .sidebar .contents .list .active {
        background-color: #bbb;
    }

    .blog-view .post img {
        margin: 5px;
        width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
    }
</style>