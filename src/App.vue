<template>	
	<router-view/>
	<!-- <AuthenticationLayout/> -->
</template>

<script setup>
	import HomeView from './views/HomeView.vue';
	import BlogView from './views/BlogView.vue';
	import ContactUsView from './views/ContactUsView.vue';
	import IntroduceView from './views/IntroduceView.vue';
import AuthenticationLayout from './layouts/AuthenticationLayout.vue';
</script>

<style>
    * {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family:'Courier New', Courier, monospace;
	}
</style>
