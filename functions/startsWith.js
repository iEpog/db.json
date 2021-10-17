let fs = require('fs')
exports.run = (_,data)=>{
    let obj = _.all()
    return obj.filter(r=>r.ID.startsWith(data))
}