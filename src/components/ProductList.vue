<!-- Список всех товаров. Каталог -->
<template>
	<v-row>
		<v-col class="pl-2">
			<v-tabs vertical class="fill-height">
				<v-tab
					v-for='tab in tabs' :key='tab'
					class='black--text text-caption font-weight-black'
					active-class="primary white--text"
				>
					{{ tab }}
				</v-tab>

				<v-tab-item> <!-- ПЕРВАЯ ВКЛАДКА КАТАЛОГА -->
					<Products_Tab1 class='grey lighten-2' />
				</v-tab-item>

				<v-tab-item> <!-- ВТОРАЯ ВКЛАДКА КАТАЛОГА -->
					<Products_Tab2 class='grey lighten-2' />
				</v-tab-item>

				<v-tab-item> <!-- ТРЕТЬЯ ВКЛАДКА КАТАЛОГА -->
					<Products_Tab3 class='grey lighten-2' />
				</v-tab-item>
			</v-tabs>
		</v-col>
	</v-row>
</template>

<script>
import Products_Tab1 from '@/components/Products_Tab1'
import Products_Tab2 from '@/components/Products_Tab2'
import Products_Tab3 from '@/components/Products_Tab3'

export default {
	name: 'ProductList',

	components: { Products_Tab1, Products_Tab2, Products_Tab3, },
	
	data: () => ({
		// НАЗВАНИЯ ВКЛАДОК:
		tabs: ['Моторы', 'Пропеллеры', 'Стартеры', ],
	}),
}
</script>

<style>

</style>
