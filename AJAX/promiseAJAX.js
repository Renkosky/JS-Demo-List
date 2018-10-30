let getJson = url => {
  let promise = new Promise((reslove, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return
      }
      if (xhr.status === 200) {
        reslove(xhr.response)
      } else {
        reject(new Error(xhr.statusText))
      }
    }
  })
}
