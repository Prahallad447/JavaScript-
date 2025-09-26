// Array methods

// splice method

// used to add new element into the array
// Array.splice(index , deleteValue , valueToBeAdded)
// Return deleted items in the form of array

let num = [3,5,7,9,2]
let updated = num.splice(1,2,15)

let update = num.splice(1,0,100,15)

console.log("Original array : ",num)          // [ 3, 15, 9, 2 ]
console.log("Returned Element array : ",updated) // [ 5, 7 ]