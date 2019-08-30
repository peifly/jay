<template>
  <div class="content">
    <div v-for="(list,index) in goodslist" :key="index" class="lists" @click="tag(list.id)">
      <img :src="list.img_url" alt />
      <h2 class="name">
        名 称:
        <span>{{list.title}}</span>
      </h2>
      <p>
        <span class="new">¥{{list.sell_price}}元</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="old">¥{{list.market_price}}元</span>
      </p>
      <p class="num">
        <span>热卖中</span>
        <span>剩余:{{list.stock_quantity}}部</span>
      </p>
    </div>
    <van-button type="danger" @click="getmore">{{flag?'没 有 更 多 数 据 了':'加 载 更 多'}}</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goodslist: [],
      num: 1,
      flag: false,
      limit: 4
    }
  },
  created () {
    this.getlist()
  },
  methods: {
    async getlist () {
      if (this.flag) return
      const {
        data: {message, status, count}
      } = await this.$http.get(`/api/getgoods?pageindex=${this.num}&limit=${this.limit}`)
      if (status !== 0) return console.log(message)
      this.goodslist = this.goodslist.concat(message)
      this.flag = this.limit * this.num > count
    },
    getmore () {
      this.num++
      this.getlist()
    },
    tag (id) {
      this.$router.push('/home/goodsinfo/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  padding: 4px;
  justify-content: space-between;
  flex-wrap: wrap;
  .lists {
    border: .5px solid #ccc;
    padding:2px;
    margin-bottom:2px;
    width:48%;
    img {
      width: 100%;
    }
    p {
      margin:0;
      padding:4px;
      font-size: 12px;
      .new{
        color:red;
      }
      .old{
        text-decoration: line-through;
        color:#666;
      }
    }
    .name {
      font-size: 16px;
      span {
        color: red;
      }
    }
    .num{
      display: flex;
      justify-content: space-between;
    }
  }
  .van-button {
    width: 100%;
  }
}
</style>
