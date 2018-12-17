// 调用then方法，将想要在 Promise 异步操作成功时执行的回调放入 deferreds 队列；
// 创建 Promise 实例时传入函数被赋予一个函数类型的参数，即 resolve，用以在合适的时机触发异步操作成功。真正执行的操作是将 deferreds 队列中的回调一一执行；
// resolve 接收一个参数，即异步操作返回的结果，方便回调使用。

function getUserId() {
  return new Promise(function(resolve) {
    // 模拟异步操作
    window.setTimeout(function() {
      resolve(9876)
    }, 1000)
  })
}

getUserId().then(function(id) {
  console.log(id)
})

function Promise(fn) {
  var value = null,
    deferreds = []

  this.then = function(onFulfilled) {
    deferreds.push(onFulfilled) //把functio(id){console.log(id)}推入数组
  }

  function resolve(value) {
    deferreds.forEach(function(deferred) {
      deferred(value) //遍历那个数组执行其中的函数
    })
  }

  fn(resolve)
}

// 例2

function getUserId() {
  return new Promise(function(resolve) {
    // 模拟异步操作
    window.setTimeout(function() {
      resolve(9876)
    }, 1000)
  })
}

getUserId()
  .then(function(id) {
    console.log('do sth with', id)
  })
  .then(function(id) {
    console.log('do sth else with', id)
  })

function Promise(fn) {
  var value = null,
    deferreds = []

  this.then = function(onFulfilled) {
    deferreds.push(onFulfilled)
    return this //以此实现then的链式调用
  }

  function resolve(value) {
    deferreds.forEach(function(deferred) {
      deferred(value)
    })
  }

  fn(resolve)
}

//如果promise中是同步代码，那reslove就会优先于then执行这时 deferreds 队列还空无一物，更严重的是，后续注册的回调再也不会被执行了：
// 此外，Promises/A+ 规范明确要求回调需要通过异步方式执行，用以保证一致可靠的执行顺序。为解决这两个问题，
// 可以通过 setTimeout 将 resolve 中执行回调的逻辑放置到 JS 任务队列末尾
function getUserId() {
  return new Promise(function(resolve) {
    resolve(9876)
  })
}

getUserId().then(function(id) {
  console.log('do sth with', id)
})

function Promise(fn) {
  var value = null,
    deferreds = []

  this.then = function(onFulfilled) {
    deferreds.push(onFulfilled)
    return this
  }

  function resolve(value) {
    setTimeout(function() {
      deferreds.forEach(function(deferred) {
        deferred(value)
      })
    }, 0)
  }

  fn(resolve)
}

//引入三个状态，

function Promise(fn) {
  var state = 'pending',
    value = null
  deferreds = []

  this.then = function(onFulfilled) {
    if (state === 'pending') {
      deferred.push(onFulfilled)
      return this
    }
    onFulfilled(value) //resolve 执行时，会将状态设置为 fulfilled，在此之后调用 then 添加的新回调，都会立即执行。
    return this
  }

  function reslove(newValue) {
    value = newValue
    state = 'fullfilled'
    setTimeout(function() {
      deferreds.forEach(function(defferred) {
        defferred(value) //
      })
    }, 0)
  }

  fun(reslove)
}
