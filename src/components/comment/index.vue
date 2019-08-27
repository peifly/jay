<template>
  <div class="comment">
    <h2>发表评论</h2>
    <hr>
    <textarea  cols="30" rows="10" v-model="text" class="text" placeholder="请输入发表的内容"></textarea>
    <van-button type="danger" @click="addcomment">发 表 内 容</van-button>
    <div class="content" v-for="(list,index) in contents" :key="index">
      <div class="content-t">
        <span>第 {{index+1}} 楼</span>
        <span>用户: {{list.user_name}}</span>
        <span>发表时间: {{list.add_time | datefmt}}</span>
      </div>
      <div class="content-c">
        {{list.content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  props: {
    contents: {
      type: Array
    }
  },
  methods: {
    addcomment () {
      if (this.text === '') return this.$toast('内容不能为空')
      this.$emit('postcomment', this.text)
      this.text = ''
    }
  }
}
</script>

<style lang="less" scoped>
  .comment{
    .text{
      height:85px;
      width:100%;
      border:none;
    }
    .van-button{
      width:100%;
      font-size: 14px;
    }
    .content{
      .content-t{
        padding-left:10px;
        line-height:26px;
        background: #ddd;
        font-size: 13px;
        span{
          margin-right:8px;
        }
      }
      .content-c{
        padding-left:20px;
      }
    }
  }
</style>
