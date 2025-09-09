<template>
    <div class="content">
        <div class="logo">
            <WebsiteLogo/>
        </div>

        <div class="intro">
            <h2>Giới thiệu về CommunityBlogs</h2>
            <p>CommunityBlogs là nền tảng dành cho những ai yêu thích viết lách và chia sẻ kiến thức. Tại đây, bạn có thể tạo blog cá nhân, kết nối với cộng đồng, học hỏi và trao đổi kinh nghiệm từ những người cùng đam mê.</p>
        </div>

        <div class="features">
            <div class="feature-card">
                <h3>Viết và chia sẻ</h3>
                <p>Tạo bài viết dễ dàng, chia sẻ kiến thức và câu chuyện của bạn với cộng đồng.</p>
            </div>
            <div class="feature-card">
                <h3>Kết nối cộng đồng</h3>
                <p>Giao lưu với những người cùng sở thích, tham gia thảo luận và học hỏi lẫn nhau.</p>
            </div>
            <div class="feature-card">
                <h3>Khám phá nội dung</h3>
                <p>Dễ dàng tìm kiếm và đọc các bài viết phong phú từ cộng đồng đa dạng.</p>
            </div>
        </div>
    </div>
</template>

<script setup> 
    import WebsiteLogo from '@/components/WebsiteLogo.vue';
</script>

<style scoped>
    .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .logo {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        height: auto;
        margin-bottom: 10px;
    }

    .intro {
        text-align: center;
    }

    .intro h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        color: #333;
    }

    .intro p {
        font-size: 1.1rem;
        color: #666;
        max-width: 800px;
        margin: auto;
    }

    .features {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        gap: 20px;
    }

    .feature-card {
        background-color: #f7f7f7;
        border: 1px solid #ddd;
        border-radius: 12px;
        padding: 20px;
        /* flex: 1 1 250px; */
        text-align: center;
        transition: transform 0.3s, box-shadow 0.3s;
        width: 100%;
    }

    .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }

    .feature-card h3 {
        margin-bottom: 10px;
        color: #333;
    }

    .feature-card p {
        color: #666;
    }

    @media (max-width: 768px) {
        .features {
            flex-direction: column;
            align-items: center;
        }
    }
</style>