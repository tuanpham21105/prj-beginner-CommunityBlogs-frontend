<script setup>
	import {ref} from 'vue';
	import HomeView from './views/HomeView.vue';
</script>

<template>
	<HomeView/>
</template>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		/* font-family:Georgia, 'Times New Roman', Times, serif ; */
	}

	main {
		margin: 0 0;
	}

	@media (min-width: 960px) {
		main {
			margin: 0 15%;
		}
    }
</style>
