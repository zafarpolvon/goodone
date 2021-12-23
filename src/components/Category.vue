<template>
  <div class="category__box">
    <div class="category__item" @click="getAll('all')">
      <span>Все</span>
    </div>
    <div v-for="cat in categories" :key="cat.id" class="category__item" @click="filterBlog(cat.name)">
      <span>{{ cat.name }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['categories'],
  methods: {
    filterBlog (event) {
      this.$emit('filter-event', event)
    },
    getAll (event) {
      this.$emit('all-event', event)
    }
  }
}
</script>
<style scoped>
  .category__box {
    display: flex;
    width: 100%;
    overflow-x: scroll;
    padding-bottom: 10px;
  }
  .category__item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 23%;
    min-width: 23.1%;
    height: 120px;
    background: #409eff;
    align-items: center;
    margin: 0 10px;
    border-radius: 12px;
    cursor: pointer;
  }
  .category__item span {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }

  .category__box::-webkit-scrollbar-track
  {
    background-color: #00618c;
  }

  .category__box::-webkit-scrollbar
  {
    height: 8px;
    background-color: #00b4f9;
  }

  .category__box::-webkit-scrollbar-thumb
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #00b4f9;
  }
</style>
