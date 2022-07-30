# HTML入门笔记 01

## 今天的主要内容为


1. [HTML 是谁发明的？](#jump1)
2. [HTML 起手应该写什么？](#jump2)
3. [常用的表章节的标签有哪些？](#jump3)
4. [全局属性有哪些？](#jump4)
5. [常用的内容标签有哪些？](#jump5)

## 开始吧

###  <span id="jump1">1.HTML 是谁发明的 </span>



* HTML的英文全称是 Hyper Text Markup Language，即超文本标记语言。
    
* HTML是由Web的发明者 Tim Berners-Lee于1990年创立的一种标记语言，它是标准通用化标记语言SGML的应用。

### <span id="jump2">2.HTML 起手应该写什么 </span>


```javascript
<!DOCTYPE html>   # 告诉浏览器文档类型是 html
<html lang="en">   # 浏览器页面的语言是en英语，可以改为 zh-CN，网页的语言就是中文。在浏览器的翻译功能中，就是依赖该字段去翻译。
<head>
  <meta charset="utf-8">   # 告诉浏览器文件的字符编码是 UTF-8
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />   # 禁用缩放，兼容手机
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />   # 告诉 IE 浏览器使用最新的内核
  <title>JS Bin</title>   # 该页面的标题为 Document,用户可修改
</head>
<body>

</body>
</html>
```

### <span id="jump3">3.常用的表章节的标签有哪些 </span>
* h1~h6 标题 
* section 章节
* article 文章
* p 段落
* header 头部 
* footer 脚部 
* main 主要内容
* aside 旁支内容
* div 划分 

### <span id="jump4">4.全局属性有哪些</span>
##### 所有标签都有的属性
1. class
2. contenteditable （使其部分内容可编辑）
3. hidden
4. id （尽量不要使用）
5. style
6. tabindex （键盘tab使用后选中的顺序：0表示最后一个 -1永远不访问 正数按顺序）
7. title

### <span id="jump5">5.常用的内容标签有哪些</span>
* ol+li 有序列表
* ul+li 无序列表
* dl+dt+dd 自定义列表 （dt：对象 dd：描述）
* pre 保留行内输入的空格
* hr 分割线
* br 强制换行
* a 超链接
* em 表示语气的强调（斜体）
* strong 表示重要内容 （加粗）
* code 保留等宽，可通过与“pre”标签组合达到输出代码段的效果
* quote 引用，但没有较明显的区别，是行内元素（与span类似）
* blockquote 引用，块级元素


