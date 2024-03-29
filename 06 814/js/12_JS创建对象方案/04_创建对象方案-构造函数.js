// 规范：构造函数的首字母一般是大写
function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address

  this.eating = function () {
    console.log(this.name + "在吃东西～")
  }

  this.running = function () {
    console.log(this.name + "在跑步～")
  }
}

var p1 = new Person("张三", 18, 1.88, "上海市")
var p2 = new Person("李四", 20, 1.78, "北京市")

console.log(p1)
console.log(p2)

console.log(p1.eating === p2.eating)
console.log(p1.running === p2.running)