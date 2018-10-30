var oUl = document.getElementsByTagName("ul")[0];
var ali = document.getElementsByTagName("li");
var arr=[];
var z = 2;
for (var i = 0; i < ali.length; i++) {
  arr.push([ali[i].offsetLeft,ali[i].offsetTop]);
}
for (var i = 0; i < ali.length; i++) {
  ali[i].style.position = 'absolute';
  ali[i].style.left = arr[i][0] +"px";
  ali[i].style.top = arr[i][1] +"px";
  ali[i].style.margin = 0;

}
for (var i = 0; i < ali.length; i++) {
  {
    drag(ali[i]);
  }
}

function drag(obj){
  obj.onmousedown = function(ev){
    var ev = ev||window.event;
    //获取鼠标坐标
    var x = ev.clientX;
    var y =ev.clientY;
    //获取原来位置
    var l = obj.offsetLeft;
    var t = obj.offsetTop;
    obj.style.zIndex = z++;
    document.onmousemove = function(ev){
      var ev = ev||window.event;
      var _left = ev.clientX - x + l;
      var _top = ev.clientY -y + t;
      obj.style.left = _left + "px";
      obj.style.top = _top +"px";
      //碰撞检测
      var li = near(obj);
      for (var i = 0; i < ali.length; i++) {
        ali[i].style.border = "";
      }
      if (li) {
        li.style.border = "2px solid red";
      }
    };
      document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    };
    return false;
  };
}

function impact(obj1, obj2){
  var L1 = obj1.offsetLeft;
  var R1 = obj1.offsetLeft + obj1.offsetWidth;
  var T1 = obj1.offsetTop;
  var B1 = obj1.offsetTop + obj1.offsetHeight;
  var L2 = obj2.offsetLeft;
  var R2 = obj2.offsetLeft + obj1.offsetWidth;
  var T2 = obj2.offsetTop;
  var B2 = obj2.offsetTop + obj1.offsetHeight;

  if (R1<L2||B1<T2||T1>B2||L1>R2) {
    return false;
  }else {
    return true;
  }
}
//获取碰撞成功的最近距离
function near(obj) {
  var n = 10000;
  var oLi ='';
  for (var i = 0; i < ali.length; i++) {
    if (impact(obj, ali[i]) && obj != ali[i]) {
      var c = distance(obj,ali[i]);
      if (c<n) {
        n = c;
        oLi = ali[i];//保存最近的边框距离
      }
    }
  }
  return oLi;
}
//沟谷定理计算长度
function distance(obj1, obj2) {
  var a = obj1.offsetLeft - obj2.offsetLeft;
  var b = obj1.offsetTop - obj2.offsetTop;
  return Math.sqrt(a*a+b*b);//
}
