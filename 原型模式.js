/*每一个创建的函数都有一个prototype属性，这个属性是一个指针，指向一个对象，
对象用来包含所有由特定类型的所有实例共享的属性和方法。
使用原型对象可以让所有对象实例都能使用对象的方法，属性。 */

function person() {
    
}

person.prototype.name = 'phil';
person.prototype.age = 21;
person.prototype.say = function() {
    alert(this.name);
}

var person1 = new person();
var person2 = new person();
person1.say();//phil

/* 
无论何时，创建一个新函数时就会给该函数创建一个property属性，这个属性指向
函数的原型对象。原型对象会在默认情况下有一个constructor属性，这个属性是一个
指向原对象property属性的指针

在实例中如果添加一个与原对象相同名字的属性，那就会在实例中创建这个属性，该属性会屏蔽原型中的属性,
但是不会改变原型中属性的值
*/

function person() {

}

person.prototype.name = 'phil';
person.prototype.age = 21;
person.prototype.say = function () {
    alert(this.name);
}

var person1 = new person();
var person2 = new person();

person1.name = 'Sam';
alert(person1.name);//Sam

/*delet可以删除那个属性 */

delete person1.name;
alert(person1.name); //phil


//hasOwnProperty()方法可以用来检测一个属性是存在于实例中还是存在于原型中
//存在于实例中时返回true

function person() {

}

person.prototype.name = 'phil';
person.prototype.age = 21;
person.prototype.say = function () {
    alert(this.name);
}

var person1 = new person();
var person2 = new person();

person1.name = 'Sam';

alert(person1.hasOwnProperty("name")); //true

alert(person2.hasOwnProperty("name"));//false

//原型与in操作符

//in操作可以单独使用或者 在for-in循环中使用

//单独使用时in操作通过对象能够访问指定属性是就返回true
alert('name' in person1);//true

//该函数可以知道属性是在原型中还是实例中
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}
//for -in循环只能返回能通过对象访问的，可枚举的属性，其中包括存在于实例中的
//属性，也包括存在于原型中的

for (var prop in person1) {
  console.log(prop); //name age say
}
//keys()方法和gettOwnproperty有和for-in循环同样的效果
var p1keys = Object.keys(person1);
console.log(p1keys);// [name] 

var keys = Object.getOwnPropertyNames(person);
console.log(keys);

//更简单的原型语法

function person() {
    
}
person.prototype = {
    name : 'phil',
    age : '21',
    say : function () {
      alert(this.name);
    }
}
//用这种字面量对象的写法时，原型对象中constructor属性将不再指向person而是变成Object