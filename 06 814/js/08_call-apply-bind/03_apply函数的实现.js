// 自己实现apply
Function.prototype.hyapply = function () { }

function sum(num1, num2) {
  console.log("sum被调用", this, num1, num2)
  return num1 + num2
}

// 系统调用
var result = sum.apply("abc", [20, 30])
console.log(result)