<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
  import MainTabBar from "components/content/mainTabbar/MainTabBar"
  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style> 
  @import "assets/css/base.css";
  @import "assets/css/iconfont.css";
  #app {
    height: 1000px;
  }
</style>
