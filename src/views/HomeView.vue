<template>
	<main class="main-content">
        <borderBox :title="'Blog mới'">
            <gridLayout :child-tag="card" :children-data="testList"/>
        </borderBox>
	</main>
</template>

<script setup>
	import {ref} from 'vue';
	import gridLayout from '../layouts/GridLayout.vue';
	import card from '../components/Card.vue';
	import borderBox from '../components/BorderBox.vue';
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
</script>

<style scoped>
    .main-content {
        padding: 20px 0;
    }
</style>