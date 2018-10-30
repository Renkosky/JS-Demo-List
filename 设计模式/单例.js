//一个类只有一个实例，并提供一个访问他的全局节点

// 在 JavaScript 开发中，单例模式的用途同样非常广泛。试想一下，当我
// 们单击登录按钮的时候，页面中会出现一个登录浮窗，而这个登录浮窗是唯一的，无论单击多少
// 次登录按钮，这个浮窗都只会被创建一次，那么这个登录浮窗就适合用单例模式来创建。
var Singleton = function(name) {
  this.name = name
  this.instance = null
}
Singleton.prototype.getName = function() {
  alert(this.name)
}
Singleton.getInstance = function(name) {
  if (!this.instance) {
    this.instance = new Singleton(name)
  }
  return this.instance
}

//惰性单例指的是在需要的时候才创建对象实例
Singleton.getInstance = (function(name) {
  var instance = null
  return function(name) {
    if (!instance) {
      instance = new Singleton(name)
    }
    return instance
  }
})()
