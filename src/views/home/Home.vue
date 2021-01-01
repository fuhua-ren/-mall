<template>
	<div id="home">
		<TopNav><div slot="center">首页</div></TopNav>

		<!-- 隐藏的分类导航 -->
		<TabNav ref="header1"
		:class="isShowTab ? 'tabNav' : ''"
		@tabClick="tabClick"
		:navList="navList"
		v-show="isShowTab"></TabNav>

		<better-scroll class='wrapper'
			ref="scroll"
			:probeType="3"
			:pullUpLoad="true"
			@pullingUp="loadMore"
			@scroll="scroll">
      		<div class="content">
				<HomeSwiper class="HomeSwiper" slot="bscroll" :banner="banner"></HomeSwiper>
				<NavList :recommend="recommend"></NavList>
				<div class="line"></div>
				<PopView></PopView>
				<TabNav :navList="navList" ref="header2" @tabClick="tabClick"></TabNav>
				<Goods :showGoods="showGoods"></Goods>
      		</div>
		</better-scroll>
		<BackTop v-show="isShowBack" @click.native="backTop"></BackTop>
	</div>
</template>

<script>
	import {getHomeInfo,getGoodsInfo} from "network/home"

	import betterScroll from "components/common/better-scroll/betterScroll"

	import TopNav from "components/content/topNav/TopNav"
	import HomeSwiper from "./children/HomeSwiper"
	import NavList from "./children/NavList"
	import PopView from "./children/PopView"
	import TabNav from 'components/content/tabNav/TabNav'
	import Goods from "components/content/goods/Goods"

	import BackTop from "components/content/backTop/BackTop"


	export default {
		name: 'Home',
		components: {
			TopNav,
			HomeSwiper,
			NavList,
			PopView,
			TabNav,
			Goods,
			betterScroll,
			BackTop
		},
		data() {
			return {
				banner: [],
				recommend: [],
				navList: ['流行','新款','精选'],
				goods: {
					'pop': {page: 0, list: []},
					'new': {page: 0, list: []},
					'sell': {page: 0, list: []}
				},
				currentType: 'pop',
				offsetTop: 0,
				isShowTab: false,
				isShowBack: false
			}
		},
		computed:{
			showGoods() {
				return this.goods[this.currentType].list
			}
		},
		created() {
			this.getHomeInfo()
			this.getGoodsInfo('pop')
			this.getGoodsInfo('new')
			this.getGoodsInfo('sell')
		},
		methods: {
			// 数据请求
			getHomeInfo() {
				getHomeInfo().then(res => {
					// console.log(res);
					this.banner = res.data.banner.list
					this.recommend = res.data.recommend.list
				})
			},
			getGoodsInfo(type) {
				this.goods[type].page += 1
				// console.log(this.goods[type].page);
				getGoodsInfo(type, this.goods[type].page).then(res => {
					// console.log(res);
					this.goods[type].list.push(...res.data.list)
					this.$refs.scroll.finishPullUp()
				})
			},
			// 逻辑处理
			tabClick(index) {
				switch(index) {
					case 0:
						this.currentType = 'pop';
						break;
					case 1:
						this.currentType = 'new';
						break;
					case 2:
						this.currentType = 'sell';
						break;
				}
				this.$refs.header1.currentIndex = index
				this.$refs.header2.currentIndex = index
			},
			backTop() {
				this.$refs.scroll.scrollTo(0, 0, 500)
			},
			// BScroll的事件
			scroll(position) {
				// console.log(position);
				this.isShowBack = (-position.y) > 600

				this.isShowTab = (-position.y) > this.offsetTop
			},
			loadMore() {
				this.getGoodsInfo(this.currentType)
			}
		},
		watch: {
			// 监听图片信息的改变 重新计算图片的高度 解决滚动不顺畅的问题
			showGoods() {
				this.$refs.scroll.refresh()
			}
		},
		mounted() {
			setTimeout(() => {
				this.offsetTop = this.$refs.header2.$el.offsetTop
				// console.log(this.offsetTop);
			},500)
		},
	}
</script>

<style scoped>
	#home {
		height: 100vh;
		position:relative;
	}

	.wrapper {
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0px;
		right: 0px;
		background-color: white;
	}

	.line {
		width: 100%;
		height: 6px;
		background-color: rgb(238,238,238);
	}

	.tabNav {
		position: relative;
		top: 49px;
		background-color: white;
		z-index: 999;
	}
</style>