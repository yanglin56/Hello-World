# HTML入门笔记 01

## 今天的主要内容为
###### HTML重难点标签


1. [a 标签的用法?](#jump1)
2. [img 标签的用法?](#jump2)
3. [table 标签的用法?](#jump3)
4. [form 标签的用法?](#jump4)
5. [input 标签的用法?](#jump5)
6. [其他感想?](#jump6)

## 开始吧

###  <span id="jump1">1. a 标签的用法 </span>
1. 什么是 a 标签
* HTML 使用超级链接与网络上的另一个文档相连。 超链接可以是一个字，一个词，或者一组词，也可以是一幅图像，可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。
* 在HTML中使用 a 标签可以创建链接

2. 属性
* href
  
    * href属性值：链接目标的路径地址。可以使用相对路径或网址形式的绝对路径。

    * href属性非常重要，a标签要想实现点击跳转，必须设置该属性，拥有这个属性a标签在鼠标移上时才会显示一个小手指针状态。

* target
    * 使用target 属性，可以定义被链接的文档在何处跳转显示
    * 内置名字
      * _self：默认值，表示跳转的页面在当前窗口打开，不会打开新的窗口
      * _blank：空白的，表示跳转的页面在新窗口打开
      * _top：打开的页面占据了整个页面
      * _parent：将链接的文件载入含有该链接框架的父框架集或父窗口中
    * 程序员命名
      * window的name
      * iframe的name

* download
  *  作用：下载页面
  *  问题：不是所有浏览器支持，尤其是手机浏览器
* rel=noopener
* iframe
  * 内嵌窗口
  * 已经很少使用，还有些老系统会用

3. 作用
* 跳转到外部页面
* 跳转到内部锚点
* 跳转到邮箱或电话等
  

###  <span id="jump2">2. img 标签的用法</span>
1. 作用
* 发出get请求，展示一张图片
2. 属性
 * alt
 * height
 * width 规定宽度
 * src
3. 事件
* onload
* onerror
4. 响应式
* max-width:100%
5. 可替换元素
* 考试可能会问的题目，被问概率30%
###  <span id="jump3">3. table 标签的用法</span>
1. 作用
* 定义 HTML 表格
2. 相关的标签
* table
  * 定义 HTML 表格
  * 简单的 HTML 表格由 table 元素以及一个或多个 tr、th 或 td 元素组成
* thead
* tbody
* tfoot
* tr
* td
* th
3. 相关的样式
* table-layout
* border-collapse
* border-spacing 设置相邻单元格的边框间的距离

###  <span id="jump4">4. form 标签的用法</span>
1. 作用
* 发get或post请求，然后刷新页面
2. 属性
* action
* autocomplete
* method
* target
3. 事件
* onsubmit
###  <span id="jump5">5. input 标签的用法</span>
1. 作用
* 让用户输入内容
2. 属性
* 类型 type:
  * button
  * checkbox
  * email
  * file
  * hidden
  * number
  * password
  * radio
  * search
  * submit
  * tel
  * text
* 其他 name:
  * autofocus
  * checked
  * disabled
  * maxlength
  * pattern
  * value
  * placeholder
3. 事件
* onchange
* onfocus
* onblur
4. 验证器
* HTML 5 新增功能
###  <span id="jump6">6. 其他标签</span>
1. video
2. audio
3. canvas
4. svg
* 注意事项
  * <font style="color:red;">这些标签的兼容性一定要查文档</font>





