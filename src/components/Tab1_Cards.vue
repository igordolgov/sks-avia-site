<!-- Карточка товара из 1-й вкладки -->
<template>
	<div>
		<ButtonBack />

		<v-container class="pa-0">
			<!-- Меню навигации. "Хлебные крошки" -->
			<!-- <v-row>
				<v-col class="pb-0">
					<v-breadcrumbs
						:items="items" 
						class="grey lighten-3 
						py-0 px-2 elevation-6 rounded-lg"
					>
						<template v-slot:item="{ item }">
							<v-btn>

							<v-breadcrumbs-item
								:href="item.href"
								class="pa-2 text-caption text-lg-body-2 font-weight-black"
							>
								{{ item.text.toUpperCase() }}
							</v-breadcrumbs-item>
							</v-btn>
						</template>
					</v-breadcrumbs>
				</v-col>
			</v-row> -->

			<v-row>
				<!-- Фотографии товара -->
				<v-col
					cols="12" sm="8" lg="9" 
					class="pl-3 pb-0 pb-sm-3 px-sm-0"
				>
					<v-card class="pt-lg-3 grey lighten-3 rounded-lg elevation-10">
						<v-carousel
							dark
							hide-delimiter-background
							delimiter-icon="mdi-minus" 
						>
							<v-carousel-item
								v-if="product.image1"
								:src="product.image1"
								contain
								eager
							></v-carousel-item>

							<v-carousel-item
								v-if="product.image2"
								:src="product.image2"
								contain
								eager
								max-height="80vh"
							></v-carousel-item>

							<v-carousel-item
								v-if="product.image3"
								:src="product.image3"
								contain
								eager
								max-height="80vh"
							></v-carousel-item>

							<v-carousel-item
								v-if="product.image4"
								:src="product.image4"
								contain
								eager
								max-height="80vh"
							></v-carousel-item>

							<v-carousel-item
								v-if="product.image5"
								:src="product.image5"
								contain
								eager
								max-height="80vh"
							></v-carousel-item>

							<v-carousel-item
								v-if="product.image6"
								:src="product.image6"
								contain
								eager
								max-height="80vh"
							></v-carousel-item>
							
							<v-carousel-item
								v-if="product.image7"
								:src="product.image7"
								contain
								eager
								max-height="80vh"
							></v-carousel-item>

							<v-carousel-item
								v-if="product.image8"
								:src="product.image8"
								contain
								eager
								max-height="80vh"
							></v-carousel-item>

							<v-carousel-item
								v-if="product.image9"
								:src="product.image9"
								contain
								eager
								max-height="80vh"
							></v-carousel-item>

							<v-carousel-item
								v-if="product.image10"
								:src="product.image10"
								contain
								eager
								max-height="80vh"
							></v-carousel-item>
						</v-carousel>
					</v-card>
				</v-col>

				<!-- Описание товара -->
				<v-col
					cols="12" sm="4" lg="3"
					class="pb-0 pb-sm-3 pr-sm-0"
				>
					<v-card
						class="pa-2 fill-height elevation-10 rounded-lg">
						<!-- Название товара -->
						<v-card
							flat
							class="
								d-block
								pt-1 px-2 pb-0
								font-weight-bold
								text-body-2 text-md-body-1"
						>
							{{ product.title }}
						</v-card>

						<!-- Описание товара -->
						<v-card
							flat 
							class="
								pl-2 pb-0 mb-0
								text-body-2 text-md-body-1"
						>
							{{ product.description }}
						</v-card>

						<div class="text-body-1 pa-0">
							<!-- Количество товара -->
							<v-card
								flat
								v-if="product.quantity > 0"
								class="
									d-block 
									pl-2 pb-0 mb-0 
									text-body-2 text-md-body-1"
							>
								Кол-во: {{ product.quantity }} шт.
							</v-card>

							<!-- Если товара нет в наличии (кол-во: 0) -->
							<v-card
								flat
								v-if="product.quantity == 0"
								class="
									width-50px
									pl-2 pb-0 mb-0
									red--text
									text-body-2 text-md-body-1"
							>
								Нет в наличии
							</v-card>

							<!-- Состояние товара (новый или б/у) -->
							<v-card
								flat class="
									pl-2 pb-0 mb-0 
									text-body-2 text-md-body-1"
							>
								{{ product.condition }}
							</v-card>

							<!-- Стоимость товара -->
							<v-card
								flat class="
									pl-2 pb-1 mb-0 
									text-body-2 text-md-body-1"
							>
								Цена: {{ product.price }} ₽
							</v-card>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import ButtonBack from "@/components/ButtonBack";
// Импортируем справочник товаров (в переменную 'products')
import products from "@/data/products.js";
// Импортируем справочник категорий товаров (в переменную 'products')
import categories from "@/data/categories.js";
// import eventBus from '@/eventBus';

export default {
  name: "Tab3_Cards",

  props: ["pageParams"],

  components: {
    ButtonBack,
  },

  data: () => ({
    products: products,
    categories: categories,
	items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/',
        },
        {
          text: 'Моторы',
          disabled: false,
          href: '/motors',
        },
        {
          text: ' ',
          disabled: true,
          href: '/product1',
        },
      ],
  }),

  computed: {
    // Информация о товаре
    product() {
      // Фильтруем список товаров и оставляем тот товар, который просматриваем,
      // то есть у которого id совпадает с id переданным через входные параметры
      return products.motors.find(
        (product) => product.id === this.pageParams.id
      );
    },
    category() {
      // Фильтруем список категорий и оставляем ту, у которой идентификатор (id)
      // совпадает c id категории товаров
      return categories.find(
        (category) => category.id === this.product.categoryId
      );
    },
  },
};
</script>

<style>
	.mdi-chevron-right,
	.mdi-chevron-left {
		color: white !important;
	}

	.mdi-minus {
		color: black !important;
	}
/* 
	@media (min-width: 900px) {
		.cards-height {
			height: 100vh;
		}
	}

	@media (max-width: 640px) {
		.cards-height {
			height: 70vh;
		}
	}

	@media (max-width: 360px) {
		.cards-height {
			max-height: 70vh;
		}
	} */
</style>