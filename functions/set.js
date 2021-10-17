let fs = require('fs')
exports.run = (_,name,data) => {

    let obj = _._read(_.file)
    if(!name) throw new Error('Data name must not be undefined')
    obj = JSON.parse(obj)
    obj[name] = data
    fs.writeFileSync(_.file, JSON.stringify(obj));
    return {ID:name,data:obj[name]}
}

exports.name= "set" 