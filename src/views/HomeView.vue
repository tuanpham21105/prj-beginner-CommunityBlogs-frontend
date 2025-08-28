<template>
	<main class="main-content">
        <borderBox :title="'Blog mới'">
            <gridLayout :child-tag="card" :children-data="testList"/>
			<pagination :input-data="{index: 1, total: testTotal}"/>
        </borderBox>
	</main>
</template>

<script setup>
	import {ref} from 'vue';
	import gridLayout from '../layouts/GridLayout.vue';
	import card from '../components/Card.vue';
	import borderBox from '../components/BorderBox.vue';
	import pagination from '@/components/Pagination.vue';

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
    .main-content {
        padding: 20px 0;
    }
</style>