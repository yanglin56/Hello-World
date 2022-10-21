# Vue 的生命周期

## 今天的主要内容为

## 聊一聊什么是 Vue 的生命周期

1. [Vue 的生命周期是什么](#jump1)
2. [vue 生命周期的八个阶段](#jump2)
3. [jQuery 如何创建元素](#jump3)
4. [jQuery 如何移动元素](#jump4)
5. [jQuery 如何修改元素的属性](#jump5)

## 开始吧

###  <span id="jump1">1.Vue 的生命周期是什么</span>
* Vue生命周期是指vue实例对象从创建之初到销毁的过程，vue所有功能的实现都是围绕其生命周期进行的，在生命周期的不同阶段调用对应的钩子函数可以实现组件数据管理和DOM渲染两大重要功能。
###  <span id="jump2">2.vue生命周期可以分为八个阶段，分别是</span>
* beforeCreate（创建前）
  * 对应的钩子函数为beforeCreate。此阶段为实例初始化之后，此时的数据观察和事件机制都未形成，不能获得DOM节点。
* created（创建后）
  * 对应的钩子函数为created。在这个阶段vue实例已经创建，仍然不能获取DOM元素。
* beforeMount（载入前）
  * 对应的钩子函数是beforeMount，在这一阶段，我们虽然依然得不到具体的DOM元素，但vue挂载的根节点已经创建，下面vue对DOM的操作将围绕这个根元素继续进行；beforeMount这个阶段是过渡性的，一般一个项目只能用到一两次。
* mounted（载入后）
  * 对应的钩子函数是mounted。mounted是平时我们使用最多的函数了，一般我们的异步请求都写在这里。在这个阶段，数据和DOM都已被渲染出来。
* beforeUpdate（更新前）
  * 对应的钩子函数是beforeUpdate。在这一阶段，vue遵循数据驱动DOM的原则；beforeUpdate函数在数据更新后虽然没立即更新数据，但是DOM中的数据会改变，这是Vue双向数据绑定的作用。
* updated（更新后）
  * 对应的钩子函数是updated。在这一阶段DOM会和更改过的内容同步。
* beforeDestroy（销毁前）
  * 对应的钩子函数是beforeDestroy。在上一阶段vue已经成功的通过数据驱动DOM更新，当我们不在需要vue操纵DOM时，就需要销毁Vue，也就是清除vue实例与DOM的关联，调用destroy方法可以销毁当前组件。在销毁前，会触发beforeDestroy钩子函数。
* destroyed（销毁后）
  * 对应的钩子函数是destroyed。在销毁后，会触发destroyed钩子函数。

vue的生命周期的思想贯穿在组件开发的始终，通过熟悉其生命周期调用不同的钩子函数，我们可以准确地控制数据流和其对DOM的影响;
vue生命周期的思想是Vnode和MVVM的生动体现和继承。