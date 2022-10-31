var message = "hello Global"

function foo() {
  console.log(message)
}

function bar() {
  var message = "hello Bar"
  foo()
}

bar()

