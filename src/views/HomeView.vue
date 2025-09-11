<template>
	<HorizontalBanner/>
	<BlogsList :title="'New Blogs'" :blog-card-list-data="blogCardListData" :page-data="pageData"/>
	<HorizontalBanner/>
</template>

<script setup>
	import {ref} from 'vue';
	import HorizontalBanner from '../components/HorizontalBanner.vue';
	import BlogsList from '@/components/BlogsList.vue';

	//Input Data
		//Blog Card List Data
	
	const blogCardListData = ref([
		{
			id: "ABC",
			imgUrl: "https://picsum.photos/600",
			title: "ABC",
			username: "defaultUsername",
			viewsText: "10M",
			statusText: "New",
			dateText: "25/10/2025",
		},
	]);
		//Page Data
	const pageData = ref({
		index: 1,
		total: 1,
	});
</script>

<style scoped>
</style>