import Vue from 'vue'
import {
  Card,
  Grid,
  GridItem,
  Swipe,
  SwipeItem,
  NavBar,
  Tabbar,
  TabbarItem
} from 'vant'

Vue
  .use(Card)
  .use(Grid).use(GridItem)
  .use(Swipe).use(SwipeItem)
  .use(Tabbar).use(TabbarItem)
  .use(NavBar)
