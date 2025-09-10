<template>
    <header class="header-bar">
		<div class="btn-bar setting">
			<Button><i class="fa-solid fa-bars"></i></Button>
		</div>

		<WebsiteLogo/>

		<div class="tabsbar">
			<Tab :text-content="'New Blogs'" :redirect-path="'/'" @on-click="Redirect"/>
			<Tab :text-content="'Your Blogs'"/>
			<Tab :text-content="'Write Blog'"/>
			<Tab :text-content="'Contact us'" :redirect-path="'/contact'" @on-click="Redirect"/>
			<Tab :text-content="'What is CommunityBlog'" :redirect-path="'/introduce'" @on-click="Redirect"/>
		</div>

		<div class="btn-bar login-signin">
			<Button :redirect-path="'/auth/login'" @on-click="Redirect">Login</Button>
			<Button :redirect-path="'/auth/signin'" @on-click="Redirect">Sign Up</Button>
		</div>

		<div class="btn-bar placeholder">
			<Button><i class="fa-solid fa-bars"></i></Button>
		</div>
	</header>
</template>

<script setup>
	import {ref} from 'vue';
	import WebsiteLogo from '@/components/WebsiteLogo.vue';
	import Tab from '@/components/Tab.vue';
	import Button from '@/components/Button.vue';
	import { useRouter } from 'vue-router';

	const router = useRouter();

	function Redirect(path) {
		router.push(path);
	}
</script>

<style scoped>
	.header-bar {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		padding: 0 5%;
		box-shadow: 0 6px 10px rgba(0,0,0,0.2);
		z-index: 10;
	}

	.header-bar .tabsbar {
		height: inherit;
		width: fit-content;
		display: flex;
		flex-direction: row;
	}

	.header-bar .btn-bar {
		height: inherit;
		width: fit-content;
		display: flex;
		flex-direction: row;
		padding: 10px 0;
	}

	.header-bar .setting {
		display: none;
	}

	.header-bar .placeholder {
		display: none;
		visibility: hidden;
	}

	@media (max-width: 960px) {
		.header-bar {
			justify-content: space-between;
		}
		.header-bar .tabsbar {
			display: none;
		}
		.header-bar .login-signin {
			display: none;
		}
		.header-bar .setting {
			display: block;
		}
		.header-bar .placeholder {
			display: block;
		}
    }
</style>