<template>
    <div class="red">
        这里是 Demo 的内部
        {{message}}
      <button @click="fn">call fn</button>
    </div>
</template>
<script>
  export default {
        props:['message','fn']
     }
</script>
<style scoped>
 .red{
    color:red;
    border:1px solid red;
 }
</style>