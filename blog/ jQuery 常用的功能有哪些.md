# jQuery设计思想

## 今天的主要内容为

## 简述jQuery 常用的功能有哪些？

1. [jQuery 如何获取元素](#jump1)
2. [jQuery 的链式操作是怎样的](#jump2)
3. [jQuery 如何创建元素](#jump3)
4. [jQuery 如何移动元素](#jump4)
5. [jQuery 如何修改元素的属性](#jump5)

## 开始吧

###  <span id="jump1">1. jQuery 如果获取元素 </span>

* jQuery的基本设计思想和主要用法，就是“选择某个网页元素，然后对其进行某种操作“。这是它区别于其他JavaScript库的根本特点。
* jQuery()用于直接获取对应的元素，但它不返回这些元素，而返回一个对象，这个对象可以操作对应的元素。
* jQuery()可以简写为$()。

  ```css
   选择表达式可以是 CCS选择器：
   🫠
   $(document) //选择整个文档对象
   $('#myId') //选择ID为myId的网页元素
   $('div.myClass') //class为myClass的div元素
   $('input[name=first]') //选择name属性等于first的input元素

  ```
  ```css
   也可以是jQuery特有的表达式：
   🫠
   $('a:first') //选择网页中第一个a元素
   $('tr:odd') //选择表格的奇数行
   $('#myFrom:input') //选择表单中的input元素
   $('div:visible') //选择可见的div元素
   $('div:gt(2)') //选择所有的div元素，除了前三个
   $('div:animated') //选择当前处于动画状态的div元素

  ```

###  <span id="jump2">2. jQuery的链式操作是怎样的 </span>

* 最终选中网页元素以后，可以对它进行一系列操作，并且所有操作可以连接在一起，以链条的形式写出来。
* 它的原理在于每一步的jQuery操作，返回的都是一个jQuery对象，所以不同操作可以连在一起。
* 一个简单的例子：
  
  ```css
   🫠
   $('div') //找到div元素
    .find('h3') //选择其中的h3元素
    .eq(2) 选择第3个h3元素
    .html('hello');  //将它的内容改为Hello
  ```
* 以上的代码略显复杂，可以用链式操作直接简化为：
  ```css
    $('div').find('h3').eq(2).html('hello');
  ```
* jQuery还提供了.end()方法，使得结果集可以后退一步：
  ```css
   🫠
   $('div')
    .find('h3') 
    .eq(2) 
    .html('hello')
    .end() //退回到选中所有的h3元素的那一步
    .eq(0) //选中第一个h3元素
    .html('World'); //将它的内容改为World
  ```

###  <span id="jump3">3. jQuery如何创建元素</span>
* 创建新元素的方法非常简单，只要把新元素直接传入jQuery的构造函数就行了：
  ```css
    $('<p>hello</p>');
    $('<li class="new">new list</li>');
    $('ul').append('<li>list item</li>');
  ```

###  <span id="jump4">4. jQuery如何移动元素 </span>
* 移动元素有两种形式。
* 一组方法是直接移动该元素，另一组方法是移动其他元素，使得目标元素达到我们想要的位置。
* 假设我们有个一个div元素和一个p元素，现在需要把它移动到p元素后面
  * 第一种方法是使用.insertAfter()，把div元素移动p元素后面：
    ```css
    🫠
       $('div').insertAfter($('p'));
    ```
  * 第二种方法是使用.after()，把p元素加到div元素前面：
    ```css
    🫠
       $('p').after($('div'));
    ```
  * 注意🚀：第一种方法返回div元素，第二种方法返回p元素。可以根据需要，选择到底使用哪一种方法。
  * 其他：
    ```css
    .insertAfter()和.after(): 在现存元素的外部，从后面插入元素
    .insertBefore()和.before(): 在现存元素的外部，从前面插入元素
    .appendTO()和.append(): 在现存元素的内部，从后面插入元素
    .prependTo()和.prepend(): 在现存元素的内部，从前面插入元素
    ```

###  <span id="jump5">5. jQuery如何修改元素的属性 </span>

* 操作网页元素，最常见的需求是取得它们的值，或者对它们进行赋值。
* 使用同一个函数，来完成取值（getter）和赋值（setter），即"取值器"与"赋值器"合一。到底是取值还是赋值，由函数的参数决定。
  ```css
    $('h1').html(); //html()没有参数，表示取出h1的值
    $('h1').html('Hello'); //html()有参数Hello，表示对h1进行赋值
  ```
* 常见的取值和赋值函数：
  ```css
     .html() 取出或设置html内容
     .text() 取出或设置text内容
     .attr() 取出或设置某个属性的值
     .width() 取出或设置某个元素的宽度
     .height() 取出或设置某个元素的高度
     .val() 取出某个表单元素的值

     需要注意的是，如果结果集包含多个元素，那么赋值的时候，将对其中所有的元素赋值；取值的时候，则是只取出第一个元素的值（.text()例外，它取出所有元素的text内容）。
  ```
  参考信息：[阮一峰 🎈jQuery设计思想](http://www.ruanyifeng.com/blog/2011/07/jquery_fundamentals.html)