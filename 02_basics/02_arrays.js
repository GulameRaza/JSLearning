let marverl_heroes = ['thor', 'ironman', 'spiderman']
const dc_heroes = ['superman', 'flash', 'batman',['test', 'test1']]

// console.log(marverl_heroes.push(dc_heroes)); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] array in array
// console.log(marverl_heroes); 
// console.log(marverl_heroes.concat(dc_heroes)) //still similar result
// marverl_heroes.pop()


// const newAllheros = marverl_heroes.flat(Infinity)
// console.log(newAllheros); 
console.log(marverl_heroes); 
marverl_heroes = [...marverl_heroes,...dc_heroes] //does the work of merging 2 arrays
console.log(marverl_heroes);

let score = 100
let score1 = 200
let score2 = 300


