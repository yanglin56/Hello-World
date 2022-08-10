# Vue 中的 .sync 修饰符

## 今天的主要内容为 🚀

1. [什么是.sync 修饰符](#jump1)
2. [.sync应用实例](#jump2)

## 开始吧

###  <span id="jump1">1. 什么是.sync 修饰符</span>
* .sync实际是Vue用于实现双向绑定时，[Vue官网](https://v2.cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6)提供的语法糖。
* vue的prop是单向下行绑定：父级的prop的更新会向下流动到子组件中，但是反过来不行。可是有些情况，我们需要对prop进行“双向绑定”。这个时候，就可以用.sync来解决。
  
  ```
  <text-document :title.sync="doc.title"></text-document>

  //当子组件需要更新 title 的值时，它需要显式地触发一个更新事件：

  this.$emit('update:title', newValue)
  ```
* 这样title的属性在子组件内部更新，父组件也能感知的到，实现了“双向绑定”。

###  <span id="jump2">2. .sync应用实例</span>
``` 
  <div id="app" class="app">
        APP.vue 我现在有 {{total}}元
        <hr>
        // 原来写法
        <!-- <Child :money="total" v-on:update:money="total = $event"></Child> -->
        // .sync语法糖
        <Child :money.sync="total"></Child>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.min.js"></script>
    <script>
        // 子组件
        const Child = Vue.extend({
            template: `
               <div id="Child" class="Child">
                  {{money}}
                  <button @click="$emit('update:money',money-100)">
                    <span>花钱</span>
                  </button> 
                </div>
            `,
            props: ["money"]
        })

        // root组件（父组件）
        const app = new Vue({
            el: '#app',
            data: {
                total: 100000,
            },
            components: {
                Child: Child
            }
        })
    </script>
```
说明：
```
代码Child :money="total" v-on:update:money="total = $event"></Child>
简写为<Child :money.sync="total"></Child>就是语法糖
```