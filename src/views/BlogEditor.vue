<template>
    <div class="editor">
        <h1><i class="fa-solid fa-pen-to-square"></i> Blog Editor</h1>
        <p>Our Blog Editor allows you to create and edit posts with full Markdown (.md) support. Easily format text, add images, insert code blocks, and structure your content with headings and lists. With a live preview and intuitive controls, you can focus on writing while the editor handles the formatting.</p>
        
        <h2>Blog Details</h2>

        <div class="details-box">
            <label><h3>Which Blog?</h3></label>
            <select id="blog-select" @change="ChangeBlogOption">
                <option value="new">New Blog</option>
                <option :value="blog.id" v-for="blog in blogList">{{ blog.title }}</option>
            </select>
            <label for=""><h3>Title<span style="color: red;">*</span></h3></label>
            <input type="text" placeholder="Title" v-model="title" @change="ChangeDetails" required>
            <label for=""><h3>Display Image</h3></label>
            <input ref="displayImg" type="url" placeholder="Display Image URL(If this empty, there will be placeholder image)" @change="ChangeDisplayImg, ChangeDetails" v-model="displayImgUrl">
        </div>

        <img :src="displayImgUrl" @error="DisplayImgError" class="display-img">

        <label for=""><h3>Content</h3></label>
        <MdEditor language="en-US" v-model="content" :sanitize="sanitize" noUploadImg />
        <div class="btn-bar">
            <Button @on-click="SaveBlog">Save</Button>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref, watch } from 'vue';
    import { MdEditor } from 'md-editor-v3';
    import 'md-editor-v3/lib/style.css';
    import Button from '@/components/Button.vue';
    import sanitizeHtml from 'sanitize-html';
    import { GetBlogContent, GetBlogListDetailsByUsername, PostBlog, PutBlog } from '@/services/BlogServices.vue';
	import { useRoute } from 'vue-router';
    
    const route = useRoute();

    const blogList = ref([]);

    const blogId = ref('');

    const title = ref('');

    const displayImg = ref(null);
    const displayImgUrl = ref('');

    const content = ref('');
    
    const sanitize = (html) => {
        return sanitizeHtml(html, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
            allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            img: ['src', 'alt', 'title', 'width', 'height']
            }
        });
    };

    const saveStatus = ref(true);

    function ChangeDisplayImg(e) {
        displayImgUrl.value = e.target.value;

        if (displayImgUrl.value == '') {
            DisplayImgError();
        }
    }
        
    function DisplayImgError() {
        displayImgUrl.value = 'https://picsum.photos/600/300';
    }

    async function ChangeBlogOption(e) {
        saveStatus.value = true;

        SetBlogOption(e.target.value);
    }

    async function SetBlogOption(value) {
        if (value === 'new') {
            blogId.value = '';
            title.value = '';
            displayImgUrl.value = '';

            content.value = '#Content';
        }
        else {
            const blog = blogList.value.find(b => b.id === value);

            blogId.value = blog.id;
            title.value = blog.title;
            displayImgUrl.value = blog.imgUrl;

            const data = await GetBlogContent(blogId.value);
            if (data != false) {
                content.value = data;
            }
        }
    }

    function SaveBlog() {
        saveStatus.value = true;

        const blogDetails = 
        {
            id: blogId.value,
            imgUrl: displayImgUrl.value,
            title: title.value,
            username: '',
            viewsText: '',
            statusText: '',
            dateText: '',
            voteText: 0,
        }

        if (blogId.value === '') {
            PostBlog(blogDetails, content.value);
        } 
        else {
            PutBlog(blogDetails, content.value);
        }
    }

    watch(content, (newVal, oldVal) => {
        ChangeDetails();
    });

    function ChangeDetails() {
        saveStatus.value = false;
    }

    //On load
    onMounted(async () => {
        //Blog List
        const data = await GetBlogListDetailsByUsername(1, -1, '');
        if (data != false) {
            blogList.value = data.blogDetailsList;
        }

        SetBlogOption(route.params.id);
    });
</script>

<style scoped>
    .editor {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .editor h1,p,h2 {
        text-align: center;
        margin: 10px 0;
    }

    .editor .btn-bar {
        margin: 10px 0;
        align-self:flex-end;
        width: fit-content;
    }

    .editor .details-box input, select {
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
    }

    .editor .display-img {
        margin: 10px auto;
        width: 60%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
    }
</style>