# 浅析 MVC

## 今天的主要内容为 🚀

1. [MVC 三个对象分别做什么，给出伪代码示例](#jump1)
2. [EventBus 有哪些 API，是做什么用的，给出伪代码示例](#jump2)
3. [表驱动编程是做什么的（可以自己查查资料）](#jump3)
4. [我是如何理解模块化的](#jump4)

## 开始吧

###  <span id="jump1">1. MVC 三个对象分别做什么，给出伪代码示例 </span>

#### 当用户通过浏览器请求一个URL时，koa将调用某个异步函数处理该URL。  
#### 通过Nunjucks把数据用指定的模板渲染成HTML，然后输出给浏览器，用户就可以看到渲染后的页面了：

![mvc](image/mvc.png)


* 什么是MVC  
  * MVC全名是Model View Controller，中文名是“模型-视图-控制器”，是一种软件设计模式。  
  * 强调分离软件的业务逻辑和显示，这种“分离”提供了更好的分工和改进的维护。

* MVC软件设计模式的三个部分是：
  * Model（模型）： 模型持有所有的数据、状态和程序逻辑。
  * View（视图）：负责界面的布局和显示。
  * Controller（控制器）：负责模型和界面之间的交互。
* MVC软件设计模式的三个对象用途：  
  * Model（模型）：用于封装与应用程序的业务逻辑相关的数据以及对数据的处理方法
    ```
    const m = {
        data:{ 程序所需要的数据 },
        create(){ 增加数据 },
        delete(){ 删除数据 },
        get(){ 获得数据 },
        update(){ 修改数据 }
    }
    ```
  * View（视图）：界面设计人员进行图形界面设计，是用户看到并与之交互的界面
    ```
    const v = {
        el:页面元素
        html:{ 显示页面的内容 },
        init(){v.el ... 元素初始化},
        render(){ 重新渲染 }
    }
    ```
  *  Controller（控制器）：是连接视图和模型桥梁，处理业务逻辑操作。它处理事件并作出响应。“事件”包括用户的行为和数据 Model 上的改变。
     ```
     const c = {
        init(){ 初始化 },
        BindEvents(){ 绑定事件 }
     }
     ```

###  <span id="jump2">2. EventBus 有哪些 API，是做什么用的，给出伪代码示例 </span>
* EventBus主要应用于简化组件之间通信与数据传输，比如：view组件、父子组件、兄弟组件。
* API：
  1. EventBus.on（）监听事件，监听数据的变化，如果数据有变化，直接render（再次将变化后的数据渲染到页面）
     ```
     this.on('m:updated', () => {
        this.render(this.data)
     })
     ```
  2. EventBus.trigger（）触发事件，当一个事件执行，eventBus 触发 m:updated
     ```
     update(data) {
         Object.assign(m.data, data)//把传进来的data直接放在m.data上
         eventBus.trigger('m:updated')//通过trigger自动更新数据
         localStorage.setItem('n', m.data.n)//储存数据
     }
     ```
  3. EventBus.off（）取消监听
     ```
     const eventList = {};
     EventBus.off = (eventName,callback)=>{
        if(eventList[eventName]){
          if(callback){
                 let index = eventList[eventName].indexOf(callback);
                 eventList[eventName].splice(index,1)
           }
      }else{
           eventList[eventName].length = 0; 
      }
     }
     ```

###  <span id="jump3">3. 表驱动编程是做什么的（可以自己查查资料）</span>
* 表驱动法就是一种编程模式(scheme)——从表里面查找信息而不使用逻辑语句(if和case)。事实上，凡是能通过逻辑语句来选择的事物，都可以通过查表来选择。
* 直接访问：将数据作为键值直接访问表。
* 索引访问：先用一个基本数据类型的数据从一张索引表中查出一个键值，然后再用这一键值查出你需要的主数据。
* 当表的数据与键值不一致时，可以（1）复制表的数据使其与键值一一对应，变成直接访问（2）创建一个索引，与表数据对应，查询时将键值转换成索引，变成索引访问。
  
  ```
  bindEvents(){
   v.el.on('click', '#add1', () => {
    m.data.n += 1
    v.render(m.data.n)
   })
   v.el.on('click', '#minus1', () => {
    m.data.n -= 1
    v.render(m.data.n)
   })
   v.el.on('click', '#mul2', () => {
    m.data.n *= 2
    v.render(m.data.n)
   })
   v.el.on('click', '#divide2', () => {
    m.data.n /= 2
    v.render(m.data.n)
   })
  }
  ```

###  <span id="jump4">4. 我是如何理解模块化的</span>
* 就是将一个复杂的程序依据一定的规则（规范）封装成几个块（文件）并进行组合。 模块的内部数据的实现是私有的，只是向外部暴露一些接口（方法）与外部其他模块通信。这则就是模块化。
* 可以降低代码耦合度，减少重复代码，使得项目结构清晰，便于维护。