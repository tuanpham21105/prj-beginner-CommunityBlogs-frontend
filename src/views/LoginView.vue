<template>
    <div class="login-container">
        <div class="login-left">
            <WebsiteLogo class="logo"/>
        </div>
        <div class="login-right">
            <div class="login-box">
                <h2>Login</h2>
                <div >
                    <input type="text" placeholder="Username" v-model="username" required>
                    <input type="password" placeholder="Password" v-model="password" required>
                    <p class="alert-msg" v-show="showAlert">Wrong username or password!</p>
                    <button type="button" @click="OnClickLogin">Login</button>
                </div>
                <p>Don't have an account? <a href="#" @click.left="Redirect('/auth/signup')">Sign Up</a></p>
                <p>Only want to read! <a href="#" @click.left="Redirect('/')">Back to News</a></p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import WebsiteLogo from '@/components/WebsiteLogo.vue';
    import { Login } from '@/services/AuthorizationServices.vue';
    import { useAuthStore } from '@/stores/AuthStore.vue';

    const router = useRouter();
    const auth = useAuthStore();

    function Redirect(path) {
        router.push(path);
    }

    const showAlert = ref(false);

    //Data
    const username = ref('');
    const password = ref('');

    //Function
    async function OnClickLogin() {
        const data = await Login(username.value, password.value);
        if (data != false) {
            if (data.userDetails != null) {
                console.log(1);
                auth.setUser(data.userDetails);
                console.log(2);
                username.value = '';
                password.value = '';
                Redirect('/');
                showAlert.value = false;
            }
            else {
                showAlert.value = true;
            }
        }
    }
</script>

<style scoped>
    .login-container {
        display: flex;
        height: 100vh; /* full màn hình */

    }

    /* Bên trái: ảnh */
    .login-left {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login-left .logo {
        display: block;
        background-color: #fff;
        padding: 0 4px;
        width: 20%;
        height: fit-content;
        cursor: pointer;
        border-radius: 8px;
    }

    /* Bên phải: form */
    .login-right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        padding: 40px;
    }

    .login-box {
        width: 100%;
        max-width: 350px;
    }

    .login-box h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #333;
    }

    .login-box input {
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
    }

    .login-box button {
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

    .login-box button:hover {
        background: #555;
    }

    .login-box p {
        text-align: center;
        margin-top: 15px;
        font-size: 14px;
        color: #666;
    }

    .login-box p a {
        color: #333;
        text-decoration: none;
        font-weight: bold;
    }

    .login-box .alert-msg {
        color: red;
        margin-top: 0;
    }
</style>