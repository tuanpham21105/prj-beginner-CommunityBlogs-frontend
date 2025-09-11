<template>
    <div class="editor">
        <h1><i class="fa-solid fa-pen-to-square"></i> Blog Editor</h1>
        <p>Our Blog Editor allows you to create and edit posts with full Markdown (.md) support. Easily format text, add images, insert code blocks, and structure your content with headings and lists. With a live preview and intuitive controls, you can focus on writing while the editor handles the formatting.</p>
        
        <h2>Blog Content</h2>

        <div class="title-box">
            <label for=""><h3>Title<span style="color: red;">*</span></h3></label>
            <input type="text" placeholder="Title" v-model="title" required>
            <label for=""><h3>Display Image</h3></label>
            <input ref="displayImg" type="url" placeholder="Display Image URL(If this empty, there will be placeholder image)" @change="ChangeDisplayImg" v-model="displayImgUrl">
        </div>

        <img :src="displayImgUrl" @error="DisplayImgError" class="display-img">

        <label for=""><h3>Content</h3></label>
        <MdEditor language="en-US" v-model="content" :sanitize="sanitize"/>
        <div class="btn-bar">
            <Button>Save</Button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { MdEditor } from 'md-editor-v3';
    import 'md-editor-v3/lib/style.css';
    import Button from '@/components/Button.vue';
    import sanitizeHtml from 'sanitize-html';

    const title = ref('');

    const displayImg = ref(null);
    const displayImgUrl = ref('afdafaef');

    const content = ref('');
    
    const sanitize = (html) => {
        return sanitizeHtml(html);
    };

    function ChangeDisplayImg(e) {
        displayImgUrl.value = e.target.value;

        if (displayImgUrl.value == '') {
            DisplayImgError();
        }
    }
        
    function DisplayImgError() {
        displayImgUrl.value = 'https://picsum.photos/600/300';
    }
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

    .editor .title-box input {
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