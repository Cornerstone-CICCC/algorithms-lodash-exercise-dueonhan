// Instructions: Use lodash's find function to get the first number in the array 
// that is greater than 5.

const _ = require('lodash');

const numbers = [1, 3, 5, 7, 9];

// your code here

const firstGreaterThanFive = _.reduce(numbers, function (sum, n) {
    return sum + n
}, 0)

console.log(firstGreaterThanFive); // Expected output: 7
