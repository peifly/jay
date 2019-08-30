<template>
  <div class="box">
    <van-nav-bar title="长沙-1903" left-text="返回" left-arrow @click-left="onClickLeft" fixed />
    <transition name="fly">
      <router-view></router-view>
    </transition>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/friend">朋友</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart" :info="$store.getters.getAll">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onClickLeft () {
      window.history.back(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  padding-top: 46px;
  padding-bottom: 50px;
  overflow-x: hidden;
  .fly-enter {
    transform: translateX(100%);
  }
  .fly-leave-to {
    transform: translateX(-100%);
    position: absolute;
    left: -300%;
  }
  .fly-enter-active,
  .fly-leave-active {
    transition: all 0.8s linear;
  }
}
</style>
