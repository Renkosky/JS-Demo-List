/**
 * ES6 规定， Promise对象是一个构造函数， 用来生成Promise实例。
 * 下面代码创造了一个Promise实例。
 */

const promise = new Promise(function(resolve, reject) {
  if (success) {
    resolve(value)
  } else {
    reject(error)
  }
})
/**
 * promise有三种状态，pendding,fulfilled,rejected。
 */

/**Promise构造函数接受一个函数作为参数，
 * 该函数的两个参数分别是resolve和reject。它们是两个函数，
 * 由 JavaScript 引擎提供，不用自己部署。
 *
 * resolve函数的作用是， 将Promise对象的状态从“ 未完成” 变为“ 成功”
 * （ 即从 pending 变为 resolved）， 在异步操作成功时调用，
 * 并将异步操作的结果， 作为参数传递出去；
 *
 * reject函数的作用是， 将Promise对象的状态从“ 未完成” 变为“ 失败”（ 即从 pending 变为 rejected），
 * 在异步操作失败时调用， 并将异步操作报出的错误， 作为参数传递出去。
 * */

/**Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。
它的作用是为 Promise 实例添加状态改变时的回调函数。前面说过，
then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。**/
promise.then(
  function(value) {
    //success
  },
  function(error) {
    // failure
  }
)
/**
 *采用链式的then，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，
 *有可能返回的还是一个Promise对象（即有异步操作），这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用。
 **/

//如果返回的是数据下一个then中就可以接收到数据了，因此通过then方法的链式调用，就可以获取上一个异步
//操作的状态/数据
runAsync1()
  .then(function(data) {
    console.log(data)
    return runAsync2()
  })
  .then(function(data) {
    console.log(data)
    return runAsync3()
  })
  .then(function(data) {
    console.log(data)
  })

//Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
getJSON('/posts.json')
  .then(function(posts) {
    // ...
  })
  .catch(function(error) {
    // 处理 getJSON 和 前一个回调函数运行时发生的错误
    console.log('发生错误！', error)
  })

//Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
const p = Promise.all([p1, p2, p3])
/**
 * (1)只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
 * (2)只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，
 * 此时第一个被reject的实例的返回值，会传递给p的回调函数。
 */
//例子
const promises = [2, 3, 5, 7, 11, 13].map(function(id) {
  return getJSON('/post/' + id + '.json')
})

Promise.all(promises)
  .then(function(posts) {
    // ...
  })
  .catch(function(reason) {
    // ...
  })
/**
 * 上面代码中，promises是包含 6 个 Promise 实例的数组，只有这 6 个实例的状态都变成fulfilled，
 * 或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数。
 */

Promise.race()
//Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
//上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

//应用：
function loadImageAsync(url) {
  return new promise(function(resolve, reject) {
    const image = new Image()
    image.onload = function() {
      resolve(image)
    }

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url))
    }
    image.src = url
  })
}
