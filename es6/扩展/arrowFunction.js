
// var f = function (v) {
//     return v;
// };
var f = v => v;
f(4)//4
//无参数用圆括号
var f2 = () => 4;
f2()//4
//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
var sum = (num1, num2) => {
  return num1 + num2;
}
//由于大括号被解释为代码块，
//所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
//例：
let getTempItem = id => ({
    id: id,
    name: "Temp"
});

//配合参数解构
const full = ({first, last}) => first + '' + last;
//等于
function full(person) {
  person.first + '' + person.last;
}
/**

*（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
*（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
*（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
*（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
 */