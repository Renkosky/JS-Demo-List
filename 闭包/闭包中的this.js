var name = 'window';

var object = {
    name:'phil',
    getName: function () {
        return function () {
            return this.name;
        };
    }
};

alert(object.getName()());//window

/**
  每个函数在调用时会总动取得两个特殊变量：this，argument。
  内部函数在搜索这个变量的时候，只会搜索到活动对象为止，所以
  访问不到外部函数的name

  把外部函数作用域中的this保存在闭包能访问的变量里可以解决这个问题
 */
var name = 'window';

var object = {
    name: 'phil',
    getName: function () {
        var that = this;
        return function () {
            
            return that.name;
        };
    }
};

alert(object.getName()());