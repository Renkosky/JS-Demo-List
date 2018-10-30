/**
 * Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。
 * 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，
 * 还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
 */
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
/**
 * yield 表达式时暂停的逼骚是，next可以让指针移向下一个状态。
 * done属性表示遍历是否结束
 */

 /**
  * yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，
  * 该参数就会被当作上一个yield表达式的返回值。
  */

function* f() {
  for (let i = 0; true; i++) {
    var reset = yield i;
    if (reset){ i = -1; }
  }
}

var g = f();
g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next()//{ value: 0, done: false }
//for of 可以调用generator的接口
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5

