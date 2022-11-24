Function.prototype.hybind = function (thisArg, ...argArray) {
  // 1.获取到真实需要调用的函数
  var fn = this

  // 2.绑定this
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

  function proxyFn() {
    thisArg.fn = fn
    var result = thisArg.fn
    delete thisArg.fn
    return result
  }

  return proxyFn
}

function foo() {
  console.log("foo被执行", this)
  return 20
}

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4)
}

// 系统的bind使用
// var bar = foo.bind("abc")
// bar()

// var newSum = sum.bind("aaa", 10, 20, 30, 40)
// newSum()

// var newSum = sum.bind("aaa")
// newSum(10, 20, 30, 40)

// var newSum = sum.bind("aaa", 10, 20)
// newSum(30, 40)

// 使用自己定义的bind
var bar = foo.hybind("abc")
var result = bar()
console.log(result)