import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/views/Hello'
import Dummy from '../components/views/Dummy'
import Navbar from '../components/Navbar'
import Myself from '../components/Myself'
import Vuetest from '../components/views/Vuetest'
import Practice from '../components/views/Practice'
import Api from '../components/views/Api'


Vue.use(Router)

export default new Router({
  routes: [
    
    {
    	path: '/myinfo',
    	component: Myself
    },
    {
    	path: '/dummy/:id',
    	component: Dummy
    },
    {
        path: '/vue',
        component: Vuetest
    },
    {
        path: '/practice',
        component: Practice
    },
    {
        path: '/api',
        component: Api
    }
    
  ]
})
