let fs = require('fs')
exports.run = (_) => {
    let file = _._read();
    let returnValue = [];
    let obj = JSON.parse(file);
    for (var name in obj) {
        returnValue.push({ID:name,data:obj[name]})  
    }
    return returnValue
    
}