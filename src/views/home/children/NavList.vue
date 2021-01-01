<template>
	<div id="NavList">
		<div class="navList-warp" v-for="item in recommend" :key="item.sort">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NavList',
		props: {
			recommend: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	#NavList {
		display: flex;
		justify-content: space-between;
		margin: 5px;
		font-size: 14px;
		padding-bottom: 10px;
	}

	#NavList img {
		width: 70px;
	}

	a div {
		text-align: center;
	}
</style>