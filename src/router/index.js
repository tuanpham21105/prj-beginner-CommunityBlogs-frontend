	import { createRouter, createWebHistory } from 'vue-router'
	import HomeView from '@/views/HomeView.vue'
	import BlogView from '@/views/BlogView.vue'
	import ContactUsView from '@/views/ContactUsView.vue';
	import IntroduceView from '@/views/IntroduceView.vue';
	import DefaultLayout from '@/layouts/DefaultLayout.vue';
	import AuthenticationLayout from '@/layouts/AuthenticationLayout.vue';
	import LoginView from '@/views/LoginView.vue';
	import SigninView from '@/views/SigninView.vue';

	const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{path: '/',  component: DefaultLayout,
		children: [
			{ path: '', component: HomeView},
			{ path: 'blog/:id', component: BlogView},
			{ path: 'contact', component: ContactUsView},
			{ path: 'introduce', component: IntroduceView},
		]},
		{
			path: '/auth', component: AuthenticationLayout,
			children: [
				{ path: 'login', component: LoginView},
				{ path: 'signin', component: SigninView}
			]
		},
	],
	scrollBehavior(to, from, savedPosition) {
		return {left: 0, top: 0};
	}
	})

	export default router
