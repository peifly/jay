// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './plugins/index'
import axios from 'axios'
import moment from 'moment'
// 配置根路径
axios.defaults.baseURL = 'http://localhost:5000/'
// 全局配置 axios
Vue.prototype.$http = axios

Vue.filter('datefmt', (str, arg = "'YYYY-MM-DD hh:mm:ss'") => {
  return moment(str).format(arg)
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
