// math object --- built in object

console.log(Math)

let number = 9.2
console.log(Math.round(number))  // 9 ...// Round to neareest integer
console.log(Math.floor(number))  // 9 ...// Round to down
console.log(Math.ceil(number))   // 10 ...// round to up
console.log(Math.trunc(number))  // 9 ...// Remove decimal part

let random = Math.random()
// console.log(random)
console.log(Math.round(random*100))  // 1 - 100