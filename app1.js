let http = require("http");
let url = require("url");
let ary = require('./banner')
let server = http.createServer((req, res) => {
    //设置一个解决中文的乱码的问题
    res.setHeader("Content-Type","text/plain;charset=utf-8")
    // 根据路劲不同，返回的结果不同
    //请求的路劲放在req上面  req。url
    //localhost ：3000/uesr？name=1
    // /user =>pathname   ?name=1 => query
    let { pathname, query } = url.parse(req.url, true)

    if (pathname === "/user") {
        console.log(query.name)
        return res.end('访问的是user')
    }
    if (pathname === "/admin") {
        return res.end('访问的是admin')
    }
    if (pathname === "/banner") {
        return res.end(JSON.stringify(ary))
    }
    res.end("404")
})

   server.listen(3000,function(){
       console.log('服务器启动成功')
   })