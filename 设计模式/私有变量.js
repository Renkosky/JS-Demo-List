/*由于作用域链，函数外部不能访问函数内部的变量，所以函数内部的变量
可以当做私有变量。
*/

function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
/**通过闭包可以使外部访问到函数内不得私有变量。我们
 * 可以写一个方法，用于访问私有变量。这种有权利访问
 * 私有变量和私有函数的公有方法我们称之为特权方法
 */
//构造函数中定义特权方法的基本模式
 function myObject() {
     var privateVariable = 10;

     function privateFunction() {
         return false;
     }

     //特权方法
     this.publicMethod = function () {
         privateVariable++;
         return privateFunction();
     };
 }
//例子

function person(name) {
    this.setName = function (value) {
        name = value;
    };
    this.getName = function () {
        return name;
    }
}

var p1 = new person('phil');
console.log(p1.getName());//phil
p1.setName('moon');
p1.getName();//moon

/**
 * 静态私有变量
 * 通过在私有作用于中定义私有变量或者函数来创建特权方法
 */

//基本模式
(function myObject() {
    //私有函数和变量
    var privateVariable = 10;

    function privateFunction() {
        return false;
    };
    //构造函数，并未用var关键字，所以是一个全局变量
    myObject = function () {
        
    };
    //工有/特权方法
    myObject.prototype.publicMethod = function () {
        privateVariable++;
        return privateFunction();
    }; 
})();

//例子
(function () {
    var name = '';

    person = function (value) {
        name = value;
    };

    person.prototype.getName = function () {
        return name;
    }

    person.prototype.setName = function (value) {
        name = value;
    };

})();

var p2 = new person('phil');
console.log(p2.getName());//phil
p2.setName('moon');
console.log(p2.getName());//moon

var p3 = new person('renko');
console.log(p2.getName());//renko
console.log(p3.getName());//renko

/**
 * 这个例子中name变成了一个静态的，由所有实例共享
 * 改变一个实例，其他也会跟着改变
 */

 /**
  * 模块模式
  * 为单例（只有一个实例的对象）创建私有对象和特权方法
  */

  var singleton = function () {
      var privateVariable = 10;

      function privateFunction() {
          privateVariable++;
      };

      //特权/公权方法和属性
      return {
          pubblicProperty : true,
          publicMethod : function () {
              privateVariable++;
              return privateFunction();
          }
      };

  }();

  /*这个模块模式定义了一个返回对象的匿名函数。将一个对象字面量
  作为函数的值返回，其中包含可以公开的属性和方法。从本质上讲，
  字面量定义的是这个单例的公共接口
*/
