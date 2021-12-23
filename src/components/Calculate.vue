<template>
<el-row>
  <el-col :span="24">
    <div class="grid-content bg-purple-dark">
      <div class="calculate__box">
      <div class="calculate__fixed">
        <div class="calculate__info">
          <div class="calculate__first">
            <h5>Общая сумма</h5>
            <span>{{ total }} UZS</span>
          </div>
          <div class="calculate__item">
            <h5>Скидка</h5>
            <span>{{ discount }} UZS</span>
          </div>
          <div class="calculate__item">
            <h5>Элементы</h5>
            <span>{{ quantity }}</span>
          </div>
          <div class="calculate__item">
            <h5>Клиент</h5>
            <span>Выберите клиент</span>
          </div>
          <div class="calculate__item">
            <h5>Кассир ( Продовец )</h5>
            <span>Doniyor</span>
          </div>
        </div>
        <div class="calculate__footer">
          <div class="calculate__button">
            <el-button @click="openModel" class="buttons__link">
              <i class="el-icon-discount"></i>
              <span>Скидка</span>
            </el-button>
            <el-button class="buttons__link">
              <i class="el-icon-user"></i>
              <span>Клиент</span>
            </el-button>
            <el-button class="buttons__link">
              <i class="el-icon-printer"></i>
              <span>Печать</span>
            </el-button>
            <el-button class="buttons__link" type="danger">
              <span>Очистить</span>
            </el-button>
            <el-button class="buttons__link" type="primary">
              <span>Отсрочка</span>
            </el-button>
            <el-button @click="submitPay" class="buttons__link" type="success">
              <span>Оплатить</span>
            </el-button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </el-col>
</el-row>

</template>
<script>
export default {
  props: ['total', 'discount', 'quantity'],
  methods: {
    openModel (event) {
      this.$prompt('Введите процент на вес товар', 'Скидка', {
        confirmButtonText: 'Сохранить',
        confirmButtonClass: 'save__on',
        cancelButtonText: 'Отмена',
        cancelButtonClass: 'cancel__on',
        inputValue: event.discount,
        center: true
      }).then(({ value }) => {
        this.$store.commit('allDiscount', value)
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
    },
    submitPay () {
      this.$router.push('/payment')
    }
  }
}
</script>
<style scoped>
  .calculate__box {
    position: relative;
    width: 100%;
  }
  .calculate__fixed {
    position: fixed;
    bottom: 0;
    width: 29.15%;
    background: #efefef;
  }
  .calculate__box {
    display: flex;
    flex-direction: column;
  }
  .calculate__info {
    display: flex;
    flex-direction: column;
    padding: 5px 5px;
  }
  .calculate__info div {
    margin: 2px 0;
  }
  .calculate__first {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .calculate__first h5 {
    margin: 0;
    color: #848484;
    font-weight: 400;
    font-size: 16px;
  }
  .calculate__first span {
    color: #000;
    font-weight: 600;
    font-size: 16px;
  }
  .calculate__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .calculate__item h5 {
    margin: 0;
    color: #848484;
    font-weight: 400;
    font-size: 14px;
  }
  .calculate__item span {
    color: #000;
    font-weight: 600;
    font-size: 14px;
  }
  .calculate__button {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .buttons__link {
    width: 32%;
    margin-top: 5px;
    margin-left: 0 !important;
  }
  .calculate__footer {
    padding: 0 5px;
  }
</style>
