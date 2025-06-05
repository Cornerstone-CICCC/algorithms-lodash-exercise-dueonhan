// Instructions: Use lodash's reduce function to get the product of all numbers in the array.

const _ = require('lodash');

const numbers = [1, 2, 3, 4];

// your code here


const product = _.reduce(numbers, (sum, n) => {
    console.log(`sum ${sum} n ${n} `)
    return sum *= n;
}, 1)


console.log(product); // Expected output: 24
