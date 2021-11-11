<!-- "Шапка" сайта, верхняя часть -->
<template>
	<div>
		<v-app-bar app dark dense class="primary elevation-10">
			<!-- <div aria-label="VuLogo" role="img" class="v-image v-responsive shrink theme--light" style="min-width:34px;max-width:34px;"><div class="v-responsive__sizer" style="padding-bottom: 114.244%;"></div><div class="v-image__image v-image__image--cover" style="background-image: url(img/logo-sks.svg); background-position: center center;"></div><div class="v-responsive__content" style="width: 344px;"></div></div> -->

			<v-img
				src="img/logo-sks-white.png" class="mr-2" 
				style="background-size:cover; background-position:center center; max-width:55px; height:auto">
			</v-img>

			<v-app-bar-title v-text="'SKSAVIA.RU'" class="text-body-1 mt-1"></v-app-bar-title>

			<v-spacer></v-spacer>
			
			<v-btn
				class="
					hidden-xs-only 
					primary lighten-0 
					mr-3 py-0 
					elevation-20
					rounded-xl"
				
				v-for="item in menuItems"
				:href="item.adress"
				:key="item.index"
			>
				{{ item.title }}
			</v-btn>
			
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up">
			</v-app-bar-nav-icon>
		</v-app-bar>

		<v-navigation-drawer
			v-model="drawer" 
			temporary fixed 
			width=auto
		>
			<v-list nav dense>
				<v-list-item-group v-model="group" active-class="text--accent-4">
					<v-list-item v-for="item in menuItems" :key="item.index" :href="item.adress">
						<v-btn color="primary" elevation="6" x-large class="my-1">
							<v-list-item-title>
								{{ item.title }}
							</v-list-item-title>
						</v-btn>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	data: () => ({
		drawer: false, // Отображение или скрытие мобильного меню
		group: null,
	}),
	computed: {
		menuItems() {
			return [
				{
					index: '0',
					title: '+7(903)425-30-68',
					adress: 'tel:+79034253068',
				},
				{
					index: '1',
					title: 'sksavia@mail.ru',
					adress: 'mailto:sksavia@mail.ru',
				},
			]
		}
	}
}
</script>

<style>

</style>