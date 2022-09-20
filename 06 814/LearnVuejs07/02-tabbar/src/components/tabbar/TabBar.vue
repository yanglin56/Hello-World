<template>
  <div id="tab-bar">
    <div class="tar-bar-item">首页</div>
    <div class="tar-bar-item">分类</div>
    <div class="tar-bar-item">购物车</div>
    <div class="tar-bar-item">我的</div>
  </div>
</template>

<script>
export default {
  name: "LearnVuejs07TabBar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
#tab-bar {
  display: flex;
  background: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
.tar-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
</style>