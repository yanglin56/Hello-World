

function foo() {
  // var moni = {}
  // this = moni
  console.log("foo~, 函数体代码")
}

// foo就是一个普通的函数
// foo()

// 换一种方式来调用foo函数：通过new关键字去调用一个函数，那么这个函数就是一个构造函数
// // new foo()
// new foo
var f1 = new foo
console.log(f1)

// 当我们通过new去调用一个函数时，和通过的调用到底有什么区别？
