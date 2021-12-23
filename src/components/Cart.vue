<template>
  <div class="cart">
    <div class="cart__box">
      <div class="cart__into" v-for="car in products" :key="car.id">
        <a @click="submitData(car)" class="cart__item">
          <h5>{{ car.name }}</h5>
          <span>{{ car.price }} UZS</span>
          <span>{{ car.remain }} шт</span>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="96" status="success"></el-progress>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['products'],
  data: () => ({

  }),
  methods: {
    submitData (event) {
      const info = {
        id: event.id,
        name: event.name,
        price: event.price,
        remain: event.remain,
        quantity: 1,
        discount: 0
      }
      this.$store.commit('addToCart', info)
      this.$store.commit('saveData')
    }
  }
}
</script>
<style>
  .cart {
    overflow: auto;
    display: block;
    height: 400px;
    min-height: 400px;
    max-height: 550px;
  }
  .cart::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  .cart::-webkit-scrollbar-thumb {
      background: #FF0000;
  }
  .cart__box {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .cart__into {
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .cart__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 120px;
    background: #fff;
    text-decoration: none;
    border-radius: 8px;
    padding: 5px;
    margin: 10px 10px;
    cursor: pointer;
  }
  .cart__item h5 {
    margin: 0;
    text-align: left;
    color: #000;
    font-weight: 500;
    font-size: 14px;
  }
  .cart__item span {
    text-align: left;
    color: #000;
    font-weight: 600;
    font-size: 15px;
  }
  .el-progress.is-success .el-progress-bar__inner {
    border-radius: 0px !important;
  }
  .el-progress-bar__outer {
    border-radius: 0px !important;
  }
</style>
