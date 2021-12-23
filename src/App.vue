<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/Navbar/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  html {
    height: 100%;
  }
  body {
    margin: 0;
    height: 100%;
    overflow-y: hidden;
  }
  .save__on {
    background: #67c23a !important;
    border: 1px solid #67c23a !important;
    width: 100%;
    height: 60px;
    font-size: 22px !important;
  }
  .cancel__on {
    width: 100%;
    height: 60px;
    font-size: 22px !important;
  }
  .el-message-box__btns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .el-message-box__message {
    font-size: 20px;
    font-weight: 500;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  .el-message-box__title {
    font-size: 24px;
    font-weight: 500;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  .pay__center {
    text-align: center !important;
  }

</style>
