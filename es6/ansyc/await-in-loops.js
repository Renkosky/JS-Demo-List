const fetch = require('node-fetch')

async function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  return await response.json()
}

const showColumInfo = async id => {
  try {
    //触发所有的请求拿到promise数组，然后遍历等待结果，reslove
    const column = await getZhihuColumn(id)
    const names = ['feweekly', 'toolingtips']
    const promises = names.map(id => getZhihuColumn(id))
    for (promise of promises) {
      const element = await promises
      console.log(`NAME: ${column.name}`)
      console.log(`INTRO: ${column.intro}`)
    }
  } catch (err) {
    console.log(err)
  }
}
showColumInfo('feweek123')
