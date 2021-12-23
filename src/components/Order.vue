<template>
  <div>
    <table class="styled-table table__box">
      <thead>
        <tr class="top__header">
          <th class="header__1">Наименование</th>
          <th class="header__2"><i class="el-icon-discount"></i></th>
          <th class="header__3">Кол</th>
          <th class="header__4">Цена</th>
          <th class="header__5">Сумма</th>
        </tr>
      </thead>
    </table>
    <div>
      <ul class="info__main" v-for="index in infocart" :key="index.id">
        <li class="info__item" v-bind:class="[contentVisible === index.id ? 'active' : '']" @click="contentVisible === index.id ? contentVisible = false : contentVisible = index.id">
          <div class="info__box">
            <span class="header__1">{{ index.name }}</span>
            <span class="header__2">{{ index.discount }}%</span>
            <span class="header__3">{{ index.quantity }}</span>
            <span class="header__4">{{ index.price }}</span>
            <span class="header__5">{{ ((index.price - (index.price * index.discount) / 100) * index.quantity) }}</span>
          </div>
          <div v-if='contentVisible === index.id' class="more__box">
            <div class="more__info">
              <div>
                <el-button type="warning" icon="el-icon-edit" circle></el-button>
                <el-button @click="openModel(index)" type="success" icon="el-icon-discount" circle></el-button>
                <el-button type="primary" icon="el-icon-box" circle></el-button>
              </div>
              <div>
                <el-input-number v-model="index.quantity" @change="handleChange" :min="1" :max="10"></el-input-number>
              </div>
              <div>
                <el-button @click="$store.commit('removeFromCart', index.id)" type="danger" icon="el-icon-delete" circle></el-button>
              </div>
            </div>
            <div class="store__name">
              <span>Sklad Magazin A 38 шт</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['infocart', 'discountAll'],
  data () {
    return {
      contentVisible: false
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    openModel (event) {
      this.$prompt('Введите процент на ' + event.name, 'Скидка', {
        confirmButtonText: 'Сохранить',
        confirmButtonClass: 'save__on',
        cancelButtonText: 'Отмена',
        cancelButtonClass: 'cancel__on',
        inputValue: event.discount,
        center: true
      }).then(({ value }) => {
        this.$emit('discountsend', value)
        this.$store.commit('loadDiscount', { event, value })
        this.$message({
          type: 'success',
          message: 'Скидка: ' + value + ' процент'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Input canceled'
        })
      })
    }
  }
}
</script>
<style scoped>
  .table__box {
    width: 100%;
    margin-top: -30px;
    padding: 0 3px;
  }
  .top__header {
    width: 100%;
  }
  .header__1 {
    width: 30%;
    padding: 0;
    text-align: left;
  }
  .header__2 {
    width: 10%;
    padding: 0;
    text-align: center;
  }
  .header__3 {
    width: 13.3%;
    padding: 0;
  }
  .header__4 {
    width: 16.6%;
    padding: 0;
  }
  .header__5 {
    width: 30%;
    padding: 0;
  }
  .order__item {
    background: #fff;
  }
  .more__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .info__main {
    display: flex;
    padding: 0;
  }
  .info__item {
    display: flex;
    flex-direction: column;
    width: 100%;
    cursor: pointer;
    padding: 0 5px;
    transition: 0.3s;
    padding: 5px 5px;
    color: #000;
  }
  .active {
    background: #00b5fa;
    color: #fff;
  }
  .info__box {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .more__box {
    margin-top: 10px;
  }
  .store__name {
    margin-top: 10px;
    text-align: left;
  }
</style>
