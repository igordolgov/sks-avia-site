<!-- Список товаров 2-й вкладки -->
<template>
	<v-card>
		<v-card-text class="pa-3">
			<v-row class="tab-height background-size:contain;">
				<!-- cols=="8" означает - по умолчанию список занимает 8 из 12
				md="3" - на ноутбуках ширина карточки 3 из 12
				sm - планшет, md - ноутбук, md - настольный, lg - широкий экран -->
				<v-col
					cols="12" sm="4" md="3" lg="3" xl="3" class="text-center pa-1"
					v-for="product in products" :key="product.id"
				>
					<v-hover v-slot="{ hover }"> <!-- Эффект при наведении на карточку -->
						<v-card
							href="#" @click.prevent="gotoPage('product2', {id: product.id})"
							:elevation="hover ? 16 : 6"
							width="auto" min-height="188px" class="pa-2"
						>
							<!-- При клике на карточку товара вызываем локальный метод "gotoPage"
							и передаём в него название страницы и доп. параметры для страницы -->
							<v-card>
								<v-img
									cover
									position="top center"
									min-height="200px"
									max-height="200px"
									:src="product.image1"
								></v-img>
							</v-card>

							<v-card elevation="6">
								<v-card-title
									class=" d-block white--text grey darken-1 
									mt-2 pt-1 px-2 pb-0">
									<h3 class="text-body-2">
										{{ product.title }}
									</h3>
								</v-card-title>

								<v-card-text class="mx-0 pb-0">
									<p class="black--text text-body-1 font-weight-bold mb-0">
										{{ product.price }} 
										<span class="font-weight-bold text-caption">₽</span>
									</p>
								</v-card-text>
							</v-card>
						</v-card>
					</v-hover>
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script>
import products from '@/data/products.js';
import eventBus from '@/eventBus';

export default {
	name: 'Products_Tab2',
	data: () => ({
		products: products.propellers,
	}),

	methods: {
		// Переход по страницам
		gotoPage(pageName, pageParams) {
			eventBus.$emit('gotoPage', pageName, pageParams)
		}
	},
}
</script>

<style>
	.tab-height {
		min-height: 85vh;
		align-content: flex-start;
	}
</style>