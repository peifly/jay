<template>
  <div class="box">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in lunbolist" :key="item.id">
        <img :src="item.img" alt />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3" class="grids" :border="false">
      <van-grid-item v-for="grid in grids" :key="grid.id" props="grid" :text="grid.title" :to="grid.to">
        <template slot="icon">
          <img :src="grid.src" alt="">
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data: () => ({
    lunbolist: [],
    grids: []
  }),
  created () {
    this.getlunbo()
    this.getgrids()
  },
  methods: {
    async getlunbo () {
      const {
        data: { message, status }
      } = await this.$http.get('http://localhost:5000/api/getlunbo')
      if (status !== 0) return this.$Toast('获取轮播图失败')
      this.lunbolist = message
    },
    async getgrids () {
      const {
        data: { message, status }
      } = await this.$http.get('http://localhost:5000/api/girds')
      if (status !== 0) return this.$Toast('获取图片失败')
      this.grids = message
      console.log(message)
    }
  }
}
</script>

<style lang='less' scoped>
.box img {
  width: 100%;
  height: 200px;
}
.grids img{
  width:60px;
  height:60px;
  margin-bottom:5px;
}
</style>
