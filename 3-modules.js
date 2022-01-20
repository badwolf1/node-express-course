
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavors')
console.log("data",data)
console.log(names);

console.log('hello');
console.log(__dirname);


sayHi('sussan');
sayHi(names.john);
sayHi(names.peter);
sayHi(names.sarah);


var apple = require('./6-grenate.js');