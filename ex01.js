// Instructions: Use lodash's map function to double each number in the array.

const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];

// your code here

const doubled = _.map(numbers, (num) => num * 2)

console.log(doubled); // Expected output: [2, 4, 6, 8, 10]
