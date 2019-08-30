import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)
let cart = JSON.parse(localStorage.getItem('cart') || '[]')
export default new Store({
  state: {
    cart
  },
  getters: {
    getAll (state) {
      let n = 0
      state.cart.forEach(el => {
        n += el.count
      })
      return n
    },
    all (state) {
      let n = 0
      state.cart.forEach(el => {
        if (el.selected === true) {
          n += (el.count - 0)
        }
      })
      return n
    },
    getallprice (state) {
      let num = 0
      state.cart.forEach(el => {
        if (el.selected === true) {
          num += el.count * el.sell_price
        }
      })
      return num
    }
  },
  mutations: {
    getcart (state, goodsinfo) {
      let flag = false
      state.cart.some(el => {
        if (el.id === goodsinfo.id) {
          el.count += goodsinfo.count
          flag = true
          return true
        }
      })
      if (!flag) {
        state.cart.push(goodsinfo)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  }
})
