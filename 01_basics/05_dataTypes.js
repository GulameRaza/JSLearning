// Primitive
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference or non-primitive
//Array, Objects, Function

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null

let username;
const id = Symbol('123')
const anotherId = '123'

// console.log(id == anotherId); // false
const bigNumber = 7867678686767645454576n
// console.log(bigNumber);

const heros = ['faizal', 8, 'Mumbai']
console.log(heros);
const objExample = {
    'name' : 'faizal',
    'age'  : 8
}

const myFunction = function(){
    console.log('testing');
}

console.log(typeof myFunction);
console.log(typeof objExample);
console.log(typeof heros);

// Memory
// +++++++++++++++_+_+_+_+_+_+_+_+_++++++++++++++++_+_+_+_+_+_+++++++++++++++++++++++_+_+_+_+_+++++++++++++++++++++++++

//2 types

//Stack and Heap
// Im primitive type Stack memory
// In non-primitive type heap memory

//Example
