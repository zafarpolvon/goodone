<template>
  <div class="all">
    <div class="all__flex">
      <div class="all__first">
        <div class="all__price">
          <h5>Общая сумма</h5>
          <span>{{ total | currency }}</span>
          <h5>Скидка</h5>
          <span>{{ discount | currency }} UZS</span>
          <h5>Элементы</h5>
          <span>2</span>
          <h5>Клиент</h5>
          <span>Zafar</span>
        </div>
        <div class="all__uzs">
          <span>UZS</span>
        </div>
      </div>
      <div class="all__second">
        <div class="calculator__box">
          <div class="calculator__input">
            <input type="text" @click="check = false" @blur="check = false" v-if="check" v-model="equation">
            <input type="text" @click="check = true" v-else v-model="price">
          </div>
          <div class="calculator__button">
            <div @click="append('1')">1</div>
            <div @click="append('2')">2</div>
            <div @click="append('3')">3</div>
          </div>
          <div class="calculator__button">
            <div @click="append('4')">4</div>
            <div @click="append('5')">5</div>
            <div @click="append('6')">6</div>
          </div>
          <div class="calculator__button">
            <div @click="append('7')">7</div>
            <div @click="append('8')">8</div>
            <div @click="append('9')">9</div>
          </div>
          <div class="calculator__button">
            <div>.</div>
            <div @click="append('0')">0</div>
            <div @click="clearEquation"><i class="el-icon-back"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__box">
      <div class="footer__button">
        <el-button type="primary">Наличный</el-button>
        <el-button type="success">Карта</el-button>
        <el-button type="danger">Комбинация</el-button>
        <el-button type="primary">Валюта</el-button>
      </div>
      <div class="footer__pay">
        <el-button @click="openModel" type="success">Оплатить</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['total', 'discount', 'quantity'],
  data: () => ({
    equation: '',
    price: '',
    check: false
  }),
  watch: {
    equation (val) {
      this.price = this.$options.filters.currency(Number(val))
    }
  },
  methods: {
    openModel () {
      this.$confirm('Сдача' + (Number(this.total) - Number(this.equation)), {
        distinguishCancelAndClose: true,
        confirmButtonText: 'Сохранить',
        cancelButtonText: 'Отменить',
        customClass: 'pay__center',
        cancelButtonClass: 'cancel__on',
        confirmButtonClass: 'save__on'
      })
        .then(() => {
          this.$message({
            type: 'info',
            message: 'Changes saved. Proceeding to a new route.'
          })
        })
        .catch(action => {
          this.$message({
            type: 'info',
            message: action === 'cancel'
              ? ''
              : ''
          })
        })
    },
    buttonAC: function () {
      this.equation = '0'
    },
    clearEquation: function () {
      this.equation = this.equation.substring(0, this.equation.length - 1)
    },
    append: function (char) {
      this.equation += char
    },
    blurEvent: function (e) {
      this.inputHover = true
    }
  },
  components: {
  }
}
</script>
<style scoped>
  .all {
    padding: 0 30px;
  }
  .all__flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
  }
  .all__first {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #f9fafa;
  }
  .all__second {
    width: 69%;
  }
  .all__price {
    text-align: left;
    padding: 0px 10px;
  }
  .all__price h5 {
    margin: 0;
    font-size: 20px;
    color: #888d9d;
    margin-top: 10px;
  }
  .all__price span {
    color: #000;
    font-size: 18px;
    font-weight: 600;
  }
  .all__uzs {
    border-top: 1px solid #e0e0e0;
    padding: 10px 0;
  }
  .all__uzs span {
    font-size: 22px;
    font-weight: 600;
  }
  .footer__box {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .footer__button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .footer__button button {
    width: 100%;
    height: 60px;
    font-size: 24px;
  }
  .footer__pay {
    margin-top: 10px;
  }
  .footer__pay button {
    width: 100%;
    height: 60px;
    font-size: 24px;
  }
  .calculator__box {
    display: flex;
    flex-direction: column;
  }
  .calculator__input {
    display: flex;
  }
  .calculator__input input {
    width: 100%;
    height: 60px;
    text-align: right;
    font-size: 32px;
    padding: 10px;
    color: #606266;
    border: 2px solid #bac7d2;
    outline: none;
  }
  .calculator__button {
    display: flex;
    flex-direction: row;
  }
  .calculator__button div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 60px;
    background: #e4e7ed;
    border: 2px solid #bac7d2;
    cursor: pointer;
    color: #1476aa;
    font-size: 26px;
    font-weight: 600;
  }
</style>
