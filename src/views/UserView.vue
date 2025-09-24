<template>
    <user-card/>
    <blogs-list :title="'Blogs'" :blog-card-list-data="blogCardListData" :page-data="pageData"/>
</template>

<script setup>
    import {ref} from 'vue';
    import UserCard from '@/components/UserCard.vue';
    import BlogsList from '@/components/BlogsList.vue';

    //Data
        //user
    const userId = ref('');
        //Blogs 
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
    const blogsList = ref({

    })
</script>

<style scoped>
</style>