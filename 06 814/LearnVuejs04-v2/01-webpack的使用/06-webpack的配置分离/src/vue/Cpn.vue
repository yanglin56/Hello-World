<template>
  <div>
    <h2>我是cpn组件的标题</h2>
    <p>我是cpn组件的内容，嘿嘿嘿嘿嘿</p>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
  export default {
    name:"Cpn",
    data(){
      return {
        name:"Cpn组件的name"
      }
    }
  }
</script>

<style scoped>
</style>