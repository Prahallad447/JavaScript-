// Array slice

// used to Extract part the array
// Array.slice(startingIndex , lastIndex(excluded))
// Return new array of extracted elements

let num = [3,5,7,9,11]

let extractArray = num.slice(0,3)
let extractArray2 = num.slice(1,3)
let extractArray3 = num.slice(-1)

console.log(extractArray)
console.log(extractArray2)
console.log(extractArray3)