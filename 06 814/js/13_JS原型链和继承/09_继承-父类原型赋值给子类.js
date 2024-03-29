// 父类：公共属性和方法
function Person() {
  // this = stu
  this.name = "why"
  this.age = 18
  this.friends = []
}

Person.prototype.eating = function () {
  console.log(this.name + "eating~")
}

// 子类：特有属性和方法
function Student(name, age, friends, sno) {

  Person.call(this, name, age, friends)

  this.sno = 111
}

// 直接将父类的原型赋值给子类，作为子类的原型（存在弊端）
Student.prototype = Person.prototype

Student.prototype.studying = function () {
  console.log(this.name + "studying~")
}

//name/sno
var stu = new Student("why", 18, ["kobe"], 111)
console.log(stu)
stu.eating()


