// 你不知道的JavaScript
// 代码报错
// function foo(el) {
//   console.log(el, this.id)
// }

// var obj = {
//   id: 'awesome'
// }

// [1, 2, 3].forEach(foo, obj)

// 加分号

// function foo(el) {
//   console.log(el, this.id)
// }

// var obj = {
//   id: 'awesome'
// };

// [1, 2, 3].forEach(foo, obj)

// 用var
function foo(el) {
  console.log(el, this.id)
}

var obj = {
  id: 'awesome'
}

var nums = [1, 2, 3]
nums.forEach(foo, obj)
