<template>
	<div id="Detail">
		<DetailTabNav></DetailTabNav>
	</div>
</template>

<script>
	import { getDetail } from 'network/detail'

	import DetailTabNav from './children/DetailTabNav'

	export default {
		name: 'Detail',
		components: {
			DetailTabNav
		},
		created() {
			const iid = this.$route.params.iid

			this.getDetail(iid)
		},
		methods: {
			getDetail(iid) {
				getDetail(iid).then(res => {
					console.log(res);
				})
			}
		},
	}
</script>

<style scoped>

</style>