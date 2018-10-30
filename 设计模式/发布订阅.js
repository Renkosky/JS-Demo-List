//只要我们曾经在 DOM 节点上面绑定过事件函数，那我们就曾经使用过发布—订阅
//模式，
document.body.addEventListener(
  'click',
  function() {
    alert(2)
  },
  false
)
document.body.click() // 模拟用户点击
// 在这里需要监控用户点击 document.body 的动作，但是我们没办法预知用户将在什么时候点
// 击。所以我们订阅 document.body 上的 click 事件，当 body 节点被点击时， body 节点便会向订阅
// 者发布这个消息。

//自定义事件

var salesOffices = {} //发布中心
salesOffices.clientList = [] //存放列表，存放订阅者的回调函数
//增加订阅者
salesOffices.listen = function(fn) {
  this.clientList.push(fn)
}
salesOffices.trigger = function() {
  for (let i = 0; i < this.clientList.length; i++) {
    fn = this.clientList[i]
    fn.apply(this, arguments) // arguments 是发布消息时带上的参数
  }
}
salesOffices.listen(function(price, square) {
  console.log('价格= ' + price)
  console.log('面积= ' + square)
})
