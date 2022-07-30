# CSS入门笔记 01

## 今天的主要内容为

## 简述CSS盒子模型是什么？

1. [概念](#jump1)
2. [盒模型的各个部分](#jump2)
3. [四个属性](#jump3)
4. [两种盒子模型](#jump4)

## 开始吧

###  <span id="jump1">1. 概念 </span>

* CSS盒子模型就是在网页设计中经常用到的CSS技术所使用的一种思维模型
* 定义了一种长方形的盒子——包括它们各自的内边距（padding）与外边距（margin ）
* 完整的 CSS 盒模型应用于块级盒子，内联盒子只使用盒模型中定义的部分内容
* 盒子模型主要是针对页面布局的时候来使用，规范了我们页面的所有所有元素的一个布局规范是由外向内进行布局

###  <span id="jump2">2. 盒模型的各个部分</span>

* Content box（内容区）
  * 这个区域是用来显示内容，大小可以通过设置 width 和 height
* Padding box（填充区）
  * 包围在内容区域外部的空白区域； 大小通过 padding 相关属性设置
* Border box（边框区）
  * 边框盒包裹内容和内边距。大小通过 border 相关属性设置
* Margin box（外边界区）
  * 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 margin 相关属性设置。

###  <span id="jump3">3. 四个属性</span>

* content 元素的宽和高，内容，也就是元素的width、height
* padding 在盒子里面，盒子和内容之间，显示在盒子和内容之间的空白区，补白、内填充或叫内边距
  ```css
  1. 加了padding值后，会把元素原本有的大小撑大，如果让元素原本的大小不变，需要在元素的宽高上减掉所加的padding值
  2. padding属性对背景图片不起作用的，也可以说背景图片的位置不受padding的影响
  3. 背景色会延展到padding区域
  ```
* border 盒子的边缘，盒子边缘或盒子边缘的厚度
* margin 外边距
  * 作用：控制同辈元素之间的位置关系
  * margin是现在是在元素边框以外的空白区
  * margin合并
  
     1. 哪些情况会合并
       ```css
       父子 margin 合并
       兄弟 margin 合并
      ```
     2. 如何阻止合并
    ```css
     父子合并用 padding /border 挡住
     父子合并用 overflow:hidden 挡住
     父子合并用 display:flex, 不知道为什么
     兄弟合并是符合预期的
     兄弟合并可以用 inline-block 消除
     总之要一条一条死记
     而且css的属性逐年增多，每年都可能有新的
      ```

###  <span id="jump4">4. 两种盒子模型</span>
1. 分别是
* content-box 内容盒
  * 内容就是盒子的边界
  * box-sizing:content-box;（标准模型） 
* border-box 边框盒
  * 边框才是盒子的边界
  * box-sizing:border-box;（IE模型）
2. 公式
* content-box width =内容宽度
* border-box width =内容宽度+padding+margin+border
3. 两种模式的转换（通过box-sizing的方法）
* 当设置box-sizing:content-box时，采用标准模式进行计算，默认就是这种模式；
* 当设置box-sizing:border-box时，采用怪异模式进行计算；
4. 哪个好用
* border-box （怪异盒模型）更好用
* 同时指定padding、width、border就知道了