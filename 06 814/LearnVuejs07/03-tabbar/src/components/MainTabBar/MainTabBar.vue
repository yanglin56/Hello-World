<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
      <img
        slot="item-icon-active"
        src="../../assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../../assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="pink">
      <img slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../../assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "../tabbar/TabBarItem";
export default {
  name: "LearnVuejs07MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style  scoped>
</style>