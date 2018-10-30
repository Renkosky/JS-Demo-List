const fetch = require('node-fetch')

async function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  return await response.json()
}
// getZhihuColumn('ffweerr')
//   .then(column => {
//     console.log(`NAME: ${column.name}`)
//     console.log(`INTRO: ${column.intro}`)
//   })
//   .catch(err => console.log(err))

//try catch

const showColumInfo = async id => {
  try {
    const column = await getZhihuColumn(id)
    console.log(`NAME: ${column.name}`)
    console.log(`INTRO: ${column.intro}`)
  } catch (err) {
    console.log(err)
  }
}
showColumInfo('feweek123')
