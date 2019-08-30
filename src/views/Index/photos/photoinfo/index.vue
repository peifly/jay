<template>
  <div class="photoinfo">
    <div class="info-top">
      <p class="title">{{msg.title}}</p>
      <p class="time">
        <span>发表时间:{{msg.add_time}}</span>
        <span>点击{{msg.click}}次</span>
      </p>
      <hr />
      <div class="imgs-box">
        <img :src="img" @click="bigimg(index)" v-for="(img,index) in imgs" :key="index" />
      </div>
      <div class="content">{{msg.content}}</div>
    </div>
    <comment @postcomment="postcomment" :contents='contents'></comment>
    <van-button plain type="danger" @click="getmore">{{flag?'没 有 更 多 数 据 了':'加 载 更 多'}}</van-button>
  </div>
</template>

<script>
import Comment from '../../../../components/comment'
export default {
  data () {
    return {
      id: '',
      msg: {},
      imgs: [],
      contents: [],
      flag: false,
      num: 1,
      limit: 3
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getcontent()
    this.getimgs()
    this.commentlist()
  },
  methods: {
    async getcontent () {
      const {
        data: { message, status }
      } = await this.$http.get(`/api/getimageInfo/${this.id}`)
      if (status !== 0) return this.$Toast(message)
      this.msg = message
    },
    async getimgs () {
      const {
        data: { message, status }
      } = await this.$http.get(`/api/getthumimages/${this.id}`)
      if (status !== 0) return this.$Toast(message)
      let arr = []
      message.forEach(el => {
        if (el.src) {
          arr.push(el.src)
        }
      })
      this.imgs = arr
    },
    bigimg (startPosition) {
      this.$ImagePreview({
        images: this.imgs,
        startPosition
      })
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
      // this.getlist()
    }
  },
  components: {
    Comment
  }
}
</script>

<style lang="less" scoped>
.photoinfo {
  padding: 0 8px;
  .info-top {
    .title {
      text-align: center;
      color: red;
    }
    .time {
      color: blue;
      font-size: 14px;
      padding: 0 10px;
      span:nth-of-type(2) {
        float: right;
      }
    }
    .imgs-box {
      display: flex;
      justify-content: space-around;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
  .van-button {
    width: 100%;
  }
}
</style>
