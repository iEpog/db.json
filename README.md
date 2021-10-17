# db.json
Simple JSON Database. Easy to Use and Very Simple

<h1>Installation</h1>

To install the node-module

``
npm install db.simple
``

Code:
```js
let DB = new require('db.simple')
let db = DB.Database()

```
<h1>Methods</h1>

 - .get(name)
 - .set(name, data)
 - .delete(name)
 - .push(name, data)
 - .add(name, number)
 - .subtract(name, number)
 - .all()
 - .startsWith(name)
 - .resetDatabase()


<h1>Usage</h1>

 - `.get(name)`
 ```js 
//Get Data with data name //return Data Object if exist 
db.get('epog') //output: {ID:'epog', 'TEST DATA'}
```
 - `.add(name, number)`
 ```js 
 //Adds a number to a data. //return Data Object 
 db.add('epogCount',2) //output: {ID:'epogCount', 3}

 ```
 - `.subtract(name, number)`
  ```js 
 // Subtract a number from data
  db.subtract('epogCount',2) //output: {ID:'epogCount', 1}
 ```
 - `.all()`
 ```js 
 // Returns all data in database
  db.all() //output: [ { ID: 'epogCount', data: 1 }, { ID: 'epog', data: 'TEST DATA' } ]
 ```
 - `.startsWith(name)` 
 ```js 
 // Returns all data starting with "Specified Name" in database
 
db.startsWith('Roles_') 
//output:
[
  { ID: 'Roles_1634476131578', data: 102 },
  { ID: 'Roles_1634476131594', data: 232 },
  { ID: 'Roles_1634476131603', data: 10 },
  { ID: 'Roles_1634476131611', data: 3 },
  { ID: 'Roles_1634476131616', data: 5 }
]
 ```
   - `.delete(name, data)`
 ```js 
 // Delete data from database
  db.delete('Today')
//output: true
 ```
 
  - `.set(name, data)`
 ```js 
 // Set data to database
  db.set('Today',Date.now())
//output: { ID: 'Today', data: 1634476515562 }
 ```
  - `.push(name, data)`
 ```js 
 // push data into Array[]
  db.push('epogArray','asd')
  db.push('epogArray','test')
    //output: 
    [
  {
    ID: 'epogArray',
    data: [ 'asd', 'test' ]
  }
]

 ```
   - `.resetDatabase()`
 ```js 
 // Reset Database
  db.resetDatabase()
//output: true
 ```
