<!-- Список товаров 2-й вкладки -->
<template>
	<v-card>
		<v-card-text class="pa-4">
			<v-row class="tab-height">
				<!-- cols=="8" означает - по умолчанию список занимает 8 из 12
				md="3" - на ноутбуках ширина карточки 3 из 12
				sm - планшет, md - ноутбук, md - настольный, lg - широкий экран -->
				<v-col
					cols="12" sm="4" md="3" lg="3" xl="3" class="text-center pa-2"
					v-for="product in products" :key="product.id"
				>
					<v-hover v-slot="{ hover }"> <!-- Эффект при наведении на карточку -->
						<v-card
							href="#" @click.prevent="gotoPage('product2', {id: product.id})"
							:elevation="hover ? 16 : 2"
							width="auto" min-height="188px" class="pt-2 pb-1 rounded-lg"
						>
							<!-- При клике на карточку товара вызываем локальный метод "gotoPage"
							и передаём в него название страницы и доп. параметры для страницы -->
							<v-img
								contain
								width="auto"
								max-height="127px"
								:src="product.image1"
							></v-img>

							<v-card-title class="pt-2 pb-0 px-2 d-inline-block">
								<h3 class="text-caption font-weight-bold">
									{{ product.title }}
								</h3>
							</v-card-title>

							<v-card-text class="py-0">
								<p class="primary--text text-body-2 font-weight-bold mb-0">
									{{ product.price }} ₽</p>
							</v-card-text>
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
		products: products.tab2,
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