const score = 400

// Manually Provide a datatype
const balance = new Number(150);
console.log(balance);
console.log(balance.toString());

// console.log(balance.toFixed(3))   // output :: 150.000

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// Output : 10,00,000


// ---------------------------------Math----------------------------------

console.log(Math.abs(-10))  // it changes only negative value to positive.
console.log(Math.round(41.25));

console.log(Math.random()) // it will return value in 0 & 1
console.log((Math.random() * 10) + 1)  // it will always return value > 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

