<template>
	<div class="nav">
		<div class="iconfont icon-fanhui" @click="backPage"></div>
		<TabNav class="tabNav" :navList="navList"></TabNav>
	</div>
</template>

<script>
	import TabNav from 'components/content/tabNav/TabNav'

	export default {
		name: 'DetailTabNav',
		components: {
			TabNav
		},
		data() {
			return {
				navList: ['商品','参数','评论','推荐']
			}
		},
		methods: {
			backPage() {
				this.$router.back()
			}
		},
	}
</script>

<style scoped>
	.nav {
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgb(189, 183, 183);
	}
	
	.iconfont {
		flex: 1;
		text-align: center;
		font-size: 20px;
	}

	.tabNav {
		flex: 6;
	}
</style>