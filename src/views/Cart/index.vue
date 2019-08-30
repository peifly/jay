<template>
  <div class="cart">
    <div class="lists" v-for="item in $store.state.cart" :key="item.id">
      <div class="check">
        <van-switch v-model="item.selected" />
      </div>
      <div class="list">
        <van-card :num="item.count" :price="item.sell_price" :title="item.title" :thumb="item.src" />
        <!-- <van-stepper v-model="item.count" /> -->
        <div data-v-ee0b0d46 class="van-stepper">
          <button class="van-stepper__minus" @click='sub(item.id,item.count)' step></button>
          <input
            type="number"
            v-model="item.count"
            class="van-stepper__input"
          />
          <button class="van-stepper__plus" @click="add(item.id)" step></button>
        </div>
      </div>
    </div>
    <div class="put">
      <span class="putprice">总金额:¥{{$store.getters.getallprice}}.00</span>
      <span class="putnum">总件数:{{$store.getters.all}}</span>
      <van-button type="danger">提交订单</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  methods: {
    sub (id, num) {
      if (num <= 1) return
      let goodsinfo = {
        id: id,
        count: -1
      }
      this.$store.commit('getcart', goodsinfo)
    },
    add (id) {
      let goodsinfo = {
        id: id,
        count: +1
      }
      this.$store.commit('getcart', goodsinfo)
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  padding: 10px 1%;
  .lists {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-bottom: 10px;
    align-items: center;
    .list {
      position: relative;
      width: 83%;
      .van-card {
        width: 100%;
        .van-card__header {
          .van-card__thumb {
            width: 140px;
            height: 90px;
          }
          .van-card__content {
            height: 90px;
            .van-card__title {
              font-size: 16px;
              padding-top: 2px;
            }
            .van-card__bottom {
              display: flex;
              justify-content: space-between;
              padding-top: 50px;
            }
          }
        }
      }
      .van-stepper {
        position: absolute;
        top: 38px;
        left: 160px;
      }
    }
  }
  .put {
    height: 45px;
    line-height: 45px;
    background: #8aa1ec;
    padding-left:10px;
    color: rgb(238, 23, 105);
    .putnum {
      margin-left: 20px;
    }
    button {
      float: right;
    }
  }
}
</style>
