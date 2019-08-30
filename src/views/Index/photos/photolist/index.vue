<template>
  <div class="photolist">
    <van-tabs @change="getimgs" animated>
      <van-tab v-for="photolist in photolists" :title="photolist.title" :key="photolist.id">
        <template v-if="imgs.length!=0">
          <router-link :to="'/home/photoinfo/'+img.id" v-for="img in imgs" :key="img.id" class="img-box">
            <!-- <img :src="img.img_url" alt=""> -->
            <img v-lazy="img.img_url" >
          </router-link>
        </template>
        <div v-else class="deng">敬 请 期 待</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    photolists: [],
    imgs: []
  }),
  created () {
    this.getphotolist()
    this.getimgs(0)
  },
  methods: {
    async getphotolist () {
      const {
        data: { message, status }
      } = await this.$http.get('/api/getimgcategory')
      if (status !== 0) return console.log('获取失败')
      message.unshift({ id: 0, title: '全部' })
      this.photolists = message
    },
    async getimgs (index) {
      const {
        data: { message, status }
      } = await this.$http.get(`/api/getimages/${index}`)
      if (status !== 0) return console.log('获取失败')
      this.imgs = message
    }
  }
}
</script>

<style lang="less" scoped>
.photolist{
  .img-box{
    padding:4px;
    img{
      width:100%;
      height: 100%;
      display:block
    }
  }
  .deng{
    line-height:100px;
    text-align: center;
    font-size: 26px;
    color: rgb(124, 238, 89);
  }
}
</style>
