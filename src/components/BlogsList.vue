<template>
	<borderBox :title="'New Blogs'">
		<gridLayout :child-tag="card" :children-data="blogCardListData"/>
		<pagination :input-data="{index: pageData.index, total: pageData.total}" @on-click-page=""/>
	</borderBox>
</template>

<script setup>
	import {ref} from 'vue';
	import gridLayout from '../layouts/GridLayout.vue';
	import card from '../components/Card.vue';
	import borderBox from '../components/BorderBox.vue';
	import pagination from '@/components/Pagination.vue';

	//Input Data
    const props = defineProps({
        //Title
        title: {
            type: String,
            default: 'Default Title',
        },
		//Blog Card List Data
        blogCardListData: {
            type: Array,
            default: 
            []
        },
		//Page Data
        pageData: {
            type: Object,
            default: {
                index: 1,
                total: 1,
            }
        }
    });
</script>

<style scoped>
</style>