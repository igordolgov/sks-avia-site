<!-- Карточка товара из 3-й вкладки -->
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
					cols="12" sm="8" lg="7" offset-lg="1" 
					class="pl-3"
				>
					<v-card
						class="
						cards-height
						pa-sm-3 
						d-flex align-center
						grey lighten-3 rounded-lg elevation-10
					">
						<v-carousel
							height="100%"
							dark
							hide-delimiter-background
							delimiter-icon="mdi-minus"
							class="pt-sm-0 pb-sm-0
						">
							<v-carousel-item
								v-for="(image,i) in product.images"
								:key="i"
								:src="image.src"
								contain
								eager
							></v-carousel-item>
						</v-carousel>
					</v-card>
				</v-col>

				<!-- Описание товара -->
				<v-col
					cols="12" sm="4" lg="3"
					class="py-0 pt-sm-3 pb-sm-3 pr-sm-3 pr-lg-0 pl-sm-0"
				>
					<v-card
						height="100%"
						class="pa-2 elevation-10 rounded-lg">
						<!-- Название товара -->
						<span
							class="
								d-block
								pt-1 px-2 pb-0
								font-weight-bold
								text-body-2 text-md-body-1"
						>
							{{ product.title }}
						</span>

						<!-- Описание товара -->
						<span
							d-block
							class="
								d-block
								pl-2 pb-0 mb-0
								text-body-2 text-md-body-1"
						>
							{{ product.description }}
						</span>

						<div class="text-body-2 pa-0">
							<!-- Количество товара -->
							<span
								v-if="product.quantity > 0"
								class="
									d-block 
									pl-2 pb-0 mb-0 
									text-md-body-1"
							>
								Кол-во: {{ product.quantity }} шт.
							</span>

							<!-- Если товара нет в наличии (кол-во: 0) -->
							<span
								v-if="product.quantity == 0"
								class="
									width-50px
									pl-2 pb-0 mb-0
									red--text
									text-md-body-1"
							>
								Нет в наличии
							</span>

							<!-- Состояние товара (новый или б/у) -->
							<span
									class="
									d-block
									pl-2 pb-0 mb-0 
									text-md-body-1"
							>
								{{ product.condition }}
							</span>

							<!-- Стоимость товара -->
							<span
									class="
									d-block
									pl-2 pb-1 mb-0 
									text-md-body-1"
							>
								Цена: {{ product.price }} ₽
							</span>
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
          text: 'Стартеры',
          disabled: false,
          href: '/starters',
        },
        {
          text: ' ',
          disabled: true,
          href: '/product3',
        },
      ],
  }),

  computed: {
    // Информация о товаре
    product() {
      // Фильтруем список товаров и оставляем тот товар, который просматриваем,
      // то есть у которого id совпадает с id переданным через входные параметры
      return products.starters.find(
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

	@media (min-width: 900px) {
		.cards-height {
			min-height: 78.4vh;
		}
	}

	@media (max-width: 640px) {
		.cards-height {
			height: 90vh;
		}
	}

	@media (max-width: 360px) {
		.cards-height {
			max-height: 60vh;
		}
	}
</style>