// Bubbling and Delegation

// Bubbling  --> When an event (like a click) happens on an element, it first runs the event handler on that element, and then it "bubbles up" (propagates) to its parent element, then its parent’s parent, and so on, until it reaches the root (document).


// const ul = document.querySelector('ul')
// ul.addEventListener('click',(e)=>{
//     console.log("Inside ul")
// })



let button = document.querySelector('.clickMe')
button.addEventListener("click",function(){
    let li = document.createElement('li')
    li.textContent = "Something new added"
    // ul.append(li)    // append is used to add element at the end
    ul.prepend(li)     // prepend is used to add element at the start
})


// let elements = document.querySelectorAll('li')

// elements.forEach(function(element){
//     element.addEventListener('click',function(e){
//         console.log("Inside li")
//     })
// })



// Delegation  --> Instead of adding event listeners to each individual element, you can add a single event listener to a parent element. This listener can then check which child element triggered the event and handle it accordingly. This is especially useful for dynamically added elements.

let ul = document.querySelector('ul')
ul.addEventListener("click",(e) => {
    // console.log(e.target)
    // console.log(e)
    // console.log("Inside ul")
    if(e.target.nodeName == "LI"){
        e.target.remove()
    }
})



// In the above code, we added a single click event listener to the <ul> element. When any <li> inside it is clicked, the event bubbles up to the <ul>, and we check if the clicked target is an <li>. If it is, we remove that <li>. This way, even if new <li> elements are added later, they will still be handled by this single event listener on the <ul>.