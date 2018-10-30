/**JS中用原型链实现继承
 * 让原型对象指向另一个类型的实例
 */

function SuperType() {
  this.property = true
}

SuperType.prototype.getSuperValue = function() {
  return this.property
}

function SubType() {
  return (this.subProperty = false)
}
//继承supertype
SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function() {
  return this.subProperty
}

var instance = new SubType()

alert(instance.getSubValue())
/**
 * 确定原型与实例的关系
 * instanceof 测试原型链中出现过的构造函数，结果就会返回true
 *
 * isPrototypeof
 */
alert(instance instanceof Object) //ture
alert(instance instanceof SuperType) //ture
alert(instance instanceof SubType) //ture

alert(SuperType.prototype.isPrototypeOf(instance)) //true
/**
 * 借用构造函数实现继承
 * 使用call()或者apply方法调用构造函数
 */

function SuperType() {
  this.colors = ['red', 'blue']
}

function SubType() {
  //继承了Supertype
  SuperType.call(this)
}

var instance1 = new SubType()
instance1.colors.push('black')
alert(instance1.colors) //'red','blue','black'

var instance2 = new SubType()

alert(instance2.colors) //'red','blue'

/**
 * 借用构造函数时还可以传递一个参数
 */
function SuperType(name) {
  this.name = name
}

function SubType() {
  //继承了Supertype
  SuperType.call(this, 'phil')
  this.age = 21
}

var instance3 = new SubType()

console.log(instance3.name) //phil

console.log(instance3.age) //21

/**
 * 组合继承
 * 通过原型实现对原型属性方法的继承，通过借用构造函数实现对实例的继承
 */
function SuperType(name) {
  this.colors = ['red', 'blue']
  this.name = name
}

SuperType.prototype.sayName = function() {
  console.log(this.name)
}

function SubType(age, name) {
  //继承属性
  //通过借用父类的构造方法，子类的实例会拥有属于自己的属性副本
  SuperType.call(this, name)
  this.age = age
}
//继承方法
SubType.prototype = new SuperType()

SubType.prototype.sayAge = function() {
  console.log(this.age)
}

var instance4 = new SubType('phil', 21)
instance4.colors.push('black')
console.log(instance4.colors)
