// 给所有的函数添加一个hycall的方法
Function.prototype.hycall = function (thisArg, ...args) {
  // 在这理可以去执行调用的那个函数(foo)
  // 问题：得可以获取到是哪一个函数执行了hycall
  // 1.获取需要被执行的函数
  var fn = this

  // 2.对thisArg转成对象类型（防止它传入的是非对象类型）
  thisArg = thisArg ? Object(thisArg) : window

  // 3.调用需要被执行的函数
  // fn.call(thisArg)

  thisArg.fn = fn
  var result = thisArg.fn(...args)
  delete thisArg.fn

  // 4.将最终的结果返回出去
  return result
}

function foo() {
  console.log("foo函数被执行了", this)
}

function sum(num1, num2) {
  console.log("sum函数被执行了", this, num1, num2)
  return num1 + num2
}


// 系统的函数的call方法
// foo.call(123)
// sum.call({},20,30)
// foo.call(undefined)

// var result = sum.call({}, 20, 30)
// console.log("系统调用的结果:", result)

// 自己实现的函数的call方法
// 默认进行了隐式绑定
// foo.hycall({ name: "why" })
// foo.hycall(123)

foo.hycall(undefined)
var result = sum.hycall("abc", 20, 30)
console.log("hycall调用:", result)

// sum.hycall("abc", 20, 30, 40, 50)



// var num = 123
// console.log(Object(num))

// var num = {name:"why"}
// console.log(Object(num))