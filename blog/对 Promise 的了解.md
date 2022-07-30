# 你对 Promise 的了解？

## 今天的主要内容为 🚀

1. [Promise 的用途](#jump1)
2. [如何创建一个 new Promise](#jump2)
3. [如何使用 Promise.prototype.then（可查 MDN）](#jump3)
4. [如何使用 Promise.all（可查 MDN）](#jump4)
5. [如何使用 Promise.race（可查 MDN）](#jump5)

## 开始吧

###  <span id="jump1">1. Promise 的用途 </span>
* 规范回调的名字和顺序，避免回调地狱,让代码可读性更强
* 方便捕获错误
* 解决异步的问题

### <span id="jump2">2. 如何创建一个 new Promise</span>

```css
return new Promise((resolve,reject)=>{})
```
### <span id="jump3">3. 如何使用 Promise.prototype.then</span>

then() 方法返回一个 Promise。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。

```css
var p1 = new Promise((resolve, reject) => {
  resolve('成功！');
  // or
  // reject(new Error("出错了！"));
});

p1.then(value => {
  console.log(value); // 成功！
}, reason => {
  console.error(reason); // 出错了！
});

```
### <span id="jump4">4. 如何使用 Promise.all</span>

对于异步回调，首先想到的就会是使用Promise封装，然后使用.then()来触发回调。那么对于两个或多个异步事件均完成后再触发回调可以使用Promise.all()方法

```css
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
}); 

Promise.all([p1, p2, p3]).then(values => { 
  console.log(values); // [3, 1337, "foo"] 
});

```
Promise.all(iterable) 方法返回一个 Promise 实例，此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果。

### <span id="jump5">5. 如何使用 Promise.race</span>

Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝。

顾名思义，Promise.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

```css
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  },1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 500)
})

Promise.race([p1, p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)  // 打开的是 'failed'
})

```