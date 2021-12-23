<template>
  <div>
    <el-row class="navbar__row" :gutter="20">
      <Left />
      <Right />
      <Track />
    </el-row>
  </div>
</template>
<script>
import Left from './components/Left.vue'
import Right from './components/Right.vue'
import Track from './components/Track.vue'

export default {
  name: 'Navbar',
  components: {
    Left,
    Right,
    Track
  }
}
</script>
<style scoped>
  .navbar__row {
    margin: 0 !important;
  }
</style>
