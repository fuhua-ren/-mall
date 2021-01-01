<template>
	<div id="TabNav">
		<div class="tabNav-wrap">
			<div class="tabNav-item" 
			v-for="(item,index) in navList"
			:class="{active: index === currentIndex}"
			@click="handleIndex(index)">
				{{item}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabNav',
		props: {
			navList: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			handleIndex(index) {
				this.currentIndex = index
				this.$emit('tabClick', index)
			}
		},
	}
</script>

<style scoped>
	.tabNav-wrap {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 40px;
	}

	.active {
		color: var(--color-high-text);
		border-bottom: 2px solid var(--color-high-text);	
	}
</style>