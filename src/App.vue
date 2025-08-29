<template>
	<header>
	
	</header>
	
	<nav>
	
	</nav>
	
	<main class="main-content">
		<aside>
		</aside>
		<section>
			<HomeView/>
		</section>
		<aside>
		</aside>
	</main>
	
	<footer>
	</footer>		
</template>

<script setup>
	import {ref} from 'vue';
	import HomeView from './views/HomeView.vue';
	import HorizontalBanner from './components/HorizontalBanner.vue';
</script>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		/* font-family:Georgia, 'Times New Roman', Times, serif ; */
	}

	main {
		/* margin: 0 0;
        padding: 20px 0; */
		display: flex;
		min-height: 100vh;
		background-image: url(https://static.vecteezy.com/system/resources/thumbnails/000/633/918/small_2x/seamless_background_286_finger_print.jpg);
	}

	/* @media (min-width: 960px) {
		main {
			margin: 0 15%;
		}
    } */

	aside {
		width: 200px;
		padding: 20px;
	}

	section {
		flex: 1; /* chiếm hết phần còn lại */
		padding: 20px;
		background: #fafafa;
	}
</style>
