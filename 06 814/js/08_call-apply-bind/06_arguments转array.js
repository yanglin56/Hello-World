function foo(num1, num2) {
  // 1.自己遍历
  var newArr = []
  for (var i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i] * 10)
  }
  console.log(newArr)

  // 2.arguments转成array类型
  // 2.1.自己遍历arguments中所有的元素

  // 2.2
  var newArr2 = Array.prototype.slice.call(arguments)
  console.log(newArr2)
}

foo(10, 20, 30, 40, 50)

var names