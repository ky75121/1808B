let path = require("path")
__dirname //绝对路径
console.log(__dirname)
let r = path.resolve(__dirname,"app.js")// 了解 resolve 可以多拼接一层
console.log(r)