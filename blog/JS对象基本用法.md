# JavaScript对象基本用法

## 今天的主要内容为 🚀

####  JS对象基本用法：

* [1. 声明对象的两种语法](#jump1)
* [2. 如何删除对象的属性](#jump2)
* [3. 如何查看对象的属性](#jump3)
* [4. 如何修改或增加对象的属性](#jump4)
* [5. 'name' in obj 和 obj.hasOwnProperty('name)的区别](#jump5)

## 开始吧

###  <span id="jump1">1. 声明对象的两种语法</span>
* 对象的生成方法
  * 对象（object）是 JavaScript 语言的核心概念，也是最重要的数据类型
  * 唯一一种复杂类型
  * 什么是对象？
    * 简单说，对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。
  * 属性名
      * 每个key都是对象的属性名
  * 属性值
      * 每个value都是对象的属性值
  
      ```css
        🫠
        var obj = {
        foo:'Hello'
        bar:'World'
      }

      上面代码中，大括号就定义了一个对象，它被赋值给变量obj，所以变量obj就指向一个对象。该对象内部包含两个键值对（又称为两个“成员”），第一个键值对是foo: 'Hello'，其中foo是“键名”（成员的名称），字符串Hello是“键值”（成员的值）。
      ```
      * 如果键名是数值，会被自动转为字符串。
      * 如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错。
      
  * 声明对象的两种语法
    * 两种语法
      * 第一种是通过字面量的形式
      * 第二种是通过new Object()的形式
    * 具体写法
      ```css
      🫠
      let obj = {'name':'frank','age':18}
      🫠
      let obj = new Object({'name':'frank'})
      console.log({'name':'frank,'age':18})

      * 键名是字符串，不是标识符，可以包含任意字符
      * 引号可以省略，省略之后就只能写标识符
      * 就算引号省略了，键名也还是字符串（重要）
      ```
    * 两种方式比较
      * 第一种写法是简单的写法，第二种才是正规的写法。
      * {}叫做对象字面量，new Object()则是使用构造器函数。
      * 对象字面量的声明方式比构造器函数更加方便。
      * 所以在JS中建议以对象字面量的声明方式优先。

###  <span id="jump2">2. 如何删除对象的属性</span>

* delete命令用于删除对象的属性，删除成功后返回true。
* 写法
  * delete obj.xxx或者delete obj['xxx']
    * 即可删除obj的xxx属性
    * 请区分「属性值为undefined」和「不含属性名」
  * 不含属性名
    * 'xxx' in obj ===false
  * 含有属性名，但是值为undefined
    * 'xxx' in obj &&obj.xxx===undefined
  * 注意obj.xxx===undefined
    * 不能断定'xxx'是否为obj的属性
   ```css
    var obj = { p: 1 };
    Object.keys(obj) // ["p"]

    delete obj.p // true
    obj.p // undefined
    Object.keys(obj) // []
    上面代码中，delete命令删除对象obj的p属性。删除后，再读取p属性就会返回undefined，而且Object.keys方法的返回值也不再包括该属性。

    注意，删除一个不存在的属性，delete不报错，而且返回true。
    ```
###  <span id="jump3">3. 如何查看对象的属性</span>

* 查看一个对象本身的所有属性，可以使用Object.keys方法。
* 具体写法
  * 查看自身所有属性
    * Object.keys(obj)
  * 查看自身+共有属性
    * console.dir(obj)
    * 或者自己依次用Object.keys打印出obj.__ proto __
  * 判断一个属性是自身的还是共有的属性
    * obj.hasOwnProperty('toString')
    ```css
    var obj = {
    key1: 1,
    key2: 2
    };

    Object.keys(obj);
    // ['key1', 'key2']
    ```
* 两种方法查看属性
   * 中括号语法:obj['key']
   * 点语法:obj.key 
   * 请优先使用中括号语法
     * 点语法会误导你，让你以为key不是字符串
     * 等你确定不会弄混两种语法，再改用点语法
* 共有属性（隐藏属性名）理论上并没有规定，叫什么都可以，所不推荐第二种打印隐藏属性的方法

###  <span id="jump4">4. 如何修改或增加对象的属性</span>
* 直接赋值
  ```
  let obj ={name:'frank'} //name是字符串
  obj.name ='frank' //name是字符串
  obj['name']='frank' 
  obj[name]='frank' //错，因为name值不确定
  obj['na'+'me']='frank'
  let key ='name';obj[key]='frank'
  let key ='name'; obj,key='frank' //错
  因为obj.key等价于obj['key']
  ```
* 批量赋值
  ```
  Object.assign(obj,{age:18,gender:'man'})
  ```
* 修改或增加共有属性：无法通过自身修改或增加共有属性
* 修改
  ```css
  改自身obj['name']='jack'
  批量改自身Object.assign(obj,{age:18...})
  改共有属性obj.__proto__['toString']='xxx'
  改共有属性Object.prototype['toString']='xxx'
  改原型obj.__proto__=common
  改原型let obj=Object.create(common)
  注：所有—__proto__代码都是强烈不推荐写的
  ```
* 增加
  
  基本同上：已有属性则改；没有属性则增。


###  <span id="jump5">5. 'name' in obj 和 obj.hasOwnProperty('name)的区别</span>

* in运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回true，否则返回false。
  ```css
  🫠
   var obj = {p:1};
   'p' in obj //true
   'toString' in obj //true

    in运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。就像上面代码中，对象obj本身并没有toString属性，但是in运算符会返回true，因为这个属性是继承的。
  ```
* 使用hasOwnProperty()判断对象是否含有属性时，只有自身有才会返回true：
   ```css
   🫠
   var obj = {};
   if ('toString' in obj) {
   console.log(obj.hasOwnProperty('toString')) // false
   }
   ```