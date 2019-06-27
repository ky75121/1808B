let fs = require("fs");
let path = require("path")

let fsPromise = fs.promises ; //node 10 版本以上
//读取文件readFile 参数 文件路径  读取格式
fsPromise.readFile(path.join(__dirname,"./app.js"),"utf-8").then(data => {
    console.log(data)
})
//写入文件  writeFile 参数 1.要写的文件路径   2.要写入的数据  3. 要写入的数据格式
//写入的数据会把以前文件的覆盖
fsPromise.writeFile("./a.txt","你好，我是写入的类容","utf-8").then(data =>{
    console.log("写入成功")
})

//读取 json 转 对象  数组push  放新的数据 写入文件

