<template>
	<HorizontalBanner/>
	<BlogsList :title="'New Blogs'" :blog-card-list-data="blogCardListData" :page-data="pageData" @on-click-page="OnClickPage"/>
	<HorizontalBanner/>
</template>

<script setup>
	import {ref, onMounted} from 'vue';
	import HorizontalBanner from '../components/HorizontalBanner.vue';
	import BlogsList from '@/components/BlogsList.vue';
	import { GetBlogListDetails } from '@/services/BlogServices.vue';

	//Variables
	const steps = ref(30);

	//Input Data
		//Blog Card List Data
	const blogCardListData = ref([
	]);
		//Page Data
	const pageData = ref({
		index: 1,
		total: 1,
	});

	//Load
	onMounted(async () => {
		const data = await GetBlogListDetails(1, steps.value);
		if (data != false) {
			blogCardListData.value = data.blogDetailsList;
			pageData.value = data.page;
		}
	});

	//Function
	async function OnClickPage(pageIndex) {
		if (pageIndex <= pageData.total) {
			const data = await GetBlogListDetails(pageIndex, steps.value);
			if (data != false) {
				blogCardListData.value = data.blogDetailsList;
				pageData.value = data.page;
			}
		}
	}
</script>

<style scoped>
</style>