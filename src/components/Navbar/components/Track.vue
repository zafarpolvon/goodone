<template>
  <el-col :span="17" class="class__main">
    <div class="grid-content header__left">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>
          <el-breadcrumb-item  v-for="(breadcrumb, idx) in breadcrumbList"
                              :key="idx"
                              @click="routeTo(idx)"
                              :class="{'linked': !!breadcrumb.link}"
          >{{ breadcrumb.name }}
          </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </el-col>
</template>
<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      breadcrumbList: []
    }
  },
  mounted () { this.updateList() },
  watch: { '$route' () { this.updateList() } },
  methods: {
    routeTo (pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList () { this.breadcrumbList = this.$route.meta.breadcrumb }
  }
}
</script>
<style scoped>
  .class__main {
    background: #00a1dd;
    padding: 10px 0;
  }
  .track__box {
    display: flex;
    flex-direction: row;
  }
  .track__box a {
    font-size: 20px;
    color: #fff;
    margin-right: 10px;
    text-decoration: none;
  }
</style>
