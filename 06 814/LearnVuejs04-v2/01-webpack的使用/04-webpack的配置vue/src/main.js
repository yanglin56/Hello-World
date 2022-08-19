//1.使用commonjs的模块化规范
const {add,mu1} = require('./js/mathUtils.js')

console.log(add(20,30));
console.log(mu1(20,30));

//2.使用ES6的模块化规范
import {name,age,height} from "./js/info.js";

console.log(name);
console.log(age);
console.log(height);

//3.依赖css文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less') 
document.writeln('<h2>你好呀，李银河！</h2>')

//5.使用Vue进行开发
import Vue from 'vue'
// import App from './vue/app.js'
import App from './vue/App.vue'

new Vue({
  el:'#app',
  template:'<App/>',
  components:{
    App
  }
})