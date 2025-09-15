// Getting Html element/s using querySelector/All
// querySelector returns "first element" that match css selector
// To get all matched elements we use querySelectorAll




// let resultElement = document.querySelector('p')
// let resultElement = document.querySelectorAll('p')
// console.log(resultElement)


// Access element with class
let resultedElement = document.querySelector('.coderdost')
// console.log(resultedElement);


// Access element with id
let result = document.querySelector('#coders')
// console.log(result)



//  Other way to get html element 

let resultElement = document.querySelectorAll('p')
console.log(resultElement)





// Get element by tagname
let tagName = document.getElementsByTagName('p')
console.log(tagName)

// Get element by class name
let className = document.getElementsByClassName('coderdost')
console.log(className)

// Get element by id
let idName = document.getElementById('coders')
console.log(idName)