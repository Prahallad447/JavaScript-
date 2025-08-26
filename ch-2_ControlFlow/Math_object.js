// const a = Math.sqrt(25);
// console.log(a);


//  //Methods on math object

// floor --> that rounds a number down to the nearest integer
// console.log(Math.floor(2.88999999999999999));          // 2
// console.log(Math.floor(7.864992));                     // 7
// console.log(Math.floor(-2.99999999999999999));         // -3
// console.log(Math.floor(-2.88999999));                  // -3

// Rounds up to nearest integer
// console.log(Math.ceil(-2.9999999999999));                  // -2
// console.log(Math.ceil(2.2222));                            // -3
// console.log(Math.ceil(-2.9999999999999));               // -3
// console.log(Math.ceil(2.2222));                         // 3

// console.log(Math.round(2.858));   // 3
// console.log(Math.round(2.458));   // 2


//  Random ---> 0 to < 1 
// console.log(Math.random());   // 0.8738880344247555
// console.log(Math.random() * 20 );   // 17.19101123205702
// console.log(Math.floor(Math.random() * 20 ));   // 17.19101123205702

// // Assignment --> use floor and random method to print a value between 10 to 20
// let min = 10;
// let max = 20;
// let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNumber);

// let randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
// console.log(randomNumber);

// console.log(8/0);  //Infinity



// const width = +prompt('Enter rectangle width')
// const height = +prompt('Enter rectangle height')
// const result = width * height
// console.log(width * height);




// Methmetical expression
let result1 = 42*4 + (5 * 8 ) - 56 /5 % 4 ;
// using priority and preference
// 1 () Brackets
// 2 ** Power operator
// 3 * / % (From left to right)
// 4 + - (From left to right)
console.log(result1);  // 204.8