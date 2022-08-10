# 简述 computed 和 watch 的区别

## 今天的主要内容为 🚀

1. [computed](#jump1)
2. [watch](#jump2)

## 开始吧

###  <span id="jump1">1.什么是computed</span>
* computed -> 计算属性
* 在某些情况，我们可能需要对数据进行一些转化后再显示，或者需要将多个数据结合起来进行显示，我们就可以将代码换成计算属性
* 调用的时候不需要加括号，可以直接当属性来用的。
* 计算属性的setter和getter
  * 每个计算属性都包含一个getter和一个setter
  * 通常我们只是使用getter来读取
  * 在某些情况下，你也可以提供一个setter方法（不常用）
    ```
    // 只读
    function computed<T>(
    getter: () => T,
    // 查看下方的 "计算属性调试" 链接
    debuggerOptions?: DebuggerOptions
    ): Readonly<Ref<Readonly<T>>>

    // 可写的
    function computed<T>(
    options: {
    get: () => T
    set: (value: T) => void
    },
    debuggerOptions?: DebuggerOptions
    ): Ref<T>
    ```

* 计算属性的缓存
  * 计算属性会进行缓存，如果多次使用时，会根据依赖进行缓存，依赖不变，计算属性只会调用一次
###  <span id="jump2">2.什么是watch</span>
* watch -> 倾听属性
* 侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。
* immediate:组件加载立即触发回调函数执行
* deep:表示对对象里面的变化进行深度监听
* 不支持缓存，数据变，直接会触发相应的操作
  ```
  // 侦听单个来源
  function watch<T>(
  source: WatchSource<T>,
  callback: WatchCallback<T>,
  options?: WatchOptions
  ): StopHandle

  // 侦听多个来源
  function watch<T>(
  sources: WatchSource<T>[],
  callback: WatchCallback<T[]>,
  options?: WatchOptions
  ): StopHandle

  type WatchCallback<T> = (
  value: T,
  oldValue: T,
  onCleanup: (cleanupFn: () => void) => void
  ) => void

  type WatchSource<T> =
  | Ref<T> // ref
  | (() => T) // getter
  | T extends object
  ? T
  : never // 响应式对象

  interface WatchOptions extends WatchEffectOptions {
  immediate?: boolean // 默认：false
  deep?: boolean // 默认：false
  flush?: 'pre' | 'post' | 'sync' // 默认：'pre'
  onTrack?: (event: DebuggerEvent) => void
  onTrigger?: (event: DebuggerEvent) => void
  }
  ```