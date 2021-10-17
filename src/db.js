const { EventEmitter } = require('events')
let fs = require('fs');
const { isArray } = require('util');
let path = require('path')


class Database extends EventEmitter {
  constructor(opts) {

    super();
    let root = __dirname
  function locateFolder() {

    let pkg = path.join(root, 'package.json')
    let oldRoot = root

    root = path.resolve(root, '..')

    if (fs.existsSync(pkg)) {


        return oldRoot
      

    }
    return locateFolder()
  }
    
    this.folder = locateFolder()
    
    this.opts = opts
    if (!this.opts) this.opts = {}
    if (this.opts.file) {
      if (!this.opts.file.endsWith('.json')) throw new Error('File extension must end with ".json"')
    } else this.opts.file = 'db.json'
    this.file = this.opts.file

  }


  createDatabase() {
    return require('./functions/createDatabase').run(this)
  }

  push(name, data) {
    return require('./functions/push').run(this, name, data)

  }

  resetDatabase() {

    return require('./functions/resetDatabase').run(this)

  }

  set(name, data) {
    return require('./functions/set').run(this, name, data)
  }

  subtract(name, number) {
    return require('./functions/subtract').run(this, name, number)


  }

  add(name, number) {
    return require('./functions/add').run(this, name, number)


  }

  delete(name) {

    return require('./functions/delete').run(this, name)

  }

  all() {
    return require('./functions/all').run(this)


  }




  startsWith(data) {
    return require('./functions/startsWith').run(this, data)

  }


  get(name) {
    return require('./functions/get').run(this, name)

  }


  _read() {
    return require('./functions/_read').run(this)


  }
}
module.exports = Database