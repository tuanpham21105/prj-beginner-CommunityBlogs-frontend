<template>
    <Grid37Layout class="blog-view">
        <template #left>
            <div class="sidebar">
                <div class="details">
                    
                </div>

                <div class="sitemap">
                    
                </div>
            </div>
        </template>
    
        <template #right>
            <div class="alert">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <p>Alert Text</p>
            </div>
            <div class="post">
                <h1 class="title">Title</h1>
                <hr>
                <Markdown class="content" :source="markdownText" />
            </div>
        </template>
    </Grid37Layout>
</template>

<script setup>
    import {ref} from 'vue';
    import Markdown from 'vue3-markdown-it';
    import Grid37Layout from '@/layouts/Grid37Layout.vue';

    const markdownText = ref('Content');
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
        overflow-y: auto;
        scroll-snap-type: y mandatory;
        scroll-padding-bottom: 20px;
        scrollbar-gutter: stable;
    }

    @media (max-width: 960px) {
        .blog-view .sidebar {
            position: relative;
            height: fit-content;
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
</style>