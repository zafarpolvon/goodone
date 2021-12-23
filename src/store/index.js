import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const cart = window.localStorage.getItem('cart')
const discount = window.localStorage.getItem('discount')
const PRODUCTS = 'http://localhost:3000/products'
const CATEGORIES = 'http://localhost:3000/categories'

export default new Vuex.Store({
  state: {
    products: [],
    cart: cart ? JSON.parse(cart) : [],
    discount: discount ? JSON.parse(discount) : 0
  },
  mutations: {
    addToCart (state, product) {
      let isProductExists = false
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.name === product.name) {
            isProductExists = true
            item.quantity++
          }
        })
        if (!isProductExists) {
          return state.cart.push(product)
        }
      } else {
        return state.cart.push(product)
      }
      this.commit('saveData')
    },
    loadProducts (state, item) {
      state.products = item
    },
    loadCommit (state, item) {
      state.comment = item
    },
    saveData (state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart))
      window.localStorage.setItem('discount', JSON.stringify(state.discount))
    },
    removeFromCart (state, item) {
      const index = state.cart.findIndex(c => c.id === item)
      state.cart.splice(index, 1)
      if (!state.cart.length >= 1) {
        state.discount = 0
      }
      this.commit('saveData')
    },
    loadDiscount (state, info) {
      state.cart.map(function (item) {
        if (item.name === info.event.name) {
          item.discount = info.value
        } else {
          return item
        }
      })
      this.commit('saveData')
    },
    allDiscount (state, value) {
      state.discount = value
    }
  },
  actions: {
    async loadProducts () {
      // eslint-disable-next-line no-useless-catch
      try {
        const info = await axios.get(PRODUCTS)
        return info.data
      } catch (e) {
        throw e
      }
    },
    async loadCategories () {
      // eslint-disable-next-line no-useless-catch
      try {
        const info = await axios.get(CATEGORIES)
        return info.data
      } catch (e) {
        throw e
      }
    }
  },
  getters: {
    CART: state => {
      return state.cart
    },
    DISCOUNT: state => {
      return state.discount
    }
  },
  modules: {
  }
})
