let fs = require("fs");
let path = require("path");
let filename = path.join(__dirname,"./good.json")
let fsPromise = fs.promises;
fsPromise.readFile(filename,"utf-8").then(data => {
    // 读出来是json 转成对象
      data = JSON.parse(data)
    data.push({
        id:2,
        name:"juzi"
    })
   
    //写入数据的时候要办数据转成json
    fsPromise.writeFile(filename,JSON.stringify(data),"utf-8")
    console.log(data)
})

