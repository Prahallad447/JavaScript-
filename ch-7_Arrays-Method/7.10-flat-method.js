// Array method 
 
// "flat" method

// It creates a new array with the element of the subarrays  "concatenated" into it .


let arr = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]]

console.log("Before flat :"+arr)  //No effect on original array

let result = arr.flat(2)  // by default 1(depth value) value

console.log("After flat ",result)