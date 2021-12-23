<template>
  <div class="home">
    <el-row class="row__main" :gutter="20">
      <el-col class="left__side" :span="17">
        <div class="grid-content bg-purple">
          <Category @filter-event="searchButton" @all-event="getAll" :categories="categories" class="test" />
          <Cart :products="filtered" />
        </div>
      </el-col>
      <el-col class="right__side" :span="7">
        <div class="grid-content bg-purple">
          <div>
            <Order @discountsend="discountsend" :infocart="infocart" />
            <Calculate :quantity="infocart.length" :discount="discount" :total="total" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Category from '../components/Category.vue'
import Cart from '../components/Cart.vue'
import Order from '../components/Order.vue'
import Calculate from '../components/Calculate.vue'

export default {
  name: 'Home',
  data: () => ({
    products: [],
    categories: [],
    search: '',
    disc: 0
  }),
  async mounted () {
    this.products = await this.$store.dispatch('loadProducts')
    this.categories = await this.$store.dispatch('loadCategories')
  },
  methods: {
    searchButton (event) {
      this.search = event
    },
    getAll (event) {
      this.search = event
    },
    discountsend (event) {
      this.disc = event
    }
  },
  computed: {
    infocart () {
      return this.$store.getters.CART
    },
    discountAll () {
      return this.$store.getters.DISCOUNT
    },
    filtered () {
      if (this.search === 'all') {
        return this.products
      } else {
        return this.products.filter(product => !product.category.indexOf(this.search))
      }
    },
    perItem () {
      return this.infocart.reduce(function (total, key) {
        return total + ((((key.price * key.discount) / 100) * key.quantity))
      }, 0).toFixed(0)
    },
    discountPer () {
      return this.infocart.reduce(function (total, key) {
        return total + ((key.price - ((key.price * key.discount) / 100) * key.quantity))
      }, 0).toFixed(0)
    },
    total () {
      return (this.discountPer - (this.discountPer * this.discountAll) / 100)
    },
    discount () {
      return Number(this.perItem) + ((this.discountPer * this.discountAll) / 100)
    }
  },
  components: {
    Category,
    Cart,
    Order,
    Calculate
  }
}
</script>
<style scoped>
  .home {
    height: 100%;
  }
  .left__side {
    background: #0076aa;
    padding: 0 !important;
    height: 100vh;
  }
  .right__side {
    padding: 0 !important;
  }
  .row__main {
    margin: 0 !important;
  }
  .test {
    margin-top: 20px;
    width: 100%;
  }
</style>
