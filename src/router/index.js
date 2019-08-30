import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Newslist from '../views/Index/news/newslist'
import Newsinfo from '../views/Index/news/newsinfo'
import Photolist from '../views/Index/photos/photolist'
import Photoinfo from '../views/Index/photos/photoinfo'
import Goodslist from '../views/Index/goods/goodslist'
import Goodsinfo from '../views/Index/goods/goodsinfo'
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
      path: '/home/photolist',
      component: Photolist
    },
    {
      path: '/home/photoinfo/:id',
      component: Photoinfo
    },
    {
      path: '/home/goodslist',
      component: Goodslist
    },
    {
      path: '/home/goodsinfo/:id',
      component: Goodsinfo
    }
  ]
})
