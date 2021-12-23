<template>
  <el-col :span="17" class="class__main">
    <div class="grid-content header__left">
      <div class="header__logo">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="header__right">
        <div>
          <el-switch v-model="value1">
          </el-switch>
        </div>
        <div>
          <div class="search__box">
            <input placeholder="Код" type="text">
            <i class="fas fa-search"></i>
          </div>
        </div>
        <div>
          <a href="#" class="power__button">
            <i class="fas fa-power-off"></i>
          </a>
        </div>
      </div>
    </div>
  </el-col>
</template>
<script>
export default {
  name: 'Navbar',
  data: () => ({
    value1: false
  })
}
</script>
<style scoped>
  .class__main {
    background: #00b5fa;
    padding: 18px 0;
    height: 70px;
  }
  .header__logo img {
    width: 80px;
  }
  .header__left {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .header__right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .header__right div {
    align-self: center;
    margin: 0 3px;
  }
  .search__box {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #91defd;
    padding: 2px 5px;
  }
  .search__box input {
    background: inherit;
    border: none;
    text-align: right;
    outline: none;
    color: #fff;
    font-size: 20px;
    padding: 0 10px;
  }
  .search__box::placeholder {
    color: #a4c0db;
  }
  .search__box i {
    color: #fff;
    font-size: 22px;
  }
  .power__button i {
    color: #fff;
    font-size: 24px;
  }
</style>
