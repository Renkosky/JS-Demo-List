//字符串扩展

//codePointAt()处理四字节的字符
var s = "𠮷"
console.log(s.codePointAt())

//at 返回字符串给定位置的字符。不可处理大于0xFFFF的字符
var a = '你下哈进球功臣'
console.log(a.charAt(2))
/** 
 * includes()：返回布尔值，表示是否找到了参数字符串。
 * startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
 * endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
 * 第二个参数：开始搜索的位置
*/
let b = 'hello world!'
b.startsWith('hello')
b.endsWith('!')
b.includes('w')

//repeat方法返回一个新字符串，表示将原字符串重复n次。小数取整.
//负数和无限Infinity报错
'hi'.repeat(2)//hihi

/** 
* padStart()用于头部补全，padEnd()用于尾部补全。
* 一共接受两个参数，第一个参数用来指定字符串的最小长度，
* 第二个参数是用来补全的字符串。
*/
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
/**模板字符串
 * 所有模板字符串的空格和换行，都是被保留的,可以使用trim方法消除它。
 * 在模板字符串中写入变量用${}包围，大括号内可以进行运算以及调用属性
*/

let name = 'bing',word = 'nice';
`hello ${name}, ${word} to  meet you`

`${x} + ${y * 2} = ${x + y * 2}`
// "1 + 4 = 5"

let obj = {x: 1, y: 2};
`${obj.x + obj.y}`
// "3"