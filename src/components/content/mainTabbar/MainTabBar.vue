<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <i slot="item-icon" class="iconfont icon-shouye"></i>
      <i slot="item-icon-active" class="iconfont icon-shouye active"></i>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <i slot="item-icon" class="iconfont icon-fenlei"></i>
      <i slot="item-icon-active" class="iconfont icon-fenlei active"></i>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <i slot="item-icon" class="iconfont icon-gouwuche1"></i>
      <i slot="item-icon-active" class="iconfont icon-gouwuche1 active"></i>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <i slot="item-icon" class="iconfont icon-wode"></i>
      <i slot="item-icon-active" class="iconfont icon-wode active"></i>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  .active {
    color: var(--color-high-text);
  }
</style>
