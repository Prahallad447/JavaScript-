// "Object/Array" how "reference" are passed to variable

let arr = [1,2,3,4,5]

let getRef = arr;

// getRef[5] = 7;
// getRef.shift();   //removes the first element

console.log("Original Array :",arr); // Also change
console.log("getRef Array :",getRef);

console.log("----------------")


// Pass by value

let getValue = [...arr]   // separate operator

getValue[5] = 8;
getValue.shift();

console.log("Original Array :",arr); // Also change
console.log("getRef Array :",getValue);