<template>
	<div id="homeSwiper">
		<Swiper>
			<SwiperItem v-for="item in banner" :key="item.title">
				<a :href="item.link">
					<img :src="item.image" alt="">
				</a>
			</SwiperItem>
		</Swiper>
	</div>
</template>

<script>
	import {Swiper, SwiperItem} from "components/common/swiper"

	export default {
		name: 'HomeSwiper',
		components: {
			Swiper, 
			SwiperItem
		},
		props: {
			banner: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	
</style>