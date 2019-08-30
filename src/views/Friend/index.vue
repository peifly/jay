<template>
  <div class="friend">
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    >
      <template slot="desc">
        <van-stepper :value="value" async-change @change="onChange" />
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 1
    }
  },
  methods: {
    onChange (value) {
      this.$Toast.loading({ forbidClick: true })

      setTimeout(() => {
        this.$Toast.clear()
        this.value = value
      }, 500)
    }
  }
}
</script>

<style>
</style>
