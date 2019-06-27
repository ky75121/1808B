let url = require('url')
let str = "http://www.baidu.com/user?name =1 &age=2" //定义一个地址
let result = url.parse(str,true)
// url.parse(str,true)  true 的属性 会把字符串转成对象 name=1 => {name:1}
console.log(result)


//protocol "http" 协议
// host  域名 端口号
// hostname ： 域名 'www.baidu.com'
// search 带问号查询参数
// query   不带问号的查询参数
//pathname 访问路劲