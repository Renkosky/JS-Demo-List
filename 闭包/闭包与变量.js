//闭包保存整个变量对象

function createFunctions() {
    var result = new Array();

    for (var i = 0; i < 10; i++) {
      result[i] = function () {
      return i;
      };
    }
    return result;//每一个都是10
}