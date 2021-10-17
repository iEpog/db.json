let fs = require('fs')
exports.run = (_) => {
fs.writeFileSync(_.file, JSON.stringify({}));
return true
}