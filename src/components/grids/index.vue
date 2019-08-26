<template>
  <div>
    <div class="van-col" v-for="item in cartlist" :key="item.id">
      <i class="van-icon">
        <img src="" alt="">
      </i>
      <span>fire-o</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cartlist: []
    }
  },
  created () {
    this.getcart()
  },
  methods: {
    async getcart () {
      const {data: {message, status}} =
      await this.$http.get('http://localhost:5000/api/girds')
      if (status !== 0) return this.$Toast('获取图片失败')
      this.cartlist = message
      console.log(message)
    }
  }
}
</script>

<style lang="less" scoped>
.demo-icon {
  font-size: 0;
}
.demo-icon-list {
  box-sizing: border-box;
  min-height: calc(100vh - 65px);
  padding-top: 10px;
}
.demo-icon .van-col {
  display: inline-block;
  float: none;
  height: 100px;
  text-align: center;
  vertical-align: middle;
}
.demo-icon .van-col span {
  display: block;
  padding: 0 5px;
  color: #7d7e80;
  font-size: 12px;
  line-height: 18px;
}
.demo-icon .van-icon {
  margin: 20px 0 10px;
  color: #323233;
  font-size: 32px;
}
.demo-icon .van-tab__pane {
  width: auto;
  margin: 20px;
  background-color: #fff;
}
</style>
