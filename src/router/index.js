import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=>import('@/pages/root'),
      children: [
      	{
      		path: '/home',
      		component: ()=>import('@/pages/home')
      	},
      	{
      		path: '/search',
      		component: ()=>import('@/pages/search')
      	},
      	{
      		path: '/friend',
      		component: ()=>import('@/pages/friend')
      	},
      	{
      		path: '/setting',
      		component: ()=>import('@/pages/setting')
      	},
      	{
      		path: '/',
      		redirect: '/home'
      	}
      ]
    },
    {
      path: '/login',
      component: ()=>import('@/pages/login')
    },
  ]
})
