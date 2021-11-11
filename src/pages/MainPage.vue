<template>
  <v-app app>
    <Header />

    <v-main class="bg-main">
      <v-container class="pa-0">
        <ProductList @gotoPage="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)" />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header"
import ProductList from "@/components/ProductList"
import Footer from "@/components/Footer"

export default {
  name: 'MainPage',

  components: {
    Header,
    ProductList,
    Footer,
  },

  data: () => ({
    items: [
        {
          text: 'Домой',
          disabled: false,
          href: 'Home',
        },
        {
          text: 'Каталог',
          disabled: false,
          href: 'Catalog',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
  }),
};
</script>

<style scoped>
.bg-main {
  background-image: url("https://catherineasquithgallery.com/uploads/posts/2021-02/1614424086_36-p-temnii-fon-dlya-intro-45.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>