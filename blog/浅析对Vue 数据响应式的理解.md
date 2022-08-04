# 浅析对Vue 数据响应式的理解

## 今天的主要内容为 🚀

1. [什么是响应式？](#jump1)
2. [什么是数据响应式呢？](#jump2)
3. [Vue中如何实现数据响应式？](#jump3)
4. [Object.defineProperty是什么呢？](#jump4)



## 开始吧

###  <span id="jump1">1.什么是响应式</span>

* 响应式是一个抽象的概念，并不是一个具体的实例
* 对外界的刺激能做出反应的，就称为响应式
  
###  <span id="jump2">2.什么是数据响应式呢？</span>

* 按照尤雨溪[官网](https://cn.vuejs.org/v2/guide/reactivity.html)解释，Vue 最独特的特性之一，是其非侵入性的响应式系统。
* 数据模型仅仅是普通的 JavaScript 对象。而当你修改它们时，视图会进行更新。
  ```
   举个例子🫠

   const vm = new Vue({
       data:{
         n:0
        }
       })；

   当我直接修改vm.n的时候，n就会响应我，直接进行更新
  ```
    
###  <span id="jump3">3. Vue中如何实现数据响应式？</span>
* 官方解释
  * 当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。
  * 这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在 property 被访问和修改时通知变更。
  * 每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。
  ![图片](image/804.png)
*  get和set分别是什么呢？
   *  get:是一个不加括号的函数（用的时候不加括号），用于获取一个值
   *  set:通过计算属性可以设置其他的原始属性
   *  我们可以通过get和set来修改对象属性从而实现数据响应。

###  <span id="jump4">4. Object.defineProperty是什么呢？</span>
* 在你定义完对象之后，再想加一个getter和setter，那么就需要Object.defineProperty。
  ```
  Object.defineProperty(obj2,'xxx',{
     get(){
        return _xxx
     },
     set(value){
        _xxx = value
     }
  })

  ```
* 除此功能之外，Object.defineProperty还有其他的功能
  * 代理
    * 对myData对象的属性读写，全权由另一个对象vm负责
    * 那么vm就是myData的代理（类比房东租客）
      ```
        let data3 = proxy({data:{n:0}})

        function proxy({data}

        const {data} = option;

        const obj = {}

        Object.defineProperty(obj,'n',{

        get(){

        return data.n

        },

        set(value){

        if(value<0)return

        data.n = value

        }

        })

        return obj  //obj就是代理

        }
      ```
  * 监听
     ```
       vm = new Vue({data:myData})
       让vm成为myData的代理(proxy)
       会对myData的所有属性进行监控
       监控目的,防止myData的属性变了，vm不知道
       如果vm知道，那么属性改变就可以调用render(data)
       UI = render(data)
     ```
  * 给数组添加元素
    * 可以用set来新增key,更新UI,在Vue里面，可以通过篡改7个api来方便对数组进行增删，这7个api会 自动处理监听和代理，并更新UI
    * 这7个api分别是： push(),pop(),shift(),unshift(),splice(),sort(),reverse()
    * 结论：数组新增key最好通过这7个api。