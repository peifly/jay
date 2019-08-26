<template>
  <div>
    <van-card v-for="list in newslist" :key="list.id" class="list"
    :title="list.title"
    :thumb="list.img_url">
      <div slot="price">
        <span>发表时间:{{list.add_time}}</span>
      </div>
      <div slot="num">
        <span>点击{{list.click}}次</span>
      </div>
    </van-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newslist: []
    }
  },
  created () {
    this.getnews()
  },
  methods: {
    async getnews () {
      const {
        data: { message, status }
      } = await this.$http.get('http://localhost:5000/api/getnewslist')
      if (status !== 0) return this.$Toast('获取数据失败')
      this.newslist = message
      console.log(message)
    }
  }
}
</script>

<style lang="less" scoped>
  .van-card__thumb{
    height:55px;
  }
  .van-card__content{
    min-height:55px;
    .van-card__title{
      margin-bottom:20px;
    }
  }
</style>
