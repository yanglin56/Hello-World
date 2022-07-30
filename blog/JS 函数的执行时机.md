# JS函数的执行时机

## 相关问题 🚀

* [1. 解释为什么如下代码会打印 6 个 6](#jump1)
* [2. 写出让上面代码打印 0、1、2、3、4、5 的方法](#jump2)
* [3. 除了使用 for let 配合，还有什么其他方法可以打印出 0、1、2、3、4、5](#jump3)

   ```css
    相关代码🫠

    let i = 0
    for(i = 0; i<6; i++){
    setTimeout(()=>{
     console.log(i)
     },0)
    }
  ```

## 开始吧

* JS函数的不同执行时机，会影响到函数运行的输出结果，不能通过代码本身百分百判断函数输出什么，而是要根据函数具体的执行时机。
* 时机不同，其结果就不同
* setTimeout是定时器，在定时器到期后执行一个函数或指定的一段代码，是忙完手头的事情，等会执行

###  <span id="jump1">1. 解释为什么如下代码会打印 6 个 6</span>

  ```css
   🫠
   let i = 0
   for(i = 0; i<6; i++){
   setTimeout(()=>{
     console.log(i)
    },0)
   }
  ```
  * 先执行for循环，再执行setTimeout
  * 在for循环中i执行了6遍，最后循环完i=6 
  * 循环完成后等一会再打印出i的值，这句话会执行6遍
  * 循环执行完，i=6,在i=6之后再去打印6次i,所以会得到6个6

###  <span id="jump2">2. 写出让上面代码打印 0、1、2、3、4、5 的方法</span>
  * 只要把let i = 0,写到for循环里面就好,因为js为了满足新人，在循环执行时把i复制了6遍，用来保存当前循环的值，所以最后打印i的时候,打印的是前面复制的内容

* 可以写作以下代码：
   ```css
   🫠
   for(let i=0;i<6;i++){
   setTimeout(()=>{
      console.log(i)
    },0)
   }
   ```
###  <span id="jump3">3. 除了使用 for let 配合，还有什么其他方法可以打印出 0、1、2、3、4、5</span>
   
   ```css
  🫠

   for (let i = 0; i < 6; i++) {
     setTimeout(function() {
         console.log(i); 
    },i);
   }
   ```
   ```css
   利用 const 关键字🫠
  
   let i = 0
   for(i = 0; i < 6; i++){
     const a = i
     setTimeout(()=>{
       console.log(a)
     })
   }
   ```
   ```css
   利用 setTimeout 的第三个参数,将i传进去🫠
   
   let i
   for(i = 0; i<6; i++){
   setTimeout((value)=>{
     console.log(value)
    },0,i)
   }
   ```