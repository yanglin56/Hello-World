var obj = {
  name: "why",
  age: 18
}

// 属性描述符
Object.defineProperty(obj, "height", {
  value: 1.88
})

console.log(obj)
console.log(obj.height)