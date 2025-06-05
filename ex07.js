// Instructions: Use lodash's orderBy function to sort the array of objects by the "age" property in descending order.

const _ = require('lodash');

const people = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Jim', age: 20 }
];

// your code here

const sortedPeople = _.orderBy(people, ["age"], ["desc"])

console.log(sortedPeople); // Expected output: [{ name: 'Jane', age: 30 }, { name: 'John', age: 25 }, { name: 'Jim', age: 20 }]
