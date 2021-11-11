import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/MainPage.vue')
  },
  {
    path: '/tab1',
    name: 'tab1',
    component: () => import('@/components/Products_Tab1.vue')
  },
  {
    path: '/tab2',
    name: 'tab2',
    component: () => import('@/components/Products_Tab2.vue')
  },
  {
    path: '/product1',
    name: 'product1',
    component: () => import('@/pages/Product1_Card.vue')
  },
  {
    path: '/product2',
    name: 'product2',
    component: () => import('@/pages/Product2_Card.vue')
  },
  {
    path: '/product3',
    name: 'product3',
    component: () => import('@/pages/Product3_Card.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes
})

export default router
