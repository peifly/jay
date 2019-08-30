import Vue from 'vue'
import {
  SubmitBar,
  Switch,
  Stepper,
  Panel,
  ImagePreview,
  Lazyload,
  Tab, Tabs,
  Toast,
  Button,
  Pagination,
  Card,
  Grid,
  GridItem,
  Swipe,
  SwipeItem,
  NavBar,
  Tabbar,
  TabbarItem
} from 'vant'

const options = {
  loading: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3345138084,3221952596&fm=26&gp=0.jpg'
}
Vue
  .use(SubmitBar)
  .use(Switch)
  .use(Stepper)
  .use(Panel)
  .use(Lazyload, options)
  .use(Tab).use(Tabs)
  .use(Button)
  .use(Pagination)
  .use(Card)
  .use(Grid).use(GridItem)
  .use(Swipe).use(SwipeItem)
  .use(Tabbar).use(TabbarItem)
  .use(NavBar)
Vue.prototype.$Toast = Toast
Vue.prototype.$ImagePreview = ImagePreview
// Vue.prototype.$SwitchCell = SwitchCell
