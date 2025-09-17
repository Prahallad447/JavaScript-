// Parent , children and shibling Elements


let parentElement = document.querySelector('.content')

// All children of Parent
// console.log(parentElement.children)

// console.log(parentElement.childNodes)


// We can not run forEach Method on HTMLCollection so first convert it into array

// console.log(Array.from(parentElement.children))



Array.from(parentElement.children).forEach(function(element) {
    element.classList.add('bg-primary')
})



// find parent element 
let childElement = document.querySelector('p')
console.log(childElement.parentElement);


// find next/previous sibling

console.log(childElement.nextElementSibling);
