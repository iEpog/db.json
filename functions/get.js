let fs = require('fs')
exports.run = (_,name)=>{
let obj = _._read(_.file)
obj = JSON.parse(obj)
if(!obj[name]) return undefined
return {ID:name,data:obj[name]}

}