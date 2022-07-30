# call、apply、bind的用法分别是什么？

## 今天的主要内容为

## 简述

1. [call、apply、bind的用法分别是什么？](#jump1)
2. [call、apply、bind的区别是什么？](#jump2)


## 开始吧

###  <span id="jump1">1. call、apply、bind的用法分别是什么？</span>

call、apply、bind作用是改变函数执行时的上下文，简而言之就是改变函数运行时的this指向

那么什么情况下需要改变this的指向呢？下面举个例子：
```css
var name = "lucy";
var obj = {
    name: "martin",
    say: function () {
        console.log(this.name);
    }
};
obj.say(); // martin，this 指向 obj 对象
setTimeout(obj.say,0); // lucy，this 指向 window 对象
```
从上面可以看到，正常情况say方法输出martin

但是我们把say放在setTimeout方法中，在定时器中是作为回调函数来执行的，因此回到主栈执行时是在全局执行上下文的环境中执行的，这时候this指向window，所以输出lucy

我们实际需要的是this指向obj对象，这时候就需要该改变this指向了
```css
setTimeout(obj.say.bind(obj),0); //martin，this指向obj对象
```
###  <span id="jump2">2. call、apply、bind的区别分别是什么？</span>
* call
  * call 方法第一个参数是要绑定给this的值，后面传入的是一个参数列表。当第一个参数为null、undefined的时候，默认window。
     ```css
       var arr = [1, 2, 3, 89, 46]
       var max = Math.max.call(null, arr[0], arr[1], arr[2], arr[3], arr[4])//89
     ```
  * 可以理解为
    ```css
      obj1.fn() 
      obj1.fn.call(obj1);

      fn1()
      fn1.call(null)

      f1(f2)
      f1.call(null,f2)
    ```
  * 比如
    ```css
      var obj = {
          message: 'My name is: '
      }

      function getName(firstName, lastName) {
         console.log(this.message + firstName + ' ' + lastName)
      }

      getName.call(obj, 'Dot', 'Dolby')
    ```

* apply
  * apply接受两个参数，第一个参数是要绑定给this的值，第二个参数是一个参数数组。当第一个参数为null、undefined的时候，默认指向window。
    ```css
       var arr = [1,2,3,89,46]
       var max = Math.max.apply(null,arr)//89
    ```
  * 可以这么理解
    ```css
       obj1.fn() 
       obj1.fn.apply(obj1);

       fn1()
       fn1.apply(null)

       f1(f2)
       f1.apply(null,f2)
    ```
  * 事实上apply 和 call 的用法几乎相同, 唯一的差别在于：当函数需要传递多个变量时, apply 可以接受一个数组作为参数输入, call 则是接受一系列的单独变量。
  * 举个例子
    ```css
       var obj = {
          message: 'My name is: '
       }

       function getName(firstName, lastName) {
          console.log(this.message + firstName + ' ' + lastName)
       }

       getName.apply(obj, ['Dot', 'Dolby'])// My name is: Dot Dolby
    ```
    可以看到，obj 是作为函数上下文的对象，函数 getName 中 this 指向了 obj 这个对象。参数 firstName 和 lastName 是放在数组中传入 getName 函数。
    call和apply可用来借用别的对象的方法，这里以call()为例：
    ```css
       var Person1  = function () {
           this.name = 'Dot';
       }
       var Person2 = function () {
           this.getName = function () {
              console.log(this.name);
           }
           Person1.call(this);
       }
       var person = new Person2();
       person.getName();       // Dot
    ```
  * 对于什么时候该用什么方法，其实不用纠结。如果你的参数本来就存在一个数组中，那自然就用 apply，如果参数比较散乱相互之间没什么关联，就用 call。像上面的找一组数中最大值的例子，当然是用apply合理。
* bind
  * 和call很相似，第一个参数是this的指向，从第二个参数开始是接收的参数列表。区别在于bind方法返回值是函数以及bind接收的参数列表的使用。
  * bind返回值是函数
    ```css
       var obj = {
           name: 'Dot'
       }    

       function printName() {
           console.log(this.name)
       }

       var dot = printName.bind(obj)
       console.log(dot) // function () { … }
       dot()  // Dot
    ```
    * 参数的使用
    ```css
       function fn(a, b, c) {
          console.log(a, b, c);
       }
       var fn1 = fn.bind(null, 'Dot');

       fn('A', 'B', 'C');            // A B C
       fn1('A', 'B', 'C');           // Dot A B
       fn1('B', 'C');                // Dot B C
       fn.call(null, 'Dot');      // Dot undefined undefined
    ```
    call 是把第二个及以后的参数作为 fn 方法的实参传进去，而 fn1 方法的实参实则是在 bind 中参数的基础上再往后排。
    

### 总结
* 三者都可以改变函数的this对象指向
* 三者第一个参数都是this要指向的对象，如果如果没有这个参数或参数为undefined或null，则默认指向全局window
* 三者都可以传参，但是apply是数组，而call是参数列表，且apply和call是一次性传入参数，而bind可以分为多次传入
* bind是返回绑定this之后的函数，apply、call 则是立即执行
