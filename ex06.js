// Instructions: Use lodash's uniq function to remove duplicate numbers from the array.

const _ = require('lodash');

const numbers = [1, 2, 2, 3, 4, 4, 5];

// your code here

const uniqueNumbers = _.sortedUniq(numbers)

console.log(uniqueNumbers); // Expected output: [1, 2, 3, 4, 5]
