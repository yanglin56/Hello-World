<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar />
  </div>
</template>

<script>
import MainTabBar from "./components/MainTabBar/MainTabBar.vue";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
.tar-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tar-bar-item img {
  width: 24px;
  height: 24px;
}
</style>
