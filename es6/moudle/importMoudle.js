import { firstName, lastName, year} from './exportMoudle'
//不允许改写
import { a } from './xxx.js'

a = {}; // Syntax Error : 'a' is read-only;

//除了指定加载某个输出值，还可以使用整体加载，
//即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

// circle.js

export function area(radius) {
    return Math.PI * radius * radius;
}

export function circumference(radius) {
    return 2 * Math.PI * radius;
}

import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));

