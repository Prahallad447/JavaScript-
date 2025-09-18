// Creating and removing the element

// Creating

const ul = document.querySelector('ul')

let button = document.querySelector('.clickMe')
button.addEventListener('click',function(){
    let li = document.createElement('li')
    li.textContent = "Something new added"
    ul.append(li)    // append is used to add element at the end
    // ul.prepend(li)     // prepend is used to add element at the start

})





// Removing

let elements = document.querySelectorAll('li')

elements.forEach(function(element){
    element.addEventListener('click',function(e){
        // console.log("clicked on",element.innerText)

        // console.log(e.target)

        // e.target.style.textDecoration = "Line-through"

        e.target.remove()
    })
})