function foo() {
  console.log(this)
}

// foo.call("aaaa")
// foo.call("aaaa")
// foo.call("aaaa")
// foo.call("aaaa")

// 默认绑定和显示绑定bind冲突：优先级(显示绑定)
var newFoo = foo.bind("aaaa")

newFoo()
newFoo()
newFoo()
newFoo()