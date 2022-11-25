function foo(num1, num2, num3) {
  // 类数组对象中(长的像是一个数组，本质上是一个对象)：arguments
  // console.log(arguments)

  // 常见的对arguments的操作有三个
  // 1.获取参数的长度
  console.log(arguments.length)

  // 2.根据索引值获取一个参数
  console.log(arguments[2])
  console.log(arguments[3])
  console.log(arguments[4])

  // 3.callee获取当前arguments所在函数
  console.log(arguments.callee)
  // arguments.callee()  // 不要这样操作，会出现递归，会无限调卡死
}

foo(10, 20, 30, 40, 50)