// 争论：代码规范 ；
var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(this)
  }
}

var obj2 = {
  name: "obj2"
}; //必须加;不然会解析报错，告诉结束了

// obj2.bar = obj1.foo
// obj2.bar()

(obj2.bar = obj1.foo)() //独立函数调用