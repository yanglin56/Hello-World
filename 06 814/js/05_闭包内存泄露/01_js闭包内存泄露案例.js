function createFnArray() {
  // var arr=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  // 占据的空间是4M
  var arr = new Array(1024 * 1024).fill(1)
  return function () {
    console.log(arr.length)
  }
}

// var arrayFn = createFnArray()
// arrayFn = null

var arrayFns = []
for (var i = 0; i < 100; i++) {
  arrayFns.push(createFnArray())
}

setTimeout(() => {
  arrayFns = null
}, 2000)