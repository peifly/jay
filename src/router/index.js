import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Newslist from '../views/Index/newslist'
import Friend from '../views/Friend'
import Cart from '../views/Cart'
import Search from '../views/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Index
    },
    {
      path: '/friend',
      component: Friend
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/home/newslist',
      component: Newslist
    }
  ]
})
