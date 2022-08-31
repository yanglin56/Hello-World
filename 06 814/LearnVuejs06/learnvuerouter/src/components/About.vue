<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容，哈哈哈哈</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "About",
  created() {
    console.log('created');
    document.title = '关于'
  }
})
</script>

<style lang="" scoped>

</style>