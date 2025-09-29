<template>
	<HorizontalBanner/>
	<BlogsList :title="'New Blogs'" :blog-card-list-data="blogCardListData" :page-data="pageData" @on-click-page="OnClickPage"/>
	<HorizontalBanner/>
</template>

<script setup>
	import {ref, onMounted} from 'vue';
	import HorizontalBanner from '../components/HorizontalBanner.vue';
	import BlogsList from '@/components/BlogsList.vue';
	import { GetBlogDetails } from '@/services/BlogDetailsServices.vue';

	//Variables
	const steps = ref(30);

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

	//Load
	onMounted(async () => {
		const data = await GetBlogDetails(1, steps.value);
		if (data != false) {
			blogCardListData.value = data.blogDetailsList;
			pageData.value = data.page;
		}
	});

	//Function
	async function OnClickPage(pageIndex) {
		if (pageIndex <= pageData.total) {
			const data = await GetBlogDetails(pageIndex, steps.value);
			if (data != false) {
				blogCardListData.value = data.blogDetailsList;
				pageData.value = data.page;
			}
		}
	}
</script>

<style scoped>
</style>