<template>
    <user-card :username="username"/>
    <blogs-list :title="'Blogs'" :blog-card-list-data="blogCardListData" :page-data="pageData"/>
</template>

<script setup>
    import {onMounted, ref} from 'vue';
    import UserCard from '@/components/UserCard.vue';
    import BlogsList from '@/components/BlogsList.vue';
	import { useRoute } from 'vue-router';
	import { GetBlogListDetails, GetBlogListDetailsByUsername } from '@/services/BlogServices.vue';

    const route = useRoute();

    //Data
		//User
	const username = ref(route.params.username);
        //Blogs 
    const blogCardListData = ref([]);
		//Page Data
	const pageData = ref({
		index: 1,
		total: 1,
	});

	//On Load
	onMounted(async () => {
		const data = await GetBlogListDetailsByUsername(1, 10, username.value);
		if (data != false) {
			blogCardListData.value = data.blogDetailsList;
			pageData.value = data.page;
		}
	});
</script>

<style scoped>
</style>