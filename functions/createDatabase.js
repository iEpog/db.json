let fs = require('fs')
exports.run = (_) => {
    fs.writeFileSync(_.file, JSON.stringify({}));
    return fs.readFileSync(_.file).toString()
  }

