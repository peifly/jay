<template>
  <div class="goodsinfo">
    <transition @before-enter="before" @enter="enter" @after-enter="after">
      <div class="ball" v-show="flag" id="ball"></div>
    </transition>
    <van-swipe :autoplay="3000" indicator-color="white" class="lbt">
      <van-swipe-item v-for="item in imgs" :key="item.id">
        <img :src="item.src" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="main">
      <van-panel :title="'名称: '+contents.title">
        <div class="price">
          市场价格：
          <span class="old">¥{{contents.market_price}}</span>
          销售价格：
          <span class="new">¥{{contents.sell_price}}</span>
        </div>
        <div class="number">
          购买数量:&nbsp;
          <van-stepper v-model="value" />
        </div>
        <div class="btns">
          <van-button type="primary">立即购买</van-button>
          <van-button type="danger" @click="move" :disabled="flag1">加入购物车</van-button>
        </div>
      </van-panel>
    </div>
    <div class="con">
      <h2>商品信息</h2>
      <p>
        商品货号: {{contents.goods_no}}
      </p>
      <p>
        库存情况: {{contents.stock_quantity}}
      </p>
      <p>
        上架时间: {{contents.add_time}}
      </p>
    </div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div>
    <div>14</div>
    <div>15</div>
    <div>16</div>
    <div>17</div>
    <div>18</div>
    <div>19</div>
    <div>20</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      imgs: [],
      contents: {},
      value: '',
      flag: false,
      flag1: false
    }
  },
  created () {
    this.id = this.$route.params.id
    this.goodsinfo()
    this.getimgs()
  },
  methods: {
    async getimgs () {
      const {
        data: { message, status }
      } = await this.$http.get(`/api/getthumimages/${this.id}`)
      if (status !== 0) return this.$Toast(message)
      this.imgs = message
    },
    async goodsinfo () {
      const {
        data: { message, status }
      } = await this.$http.get(`/api/goods/getinfo/${this.id}`)
      if (status !== 0) return this.$Toast(message)
      this.contents = message
    },
    move () {
      let goodsinfo = {
        id: this.id,
        count: this.value,
        sell_price: this.contents.sell_price,
        selected: true,
        title: this.contents.title,
        src: this.imgs[0].src,
        time: null
      }
      this.$store.commit('getcart', goodsinfo)
      this.flag = !this.flag
      this.flag1 = true
      setTimeout(() => {
        this.flag1 = false
      }, 600)
    },
    before (el) {
      el.style.transform = 'translate(0,0)'
    },
    enter (el, done) {
      let ball = document.querySelector('#ball').getBoundingClientRect()
      let info = document.querySelector('.van-info').getBoundingClientRect()
      let x = info.left - ball.left
      let y = info.top - ball.top
      // eslint-disable-next-line no-unused-expressions
      el.offsetLeft
      el.style.transform = `translate(${x}px,${y}px)`
      el.style.transition = 'all .5s linear'
      done()
    },
    after () {
      this.flag = false
    }
  }
}
</script>

<style lang="less" scoped>
.goodsinfo {
  position: relative;
  .ball{
    width:15px;
    height:15px;
    border-radius: 50%;
    background: red;
    position: absolute;
    top:302px;
    left:150px;
    z-index:100;
  }
  padding: 0 1%;
  .lbt {
    height: 200px;
    img {
      width: 100%;
      height:100%
    }
  }
  .main {
    margin-top: 10px;
    border: 1px solid #ccc;
    box-shadow: 0 0 6px;
    color: #666;
    border-radius: 10px;
    .van-cell__title {
      font-size: 18px;
      color: red;
    }
    .van-panel__content {
      div {
        padding-left: 16px;
        margin: 10px 0;
      }
      .price {
        .old {
          text-decoration: line-through;
          margin-right: 20px;
        }
      }
      .number {
        display: flex;
        line-height: 26px;
        .van-stepper{
          margin-top:0;
        }
      }
    }
  }
  .con {
    margin-top: 10px;
    border: 1px solid #ccc;
    box-shadow: 0 0 6px;
    color: #666;
    border-radius: 10px;
    padding-left:16px;
    h2{
      font-size: 18px;
    }
  }
}
</style>
