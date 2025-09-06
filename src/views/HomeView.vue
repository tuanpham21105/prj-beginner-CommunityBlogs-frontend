<template>
	<HorizontalBanner/>
	<borderBox :title="'New Blogs'">
		<gridLayout :child-tag="card" :children-data="testList"/>
		<pagination :input-data="{index: 1, total: testTotal}"/>
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

	const testList = ref([
		{
			title: "ABC",
		},
		{
			title: "ABCD",
		},
		{
			title: "ABCDE",
		},
		{
			title: "ABC",
		},
		{
			title: "ABCD",
		},
		{
			title: "ABCDE",
		},
		{
			title: "ABC",
		},
		{
			title: "ABCD",
		},
		{
			title: "ABCDE",
		},
		{
			title: "ABC",
		},
		{
			title: "ABCD",
		},
		{
			title: "ABCDE",
		},
	]);

	const testTotal = ref(10);
</script>

<style scoped>
</style>