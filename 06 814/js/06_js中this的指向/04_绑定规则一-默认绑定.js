// 默认绑定：独立函数调用
// 案例一
// function foo() {
//   console.log(this)
// }

// foo()

// // 案例二
// function foo1() {
//   console.log(this)
// }

// function foo2() {
//   console.log(this)
//   foo1()
// }

// function foo3() {
//   console.log(this)
//   foo3()
// }

// foo3()

// 案例三
// var obj = {
//   name: "why",
//   foo: function () {
//     console.log(this)
//   }
// }

// var bar = obj.foo
// bar() //window

// 案例四
// function foo() {
//   console.log(this)
// }

// var obj = {
//   name: "why",
//   foo: foo
// }

// var bar = obj.foo
// bar() //window

// 案例五
function foo() {
  function bar() {
    console.log(this)
  }
  return bar
}

var fn = foo()
fn()

var obj = {
  name: "why",
  eating: fn
}

obj.eating() //隐式绑定