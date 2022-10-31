var name = "why"

foo(123)
function foo(num) {
  console.log(m)
  var n = 10
  var m = 20

  console.log(name)
}

console.log(aaaaa)




/**
 * 1.代码被解析，v8引擎内部会帮助我们创建一个对象(GlobalObject -> go)
 * 2.运行代码
 *  2.1. v8为了执行代码，v8引擎内部会有一个执行伤心文栈(Execution Context Stock, ECStack)(函数调用栈)
 *  2.2. 因为我们执行的是全局代码，为了全局代码能够正常的执行，需要创建 全局执行上下文GlobalObject Execution Context)(全局代码需要被执行时才会创建)
 */

// var globalObject = {
//   String: "类",
//   Data: "类",
//   setTimeout: "函数",
//   window: globalObject,
//   name: undefined,
//   num1: undefined,
//   num2: undefined,
//   result: undefined
// }

// console.log(window.window.window.window)

// var globalObject = {
//   String: "类",
//   window: globalObject,
//   name: undefined,
//   foo:
// }