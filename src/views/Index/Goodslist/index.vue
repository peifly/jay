<template>
  <div class="content">
    <div v-for="list in goodslist" :key="list.id" class="list">
      <img :src="list.img_url" alt="">
      <p class="name">名 称: <span> {{list.title}}</span></p>
      <p>现 价: <span>{{list.sell_price}}</span>元&nbsp;&nbsp;&nbsp;&nbsp;
        原 价: {{list.market_price}}元</p>
      <p>库 存: {{list.stock_quantity}}部</p>
    </div>
    <van-pagination v-model="currentPage" :total-items="20" :items-per-page="5" @click="huan(currentPage)"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goodslist: [],
      currentPage: 1
    }
  },
  created () {
    this.getlist()
  },
  methods: {
    async getlist () {
      const {
        data: { message, status }
      } = await this.$http.get('/api/getgoods')
      if (status !== 0) return console.log(message)
      this.goodslist = message
      console.log(message)
    },
    huan (currentPage) {
      const {
        data: { message, status }
      } = this.$http.get('/api/getgoods?pageindex="currentPage"')
      if (status !== 0) return console.log(message)
      this.goodslist = message
      console.log(message)
    }
  }
}
</script>

<style lang="less" scoped>
  .content{
    .list{
      padding:10px 20px;
      border-bottom: .5px solid #ccc;
      img{
        width:90%;
      }
      p{
        line-height: 12px;
        span{
          color: #eb8a29;
        }
      }
      .name{
        font-size: 18px;
        span{
          color:red;
        }
      }
      .van-pagination{
        margin-bottom:0;
      }
    }
  }
</style>
