# CSS入门笔记 02

## 今天的主要内容为

## CSS 动画知识总结

1. [动画的原理](#jump1)
2. [浏览器渲染原理](#jump2)
3. [CSS动画优化](#jump3)
4. [CSS 动画的两种做法（transition 和 animation）](#jump4)
5. [其他需要注意](#jump5)
 
## 开始吧

###  <span id="jump1">1. 动画的原理 </span>

* 定义
  * 由许多静止的画面（帧）
  * 以一定的的速度（如每秒30张）连续播放时
  * 肉眼因视觉残象产生错觉
  * 而误以为是活动的画面
* 概念
  * 帧：每个静止的画面都叫做帧
  * 播放速度：每秒24帧（影视）或者每秒30帧（游戏）
  
###  <span id="jump2">2. 浏览器渲染原理 </span>

* 步骤
  * 根据HTML构建HTML树（树）
  * 根据CSS构建CSS树（CSSOM）
  * 将两棵树合并成一棵渲染树（render tree）
  * Layout布局（文档流、盒模型、计算大小和位置）
  * Paint绘制（把边框颜色、文字颜色、阴影等画出来）
  * Comepose合成（根据层叠关系展示画面）
* 三棵树
![图例](/image/01.png)

* 如何更新样式  
一般我们用js来更新样式
  * 比如div.style.background = 'red'
  * 比如div.style.display = 'none'
  * 比如div.classList.add('red')
  * 比如div.remove()删除节点
* 三种更新方式
![图例](/image/02.png) 
  * 第一种，全走
    * div.remove() 触发当前消失，其他元素relayout
  * 第二种，跳过layout
    * 改变背景颜色，直接repaint+composite
  * 第三种，跳过layout和paint
    * 改变transform，只需composite  
    * 注意必须全屏查看效果，在iframe里看问题）

###  <span id="jump3">3. CSS动画优化 </span>

* [具体请查阅Google文档](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count)
* JS优化：使用requestAnimationFrame代替setTimeout或setlntervl
* CSS优化：使用will-change或translate 
  
###  <span id="jump4">4. CSS 动画的两种做法（transition 和 animation） </span>
  * ⭐ transform  
    * 四个常用功能  
      * 位移 translate
      * 缩放 scale
      * 旋转 rotate
      * 倾斜 skew
       
       🔖 经验：  
       * 一般都需要配合transition过渡
       * inline元素不支持transform，需要先改变成block
    * transform: translate  
    常用写法🚀
      * translateX(像素(px) / 百分比(%))
      * translateY(像素(px) / 百分比(%))
      * translate(<像素 / 百分比>,<像素 / 百分比>？)
      * translateZ(像素) 且父容器加perspective
      * translate3d(x,y,z)  
  
       🔖 经验：  
       * 多看MDN语法

       * translate(-50%,-50%)可做绝对定位元素居中  
  
     ```css
    示例 🫠

    #demo{
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    }
    ```

    * transform: scale  
    常用写法🚀
      * scaleX(倍数)
      * scaleY(倍数)
      * scale(倍数，倍数)

       🔖 经验：  
       * 用的较少，因为容易出现模糊

    * transform: rotate  
    常用写法🚀
      * rotate( | )
      * rotateZ( | )
      * rotateX( | )
      * rotateY( | )
      * rotate3D 比较复杂

       🔖 经验：  
       * 一般用于360度旋转制作loading
       * 用到的时候再搜索rotate MDN 看文档
        
    * transform: skew  
    常用写法🚀
      * skewX( | )
      * skewY( | )
      * skew( | )  
       
      🔖 经验：  
       * 不常用
    * transform 可以组合使用🫠
      * transform：scale（0.5）translate（-100%，-100%）；
      * transform：none；取消所有
 * ⭐ transition 过渡
   * 作用：补充中间帧
   * 语法
     * transition: 属性名 时长 过渡方式 延迟
     * transition: left 200ms linear
     * 可以用逗号分隔开两个不同的属性
     * transition: left200ms，top400ms
     * 可以用all代表所有属性
     * transition: 200ms
     * 过度方式有： linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier|step-start|step-end|steps,具体含义要靠数学知识
   * 并不是所有的属性都能过度🎈
     * display: none => block 不能过渡
     * 要改成visibility: hidden => visible
     * background 颜色可以过渡
     * opacity 透明度可以过渡
 * ⭐ animation
   * 缩写语法
     * animation: 时长 | 过渡方式 | 延迟 | 次数 | 方向 | 填充模式 | 是否暂停 | 动画名
     * 时长: 1s 或者 1000ms
     * 过渡方式: 跟transition的取值一样，如linear
     * 次数: 3 或 n 或者 infinite
     * 方向: reverse | alternate | alternate-reverse
     * 填充模式: none | forwards | backwards | both
     * 是否暂停: paused | running
     * 这些属性都有对应的单独属性

   * @keyframes  
   常用写法🚀
     * 搜索keyframes MDN 讲得很详细
     * 一种写法是from to
     * 另外一种是百分数
  
   ```css
    示例 🫠

    @keyframes slidein{
    from {
        transform:translateX(0%);
     }
    to {
        transform:translateX(100%);
     }
    }
   ```
   ```css
    示例 🫠

    @keyframes identifier{
    0% {top:0;left:0;}
    30% {top:50px;}
    68% {left:50px;}
    100% {top:100px;left:100%;}
    }
   ```
###  <span id="jump5">5. 其他需要注意 </span>

* 过渡必须要有起始
  * 一般只有一次动画，或者两次
  * 比如hover和非hover状态的过渡