const myArr = [1,2,3,4]
myArr.push(2)
// console.log(myArr);
myArr.pop()
// console.log(myArr);
myArr.shift()
// console.log(myArr);
myArr.unshift(1)
// console.log(myArr);

// const newArr = myArr.join() // will make this as string

console.log('A', myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log('B', myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log('C', myArr);
