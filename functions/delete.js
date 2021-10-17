let fs = require('fs')
exports.run = (_,name)=>{
let obj = _._read(_.file)
obj = JSON.parse(obj)
if(!obj[name]) return undefined
delete obj[name]
fs.writeFileSync(_.file, JSON.stringify(obj));
return true
}