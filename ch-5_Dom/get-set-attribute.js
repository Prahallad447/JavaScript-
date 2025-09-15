// Getting and setting attribute of element

// https://www.youtube.com/watch?v=lGmRnu--iU8


// Get the attribute

let links = document.querySelector('a')
console.log(links.getAttribute('href'))


// Set the attribute

links.setAttribute('href',' https://www.youtube.com/watch?v=lGmRnu--iU8')
console.log(links.getAttribute('href'))

links.innerText = 'YouTube Link'