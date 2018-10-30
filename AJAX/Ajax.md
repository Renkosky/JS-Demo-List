---
title: Ajax
date: 2018-10-02 23:26:47
tags:
  - javascript
---

# 介绍

ajax 是一种异步加载 JavaScript 脚本的技术。它可以让客户端像服务端请求额外的数据而无需重新加载页面。

# 使用

以下为使用 ajax 技术的方法

## XMLHttpRequest 对象

创建

```Javascript
var xhr = new XMLHttpRequest()
```

使用 xhr 先要调用 open() 方法

```Javascript
xhr.open('get','server.php',false)
```

open 方法有三个参数

- method: 请求方法
- url: 请求地址，注意这里是相对与执行代码的当前页面（也可以绝对地址）
- async：布尔值，false 代表同步请求，true 代表异步请求

收到响应后，响应的数据会自动填充 xhr 对象的属性

- responseText: 作为响应主体被返回的文本
- responseXML: 保存响应中的 xml 文档
- stauts: 响应的 HTTP 状态
- statusText: HTTP 状态的说明

```javascript
  if(xhr.status==200||(xhr.status==304){
    var data = xhr.responseText
  }
```

xhr 有一个 readyState 属性 有 5 个阶段

- 0 未初始化，尚未调用 open()
- 1 启动。已经调用 open(),尚未调用 send()
- 2 发送。已经调用 send(),尚未响应
- 3 接受。收到部分响应
- 4 完成。收到全部响应数据

```javascript
var xhr = new XMLHttpRequest()
xhr.onreadyStatechange = function() {
  if (request.readyState === 4) {
    if(xhr.status==200||(xhr.status==304){
      var data = xhr.responseText
    }else{

    }
  }
}
xhr.open('get','exmaple.text',null)
xhr.send(null)
```

接受到响应前 xhr.abort()可以取消异步请求

设定头部信息

```javascript
xhr.setRequestHeadr()
```
