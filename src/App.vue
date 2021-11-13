<template> <!-- Разметка. Что и как отображать на странице -->
	<v-app>
		<Header />

		<v-main class="bg-main">
			<v-container>
				<!-- "component" - специальный тег во Vue.js, который позволяет отображать
				любой компонент динамически (в свойстве ":is" передаём название компонента).
				В данном случае это вычисляемое свойство "currentPageComponent" -->
				<component
					:is="currentPageComponent"
					:page-params="currentPageParams"
					@gotoPage="(pageName, pageParams) => gotoPage(pageName, pageParams)"
				/>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>

// Импортируем "Глобальную шину"
import eventBus from '@/eventBus';
// Импортируем компоненты (страницы) для возможности использования в текущем компоненте.
// Символ "@" означает "путь до папки 'src'"
import MainPage from "@/pages/MainPage" // Главная страница. С неё запускается сайт
import Header from "@/components/Header"
import ProductList from "@/components/ProductList"
import Product1_Card from "@/pages/Product1_Card" // Карточка товара из 1-й вкладки
import Product2_Card from "@/pages/Product2_Card" // Карточка товара из 2-й вкладки
import Product3_Card from "@/pages/Product3_Card" // Карточка товара из 2-й вкладки
import Products_Tab1 from "@/components/Products_Tab1" // Список всех товаров 1-й вкладки
import Products_Tab2 from "@/components/Products_Tab2" // Список всех товаров 2-й вкладки
import Products_Tab3 from "@/components/Products_Tab3" // Список всех товаров 2-й вкладки
import NotFoundPage from "@/pages/NotFoundPage" // Страница ошибки (если страница не найдена)

// Маршруты до страниц. Это объект, где ключ - название страницы, значение - компонент,
// который должен отобразиться при переходе на эту страницу
const routes = {
	main: 'ProductList',
	product1: 'Product1_Card',
	product2: 'Product2_Card',
	product3: 'Product3_Card',
	tab1: 'Products_Tab1',
	tab2: 'Products_Tab2',
	tab3: 'Products_Tab3',
}

export default {
	// Название этого компонента
	name: 'App',

	// Указываем, какие компоненты использовать
	components: {
		Header,
		MainPage, 
		ProductList,
		Product1_Card, 
		Product2_Card, 
		Product3_Card, 
		NotFoundPage, 
		Products_Tab1, 
		Products_Tab2, 
		Products_Tab3 
	},

	data() { // СОСТОЯНИЕ
		return {
			// Свойство (переменная) для хранения текущей страницы,
			// по умолчанию - главная страница (main)
			currentPage: 'main',
			// Хранилище параметров страницы
			currentPageParams: {},
		}
	},
	methods: {
		// Переход по страницам
		gotoPage(pageName, pageParams) {
			this.currentPage = pageName;
			this.currentPageParams = pageParams || {};
		}
	},
	
	created() {
		eventBus.$on('gotoPage', (pageName, pageParams) => this.gotoPage(pageName, pageParams))
	},
	computed: {
		// Вычисляемое свойство, которое возвращает название компонента в зависимости
		// от выбранной страницы (в списке "routes"), иначе возвращает 'NotFoundPage'
		currentPageComponent() {
			return routes[this.currentPage] || 'NotFoundPage';
		}
	},
};
</script>

<style scoped>
	.bg-main {
		background-image: url("https://igordolgov.github.io/sks/img/background-main.jpg");
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>