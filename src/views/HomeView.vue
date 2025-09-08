<template>
	<HorizontalBanner/>
	<borderBox :title="'New Blogs'">
		<gridLayout :child-tag="card" :children-data="blogCardListData"/>
		<pagination :input-data="{index: pageData.index, total: pageData.total}"/>
	</borderBox>
	<HorizontalBanner/>
</template>

<script setup>
	import {ref} from 'vue';
	import gridLayout from '../layouts/GridLayout.vue';
	import card from '../components/Card.vue';
	import borderBox from '../components/BorderBox.vue';
	import pagination from '@/components/Pagination.vue';
	import HorizontalBanner from '../components/HorizontalBanner.vue';

	//Input Data
		//Blog Card List Data
	const blogCardListData = ref([
		{
			redirectPath: "/blog/ABC",
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