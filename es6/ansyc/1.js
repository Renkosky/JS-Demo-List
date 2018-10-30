//await 等待后面的promise执行完再进行下一步操作
//async函数返回一个 Promise 对象，可以使用then方法添加回调函数。
//当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
const fetch = require('node-fetch')

async function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  const column = await response.json()
  console.log(`NAME: ${column.name}`)
  console.log(`INTRO: ${column.intro}`)
}

getZhihuColumn('feweekly')
