<!-- Список всех товаров. КАТАЛОГ -->
<template>
	<v-row>
		<!-- cols=="8" означает - по умолчанию список занимает 8 из 12
		md="3" - на ноутбуках ширина карточки 3 из 12
		sm - планшет, md - ноутбук, md - настольный, lg - широкий экран -->
		<v-col cols="5" sm="3" md="2" class="pa-0">
			<v-list height="100%" class="grey lighten-3">
				<v-btn
					to="/" class='white font-weight-black
							text-center	pa-2 mt-1 ml-3 mb-3 mb-2 elevation-3'>
					Главная
				</v-btn>

				<h2 class="secondary--text ml-3 mb-1 font-weight-medium">
					Каталог
				</h2>
				
				<v-btn
					:to="tab.route"
					v-for='tab in tabs' :key='tab'
					class='white black--text font-weight-black text-center 
							pa-2 ml-3 mb-2 elevation-3'
					active-class="primary white--text"
				>
					{{ tab.title }}
				</v-btn> 
			</v-list>
		</v-col>
		
		<v-col cols="7" sm="9" md="10" class="pa-0">
			<router-view />
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: 'ProductList',

	components: { 
		// Products_Tab1, Products_Tab2, Products_Tab3, 
		},
	
	data: () => ({
		// НАЗВАНИЯ ВКЛАДОК:
		tabs: [
			{
				title: 'Моторы',
				route: '/tab1'
			}, 
			{
				title: 'Пропеллеры',
				route: '/tab2'
			}, 
			{
				title: 'Стартеры',
				route: '/tab3'
			}, 
		],
	}),
}
</script>

<style>

</style>
