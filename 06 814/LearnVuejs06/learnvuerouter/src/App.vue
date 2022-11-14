<template>
  <div id="app">
    <h1>我是App网站的标题</h1>
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link> -->
    <!-- <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
    <!-- // 在路由里设置 -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link> -->
    <!-- <router-link to="/about" tag="button" replace>关于</router-link> -->
    <!-- <button @click="homeClick">首先</button> -->
    <!-- <button @click="aboutClick">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/'+userId">用户</router-link> -->
    <!-- <router-link to="/profile">档案</router-link> -->
    <!-- <router-link :to="{path:'/profile', query: {name:'why', age:18,height:1.88}}">档案</router-link> -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <keep-alive exclude="Profile,User">
      <router-view />
    </keep-alive>
    <h2>我是App中一些底部版权信息</h2>
  </div>
</template> 

<script lang="ts">
export default {
  name: "App",
  data() {
    return {
      userId: "lisi",
    };
  },
  methods: {
    homeClick() {
      //通过代码修改路由 vue-router
      //push => pushState
      // this.$router.push('/home')
      this.$router.replace("/home");
      console.log("homeClick");
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace("/about");
      console.log("homeClick1");
    },
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "kobe",
          age: 19,
          height: 1.88,
        },
      });
    },
  },
};
</script>

<style>
/* .router-link-active {
  color: #f00;
 } */
.active {
  color: #f00;
}
</style>
