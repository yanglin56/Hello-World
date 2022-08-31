<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view name="path"></router-view>
    <h2>{{message}}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "Home",
  data() {
    return {
      message: '你好啊,李银河'
    }

  },
  created() {
    console.log('created');
    // this.$router.push('/home/news')
  },
  destroyed() {
    console.log('destroyed');
  },
  // 这两个函数，只有该组件被保持了状态使用了keep-alive时，才是有效的
  activated() {
    // this.$router.push(this.path);
    // this.$router.push(this.path).catch(err=>err);
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  }
  beforeRouteLeave (to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  }
})
</script>

<style lang="scss" scoped>

</style>