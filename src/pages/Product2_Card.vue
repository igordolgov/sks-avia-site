<!-- Карточка товара из 2-й вкладки -->
<template>
  <v-app app>
    <Header />

    <v-main relative class="bg-main grey lighten-2">
      <div class="text-right back-button">
        <v-btn
          href="#" @click.prevent="gotoPage('main')"
          color="red accent-4" dark
          class="rounded-xl elevation-10"
        >
          Назад
        </v-btn>
      </div>

      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-card
              align="center"
              class="ma-0 elevation-16 rounded-lg"
            >
              <v-card-title
                dark
                class="grey darken-2 white--text py-1"
              >
                <span class="mx-auto">{{ product.title }}</span>
              </v-card-title>
              
              <v-card-text class="pa-0">
                <span
                  class="font-weight-black
                        text-h6 text-uppercase red--text">
                  {{ product.condition }}
                  <span class="font-weight-bold text-subtitle-1"></span>
                </span>

                <span
                  class="font-weight-bold text-h5 black--text">
                  - Цена: {{ product.price }}
                  <span class="font-weight-bold text-subtitle-1">₽</span>
                </span>
              </v-card-text>

              <v-card-text
                class="grey darken-3 text-subtitle-1 
                       font-weight-light white--text py-0">
                {{ product.description }}
              </v-card-text>

              <v-img :src="product.image1" contain class="card-img"></v-img>
              <v-img :src="product.image2" contain class="card-img"></v-img>
              <v-img :src="product.image3" contain class="card-img"></v-img>
              <v-img :src="product.image4" contain class="card-img"></v-img>
              <v-img :src="product.image5" contain class="card-img"></v-img>
              <v-img :src="product.image6" contain class="card-img"></v-img>
              <v-img :src="product.image7" contain class="card-img"></v-img>
              <v-img :src="product.image8" contain class="card-img"></v-img>
              <v-img :src="product.image9" contain class="card-img"></v-img>
              <v-img :src="product.image10" contain class="card-img"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
// Импортируем справочник товаров (в переменную 'products')
import products from "@/data/products.js"
// Импортируем справочник категорий товаров (в переменную 'products')
import categories from "@/data/categories.js"
import eventBus from '@/eventBus';

export default {
  name: 'Product2_Card',

  props: ['pageParams'],

  components: { Header, Footer, },

  computed: {
    // Информация о товаре
    product() {
      // Фильтруем список товаров и оставляем тот товар, который просматриваем,
      // то есть у которого id совпадает с id переданным через входные параметры
      return products.tab2.find(product => product.id === this.pageParams.id)
    },
    category() {
      // Фильтруем список категорий и оставляем ту, у которой идентификатор (id)
      // совпадает c id категории товаров
      return categories.find(category => category.id === this.product.categoryId)
    },
  },

  data: () => ({
    products: products,
    categories: categories,
  }),

  methods: {
    // Переход по страницам
    gotoPage(pageName) {
      eventBus.$emit('gotoPage', pageName)
    }
  },
};

</script>

<style>
  .card-img {
    margin: 8px 0;
    max-height: 75vh;
    max-width: 80vw;  
  }

  .back-button {
    position: fixed;
    z-index: 5;
    top: 50% !important;
    left: 10px;
  }
</style>