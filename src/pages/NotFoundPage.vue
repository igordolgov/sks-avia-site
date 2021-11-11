<template>
  <v-app app>
    <Header />

    <v-main class="bg-main">
      <v-container class="pa-0">
        <h1>Страница не найдена</h1>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: 'NotFoundPage',

  components: { Header, Footer },

  data: () => ({
    
  }),
};
</script>

<style scoped>

</style>