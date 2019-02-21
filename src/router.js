import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Notice from './components/Notice.vue'
import Policy from './components/Policy.vue'
import Atlas from './components/Atlas.vue'
import Declare from './components/Declare.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			children:[
				{
					path: '/',
					name: 'notice',
					component: Notice
				}, {
					path: '/notice',
					name: 'notice',
					component: Notice
				}, {
					path: '/policy',
					name: 'policy',
					component: Policy
				}, {
					path: '/atlas',
					name: 'atlas',
					component: Atlas
				}, {
					path: '/declare',
					name: 'declare',
					component: Declare
				}
				
			]
		},
		{
			path:'/login',
			name:'login',
			component:Login
		},
		{
			path:'/register',
			name:'register',
			component:Register
		}

	]
})

