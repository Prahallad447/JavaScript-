// Bubbling and Delegation

// Bubbling  -->When an event happens on an element, it starts from the innermost element (where the event occurred) and then bubbles up to its parent elements, one by one, until it reaches the topmost ancestor (usually document).
// Order: Child → Parent → Ancestors → Document.


// const ul = document.querySelector('ul')
// ul.addEventListener('click',(e)=>{
//     console.log("Inside ul")
// })



let button = document.querySelector('.clickMe')
button.addEventListener("click",function(){
    let li = document.createElement('li')
    li.textContent = "Something new added"
    // ul.append(li)    // append is used to add element at the end
    ul.prepend(li)    // prepend is used to add element at the start
    // ul.appendChild(li)
})


// let elements = document.querySelectorAll('li')

// elements.forEach(function(element){
//     element.addEventListener('click',function(e){
//         console.log("Inside li")
//     })
// })



// Delegation  --> Instead of adding event listeners to multiple child elements, you attach one event listener to a common parent element, and use it to handle events for all its children

let ul = document.querySelector('ul')
ul.addEventListener("click",(e) => {
    // console.log(e.target)
    // console.log(e)
    // console.log("Inside ul")
    if(e.target.nodeName == "LI"){
        e.target.remove()
    }
})
