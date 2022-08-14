// 1.导入的{}中定义的变量
import { flag, sum } from "./aaa.js";

if (flag) {
    console.log('小明是天才,哈哈哈');
    console.log(sum(20, 30))
}

// 2.直接导入export定义的变量
import { num1, height } from "./aaa.js"

console.log(num1);
console.log(height);

// 3.导入 export的function
import { mu1, Person } from "./aaa.js";

console.log(mu1(30, 50));

const p = new Person();
p.run()

// 4.导入export default中的内容
// import {address} from "./aaa.js"
import addr from "./aaa.js"
// console.log(addr('你好呀'));
addr('你好呀');

// 5.统一全部导入
// import { flag,num,num1,height,Person } from "./aaa.js";

import * as aaa from './aaa.js'
console.log(aaa.flag);
console.log(aaa.height);