<template>
	<div id="GoodsItem" @click="goodsPage">
		<img :src="item.show.img" alt="">
		<div class="goodsTitle">{{item.title}}</div>
		<div class="goodsItemInfo">
			<div class="price">￥{{item.price}}</div>
			<div class="iconfont icon-shoucang"></div>
			<div class="cfav">{{item.cfav}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodsItem',
		props: {
			item: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			goodsPage() {
				// console.log(this.item);
				this.$router.push('/detail/' + this.item.iid)
			}
		},
	}
</script>

<style scoped>
	#GoodsItem {
		width: 46vw;
	}

	#GoodsItem img {
		width: 46vw;
		border-radius: 6px;
	}

	.goodsTitle {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.goodsItemInfo {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.price {
		color: var(--color-high-text);
		padding-right: 2px;
	}
</style>