<template>
    <footer>
        <div class="footer-container">
            <div class="footer-col">
                <h3>Sitemap</h3>
                <ul>
                    <li><a href="#">New Blogs</a></li>
                    <li><a href="#">Your Blogs</a></li>
                    <li><a href="#">Write Blog</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">What is CommunityBlog</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h3>Socials </h3>
                <ul>
                    <li><img src="/images/socials_network_icons/gmail.png" alt="" class="icon">communityblogs@gmail.com</li>
                    <li><img src="/images/socials_network_icons/facebook.png" alt="" class="icon"><a href="#">Facebook</a></li>
                    <li><img src="/images/socials_network_icons/instagram.png" alt="" class="icon"><a href="#">Instagram</a></li>
                    <li><img src="/images/socials_network_icons/x.png" alt="" class="icon"><a href="#">X/Twitter</a></li>
                    <li><img src="/images/socials_network_icons/linkedin.png" alt="" class="icon"><a href="#">LinkedIn</a></li>
                </ul>
            </div>
            
            <div class="footer-col donate">
                <h3>Donate</h3>
                <img src="https://img.freepik.com/free-vector/scan-me-qr-code_78370-9714.jpg?semt=ais_incoming&w=740&q=80" alt="">
            </div>
        </div>

        <div class="copyright">
            © 2025 CommunityBlog. All rights reserved.
        </div>
    </footer>
</template>

<script setup>
	import {ref} from 'vue';
</script>

<style scoped>
    footer {
        background: #222;
        color: #fff;
        padding: 40px 20px;
    }

    .footer-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: 0 auto;
    }

    .footer-col {
        flex: 1;
        min-width: 200px;
        margin: 10px;
    }

    .footer-col h3 {
        border-bottom: 2px solid #444;
        padding-bottom: 10px;
        margin-bottom: 15px;
    }

    .footer-col ul {
        list-style: none;
        padding: 0;
    }

    .footer-col ul li {
        margin: 8px 0;
    }

    .footer-col ul li a {
        color: #ccc;
        text-decoration: none;
    }

    .footer-col ul li a:hover {
        color: #fff;
    }

    .copyright {
        text-align: center;
        margin-top: 20px;
        border-top: 2px solid #444;
        padding-top: 10px;
        font-size: 14px;
        color: #aaa;
    }

    .footer-col.donate img {
        width: 80%;
        height: auto;
    }

    .footer-col .icon {
        height: 16px;
        width: auto;
        padding: 0 5px;
    }
</style>