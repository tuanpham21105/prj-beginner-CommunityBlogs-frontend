<template>
	<Header></Header>
	
	<nav>
	
	</nav>
	
	<main class="main-content">
		<aside>
		</aside>
		<section>
			<HomeView/>
			<!-- <BlogView/> -->
		</section>
		<aside>
		</aside>
	</main>
	
	<Footer></Footer>		
</template>

<script setup>
	import {ref} from 'vue';
	import HomeView from './views/HomeView.vue';
	import HorizontalBanner from './components/HorizontalBanner.vue';
	import Header from './layouts/Header.vue';
	import Footer from './layouts/Footer.vue';
	import BlogView from './views/BlogView.vue';
</script>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family:'Courier New', Courier, monospace;
	}

	main {
		/* margin: 0 0;
        padding: 20px 0; */
		display: flex;
		min-height: 100vh;
		background-image: url(https://static.vecteezy.com/system/resources/thumbnails/000/633/918/small_2x/seamless_background_286_finger_print.jpg);
	}

	aside {
		width: 0;
		padding: 0;
	}

	@media (min-width: 960px) and (max-width: 1370px) {
		aside {
			width: 150px;
			padding: 15px;
		}
    }

	@media (min-width: 1370px) {
		aside {
			width: 200px;
			padding: 20px;
		}
	}

	section {
		flex: 1; /* chiếm hết phần còn lại */
		padding: 20px;
		background: #fafafa;
	}
</style>
