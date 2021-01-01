<template>
	<div class="wrapper" ref="wrapper">
		<slot></slot>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
  
	export default {
	  name: "betterScroll",
	  props: {
		probeType: {
			type: Number,
			default: 0
		},
		pullUpLoad: {
			type: Boolean,
			default: false
		}
	  },
	  data() {
		return {
		  scroll: null
		}
	  },
	  mounted() {
		// 1.创建BScroll对象
		this.scroll = new BScroll(this.$refs.wrapper, {
			// 新版本中要加上 observeDOM: true 才能进行滚动
			observeDOM: true,
			click: true,
			// probeType 1一段时间派发scroll事件 2滚动实时派发 3实时加动画
			probeType: this.probeType,
			// 拉上事件
			pullUpLoad: this.pullUpLoad
		})
		// 监听混动位置
		this.scroll.on('scroll',(position) => {
			// console.log(position);
			this.$emit('scroll',position)
		})

		// 监听上拉事件
		this.scroll.on('pullingUp', () => {
			// console.log('到底了');
			this.$emit('pullingUp')
		})
	  },
	  methods: {
		// 滚动到指定的位置
		scrollTo(x, y, time=300) {
        // 这里加上判断 scroll是否为undefined 网速太快组件未加载完成 导致的undefined
			this.scroll && this.scroll.scrollTo(x, y, time)
		},
		// 触发这个事件才能重新加载第三页
		finishPullUp() {
			this.scroll && this.scroll.finishPullUp()
		},
		// 刷新
		refresh() {
			this.scroll && this.scroll.refresh();
			// console.log("抖动函数生效");
		},
		getScrollY() {
			return this.scroll ? this.scroll.y : 0
		}
	  }
	}
</script>
  
<style scoped>
  
</style>
  