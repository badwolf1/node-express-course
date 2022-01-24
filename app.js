const lodash= require('lodash');

console.log('hello');

const items = [1,[2,2, [3,[4,[4]]]]];

const newItems = lodash.flattenDeep(items);
console.log(newItems);