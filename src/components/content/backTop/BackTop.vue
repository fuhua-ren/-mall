<template>
	<div id="backTop">
		<div class="iconfont icon-huidaodingbu"></div>
	</div>
</template>

<script>
	export default {
		name: 'BackTop',
	}
</script>

<style scoped>
	#backTop {
		width: 40px;
		height: 40px;
		/* background-color: white; */
		border-radius: 50%;
		position: fixed;
		bottom: 59px;
		right: 15px;
		text-align: center;
		line-height: 40px;
	}

	.iconfont {
		color: var(--color-high-text);
		font-size: 40px;
	}
</style>