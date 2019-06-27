let fs = require("fs");
let path = require("path");
let filename1 = path.join(__dirname,"./good.json")
let fsPromise = fs.promises;
fsPromise.readFile(filename1,"utf-8").then(data => {
    // 读出来是json 转成对象
      data = JSON.parse(data)
    for(key in data){
      if(data[key].id === 1){
        data[key].name="ww"
      }
    }
   
    //写入数据的时候要办数据转成json
    fsPromise.writeFile(filename1,JSON.stringify(data),"utf-8")
    console.log(data)
})
