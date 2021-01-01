<template>
	<div id="Goods">
		<div class="GoodsItem" >
			<GoodsItem v-for="item in showGoods"  :item="item"></GoodsItem>
		</div>
	</div>
</template>

<script>
	import GoodsItem from './GoodsItem'

	export default {
		name: 'Goods',
		components: {
			GoodsItem
		},
		props: {
			showGoods: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
  .GoodsItem {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
	font-size: 14px;
	/* margin-top: 5px; */
  }

</style>