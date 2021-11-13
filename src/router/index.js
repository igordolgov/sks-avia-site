// Маршрутизатор для Vue
import Vue from 'vue'
import VueRouter from 'vue-router'
// import MainPage from '@/pages/MainPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import MainPage from '@/pages/MainPage.vue'
import Products_Tab1 from '@/components/Products_Tab1.vue'
import Products_Tab2 from '@/components/Products_Tab2.vue'
import Products_Tab3 from '@/components/Products_Tab3.vue'
import Product1_Card from '@/pages/Product1_Card.vue'
import Product2_Card from '@/pages/Product2_Card.vue'
import Product3_Card from '@/pages/Product3_Card.vue'

Vue.use(VueRouter) // Сообщаем Vue, что будем использовать vue-router

const routes = [ // Создаём маршруты (в виде объектов)
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/tab1',
    name: 'tab1',
    component: Products_Tab1,
  },
  {
    path: '/tab2',
    name: 'tab2',
    component: Products_Tab2,
  },
  {
    path: '/tab3',
    name: 'tab3',
    component: Products_Tab3,
  },
  {
    path: '/product1', // путь в адресной строке
    name: 'product1', // ключевое название страницы
    component: Product1_Card,
  },
  {
    path: '/product2',
    name: 'product2',
    component: Product2_Card,
  },
  {
    path: '/product3',
    name: 'product3',
    component: Product3_Card,
  },
  {
    path: '*', // путь в адресной строке
    name: 'notFound', // ключевое название страницы
    component: NotFoundPage // компонент для отрисовки
  },
]

const router = new VueRouter({ // Создаём новый экземпляр вью-роутера
  mode: 'history',
  base: '/sks-avia/',
  routes
})

export default router // Экспортируем vue-router

