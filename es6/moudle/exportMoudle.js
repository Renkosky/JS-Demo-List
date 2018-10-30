export var firstname = 'phil';
export var lastname = 'aa';
export var year = 1958

var firstname = 'phil';
var lastname = 'aa';
var year = 1958
export {firstName, lastname, year}

//输出函数或类

export function a(x, y) {
  return x * y;
}

//as关键字重命名

function v1() {  }
function v2() {  }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};

//export default 为模块指定默认输出
export default function () {
  console.log('foo');
}

import customName from './export-default';
customName(); // 'foo'