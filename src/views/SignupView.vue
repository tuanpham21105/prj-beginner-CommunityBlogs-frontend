<template>
    <div class="signup-container">
        <div class="signup-left">
            <WebsiteLogo class="logo"/>
        </div>
        <div class="signup-right">
            <div class="signup-box">
                <h2>Sign Up</h2>
                <form>
                    <input type="email" placeholder="Email" required>
                    <input type="text" placeholder="Username" required>
                    <input type="password" placeholder="Password" required>
                    <input type="password" placeholder="Confirm Password" required>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? 
                    <a href="#" @click.left="Redirect('/auth/login')">Login</a>
                </p>
                <p>Only want to read! 
                    <a href="#" @click.left="Redirect('/')">Back to News</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import WebsiteLogo from '@/components/WebsiteLogo.vue';

    const router = useRouter();

    function Redirect(path) {
        router.push(path);
    }
</script>

<style scoped>
    .signup-container {
        display: flex;
        height: 100vh; /* full màn hình */

    }

    /* Bên trái: ảnh */
    .signup-left {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .signup-left .logo {
        display: block;
        background-color: #fff;
        padding: 0 4px;
        width: 20%;
        height: fit-content;
        cursor: pointer;
        border-radius: 8px;
    }

    /* Bên phải: form */
    .signup-right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        padding: 40px;
    }

    .signup-box {
        width: 100%;
        max-width: 350px;
    }

    .signup-box h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #333;
    }

    .signup-box input {
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
    }

    .signup-box button {
        width: 100%;
        padding: 12px;
        background: #333;
        color: #fff;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
    }

    .signup-box button:hover {
        background: #555;
    }

    .signup-box p {
        text-align: center;
        margin-top: 15px;
        font-size: 14px;
        color: #666;
    }

    .signup-box p a {
        color: #333;
        text-decoration: none;
        font-weight: bold;
    }
</style>