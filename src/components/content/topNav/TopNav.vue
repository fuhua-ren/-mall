<template>
	<div id="topNav">
		<div class="nav-wrap">
			<div><slot name="left"></slot></div>
			<div><slot name="center"></slot></div>
			<div><slot name="right"></slot></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TopNav',
	}
</script>

<style scoped>
	.nav-wrap {
		height: 49px;
		width: 100%;
		background-color: var(--color-high-text);
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		z-index: 9;
	}
</style>