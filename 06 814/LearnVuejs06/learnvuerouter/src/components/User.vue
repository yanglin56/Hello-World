<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户内容，嘿嘿</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.id}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  created() {
    console.log('created');
    document.title = '用户'
  },
  computed: {
    userId() {
      return this.$route.params.id
    }
  },
  methods: {
    btnClick() {
      // 所有的组件都继承着Vue的原型
      console.log(this.$router);
      console.log(this.$route);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>