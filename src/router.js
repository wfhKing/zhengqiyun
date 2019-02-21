import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Notice from './components/Notice.vue'
import Policy from './components/Policy.vue'
import Atlas from './components/Atlas.vue'
import Declare from './components/Declare.vue'
<<<<<<< HEAD
=======
import Login from './components/Login.vue'
import Register from './components/Register.vue'
>>>>>>> 54c962170046ffa22dcaa66877f2ffaa1c475905

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'notice',
      component: Notice
    },
		{
			path: '/notice',
			name: 'notice',
			component: Notice
		},
		{
			path: '/policy',
			name: 'policy',
			component: Policy
		},
		{
			path: '/atlas',
			name: 'atlas',
			component: Atlas
		},
		{
			path: '/declare',
			name: 'declare',
			component: Declare
		}
  ]
=======
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
>>>>>>> 54c962170046ffa22dcaa66877f2ffaa1c475905
})

