<template>
    <div class="contact-container">
        <img src="/images/handshake.png" alt="">

        <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>I'd like to hear from you! If you have any inquiries or just want to say hi, please use the contact form!</p>
            <p>Email: <a href="mailto:communityblogs@gmail.com">communityblogs@gmail.com</a></p>
        </div>

        <form class="contact-form" @submit="Submit">
            <div style="display:flex; gap:10px;">
                <input type="text" placeholder="First Name">
                <input type="text" placeholder="Last Name">
            </div>
            <input type="email" placeholder="Email *">
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
        <!-- <HorizontalBanner :uri="'https://static.vecteezy.com/system/resources/thumbnails/009/626/037/small_2x/silhouette-landscape-with-fog-forest-pine-trees-mountains-illustration-of-national-park-view-mist-black-and-white-good-for-wallpaper-background-banner-cover-poster-free-vector.jpg'"/> -->
    </div>
</template>

<script setup>
    import HorizontalBanner from '@/components/HorizontalBanner.vue';

    function Submit(e) {
        
    }
</script>

<style scoped>
    .contact-container {
        height: 100%;
        background-color: #fff;
        padding: 40px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    /* .contact-info {
        flex: 1 1 300px;
    } */

    .contact-container img {
        width: 20%;
        height: auto;
    }

    .contact-info h2 {
        font-size: 36px;
        margin-bottom: 15px;
    }

    .contact-info p {
        font-size: 20px;
        line-height: 1.6;
        color: #666;
    }

    .contact-info a {
        color: #333;
        text-decoration: none;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .contact-form input,
    .contact-form textarea {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
        width: 100%;
        box-sizing: border-box;
        resize: vertical;
    }

    .contact-form textarea {
        min-height: 120px;
    }

    .contact-form button {
        padding: 12px;
        border: none;
        border-radius: 4px;
        background-color: #333;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .contact-form button:hover {
        background-color: #666;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .contact-container {
            flex-direction: column;
        }
    }
</style>