const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2));

const otherNumber = 233.898776
const otherNumber2 = 233.898776

// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber2.toPrecision(4));


const bigNumber = 10000000000
// console.log(bigNumber.toLocaleString('en-IN'));


//Math
// console.log(Math.abs(-0));
// console.log(Math.round(444.5));
// console.log((Math.random()*10)+1);
//now to define min and max for random do below
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1))+min);