let { foo, bar} = { foo: "aaa", bar: "vvv" }
console.log(foo);
console.log(bar);

let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;
/**
 * 嵌套对象解构
 * p是匹配的模式，x y是变量*/
console.log(x);//Hello
console.log(y); //World
let { p, p: [x, { y }] } = obj;
console.log(p); // ["Hello", {y: "World"}]

//默认值
var {x, y = 5} = {x: 1};
x // 1
y // 5
//默认值生效条件 属性严格等于unfined
var {x = 3} = {x: null};
x // null

//解构用于加载模块，注定输入哪些方法
const { SourceMapConsumer, SourceNode } = require("source-map");