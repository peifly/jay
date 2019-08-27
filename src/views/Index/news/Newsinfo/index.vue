<template>
  <div class="info">
    <div class="info-top">
      <p class="title">{{msg.title}}</p>
      <p class="time">
        <span>发表时间:{{msg.add_time}}</span>
        <span>点击{{msg.click}}次</span>
      </p>
      <hr>
      <div class="content">
        {{msg.content}}
      </div>
    </div>
    <comment :contents="contents" @postcomment="postcomment"></comment>
    <van-button plain type="danger" @click="getmore">{{flag?'没 有 更 多 数 据 了':'加 载 更 多'}}</van-button>
  </div>
</template>

<script>
import Comment from '../../../../components/comment/index'
export default {
  data () {
    return {
      id: '',
      msg: {},
      num: 1,
      contents: [],
      limit: 3,
      flag: false
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getlist()
    this.commentlist()
  },
  methods: {
    async getlist () {
      const {
        data: { status, message }
      } = await this.$http.get(`http://localhost:5000/api/getnew/${this.id}`)
      if (status !== 0) return console.log(message)
      this.msg = message
    },
    async commentlist () {
      if (this.flag !== false) return
      const {
        data: { status, message, count }
      } = await this.$http.get(`/api/getcomments/${this.id}?pageindex=${this.num}&limit=${this.limit}`)
      if (status !== 0) return console.log(message)
      this.contents = this.contents.concat(message)
      this.flag = this.limit * this.num > count
    },
    getmore () {
      this.num++
      this.commentlist()
    },
    async postcomment (data) {
      const {data: {message, status}} =
      await this.$http.post(`/api/postcomment/${this.id}`, {content: data})
      if (status !== 0) return console.log(message)
      this.contents.unshift({
        user_name: '匿名用户',
        content: data,
        add_time: Date.now()
      })
      this.getlist()
    }
  },
  components: {
    Comment
  }
}
</script>

<style lang='less' scoped>
.info {
  padding: 0 8px;
  .info-top {
    .title{
      text-align: center;
      color: red;
    }
    .time{
      color:blue;
      font-size: 14px;
      padding:0 10px;
      span:nth-of-type(2){
        float: right;
      }
    }
  }
  .van-button{
    width:100%;
  }
}
</style>
