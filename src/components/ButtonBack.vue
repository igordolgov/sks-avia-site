<!-- Кнопка "Назад" в карточке товара -->
<template>
  <div class="text-right button-styles">
      <v-btn
        href="/sks-avia/" @click.prevent="gotoPage('main')"
        color="red accent-4" dark
        class="rounded-xl elevation-10"
      >
        Назад
      </v-btn>
    </div>
</template>

<script>
// Импортируем справочник товаров (в переменную 'products')
import products from "@/data/products.js"
// Импортируем справочник категорий товаров (в переменную 'products')
import categories from "@/data/categories.js"
import eventBus from '@/eventBus';

export default {
    name: 'ButtonBack',

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
}
</script>

<style scoped>
    .button-styles {
        position: fixed;
        z-index: 5;
        bottom: 30px !important;
        right: 15px;
    }
</style>