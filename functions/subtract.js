let fs = require('fs')
exports.run = (_,name,number)=>{        
    let obj = _._read(_.file)
    if(!Number(number)) throw new Error('Number must be Number')
    number = Number(number)
    obj = JSON.parse(obj)
    if(!obj[name]) return _.set(name,number),{ID:name,data:number}
    if(obj[name]){
      if(!Number(obj[name])) throw new Error('Data is not Number') 
      _.set(name,(Number(obj[name])-number))
      return {ID:name,data:(Number(obj[name])-number)}
    }
}