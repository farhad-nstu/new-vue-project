import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
	{
		name:'Home',
		component:Home,
		path:'/'
	},
	{
		name:'Signup',
		component:Signup,
		path:'/register'
	},
	{
		name:'Signin',
		component:Signin,
		path:'/login'
	},
]

const router = createRouter({
	history:createWebHistory(),
	routes
});

export default router
