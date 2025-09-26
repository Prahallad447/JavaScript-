// Working with Arrays(simple method)

let letters = ["a","b","c","d","e"]


let cpy = [...letters]   // copy of the array
console.log(cpy);

// Reverse (Mutate the original array)
let reverse = letters.reverse()

console.log(reverse);
console.log(letters);


// Concate 
let nums = [1,2,3,4]

let concated = nums.concat(letters)
console.log(concated)


// Join

let joined = letters.join('*')
console.log(joined)