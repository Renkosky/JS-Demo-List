function getJson(url) {
  const promise = new Promise(function(reslove, reject) {
    const client = new XMLHttpRequest()
    client.open('get', url)
    client.onreadystatechange = function() {
      if (client.readyState !== 4) {
        return
      }
      if (client.readyState == 200 || client.readyState == 304) {
        reslove(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    client.responseType = 'json'
    client.setRequestHeader('Accept', 'application/json')
    client.send()
  })
  return promise
}
getJson('./ss')
  .then(res => {
    console.log(res.data)
  })
  .catch() //.then(null,rejection)
