<template>
  <el-col class="class__main" :span="7">
    <div class="grid-content bg-purple right__box">
      <div class="header__right">
        <a href="#" class="header__cart">
          <i class="fas fa-shopping-cart"></i>
          <span>Корзина</span>
        </a>
        <a href="#" class="header__application">
          <el-badge :value="12" class="item">
            <i class="far fa-file-alt"></i>
            <span>Заявки</span>
          </el-badge>
        </a>
      </div>
      <div class="right__track"></div>
    </div>
  </el-col>
</template>
<script>
export default {

}
</script>
<style scoped>
  .header__right {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 11px 10px;
  }
  .right__track {
    background: #d0e1ea;
    height: 2px;
  }
  .header__cart {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }
  .header__cart i {
    font-size: 28px;
    color: #6e6e6e;
  }
  .header__cart span {
    color: #6e6e6e;
  }
  .item {
    display: flex;
    flex-direction: column;
  }
  .item i {
    font-size: 28px;
    color: #6e6e6e;
  }
  .item span {
    color: #6e6e6e;
  }
  .header__application {
    text-decoration: none;
  }
</style>
