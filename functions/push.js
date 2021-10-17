let fs = require('fs')
exports.run = (_,name,data) => {

    let obj = _._read(_.file)
    if(!name) throw new Error('ID must not be undefined')
    obj = JSON.parse(obj)
    if(!obj[name]) obj[name]=[]
    if(!Array.isArray(obj[name])) throw new Error('Data is not Array[]')
    obj[name].push(data)
    fs.writeFileSync(_.file, JSON.stringify(obj));
    return {ID:name,data:obj[name]}
}