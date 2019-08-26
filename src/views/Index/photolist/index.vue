<template>
  <div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      photolist: []
    }
  },
  created () {

  },
  methods: {
    async getphotolist () {
      const {data: {message, status}} = await this.$http.get('')
      if (status !== 0) return console.log('获取失败')
      this.photolist = message
    }
  }
}
</script>

<style>

</style>
