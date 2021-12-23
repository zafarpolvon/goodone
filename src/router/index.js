import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Payment from '../views/Payment.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
    meta: {
      breadcrumb: [
        { name: 'Оплата' }
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  },
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'router-link-exact-active'
})

export default router
