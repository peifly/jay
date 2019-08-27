import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Newslist from '../views/Index/news/newslist'
import Newsinfo from '../views/Index/news/newsinfo'
import Photolist from '../views/Index/photos/photolist'
import Goodslist from '../views/Index/Goodslist'
// import Noone from '../views/Index/Goodslist/Noone'
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
    },
    {
      path: '/home/newsinfo/:id',
      component: Newsinfo
    },
    {
      path: '/home/goodslist',
      component: Goodslist
    },
    {
      path: '/home/photolist',
      component: Photolist
    }
    // {
    //   path: '/home/goodslist',
    //   redirect: '/home/goodslist?pageindex=1'
    // },
    // {
    //   path: '/home/goodslist?pageindex=1',
    //   redirect: Noone
    // }
  ]
})
