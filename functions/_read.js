let fs = require('fs')
exports.run = (_) => {
try {
    let fileRead= fs.readFileSync(_.file).toString()
    return fileRead
 
 } catch(err){
     return _.createDatabase(_.file)
 }
}