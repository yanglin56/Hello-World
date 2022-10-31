function foo() {
  var a = b = 100
  // =>转换成下面的两行代码
  // var a = 100
  // b = 100
}

foo()

console.log(a)
console.log(b)