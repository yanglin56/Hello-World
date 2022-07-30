### 基于原型的继承

在JS的中，各个对象都存在一条原型链，这些对象因为存在某些共有属性而划分为不同的类型，比如Array。将这些共有属性提取出来后，放入这些对象的__proto__中，便实现了属性的继承。

```css
function Parent(name1){
  this.name1 = name1
}
Parent.prototype.pMethod = function(){
  console.log(this.name1)
}

function Child(name2, name1){
    Parent.call(this, name1) 
    this.name2 = name2
}

const empty = function(){}
empty.prototype = Parent.prototype
Child.prototype = new empty()

Child.prototype.cMethod = function(){
    console.log(this.name2)
}

```
### 基于 class 的继承

在ES6中，我们的Class之间可以通过extends关键字实现继承(在 JS 中并不存在类，class 的本质就是函数)。

```css
class Parent{
    constructor(name1){
        this.name1 = name1
    }
    pMethod(){
        console.log(this.name1)
    }
}
class Child extends Parent{
    constructor(name2, name1){
        super(name1) 
        this.name2 = name2
    }
    cMethod(){
        console.log(this.name2)
    }
}

```
