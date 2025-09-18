// Event basic  

// let eventElement = document.querySelector('.clickMe')

// eventElement.addEventListener('click',function(){
//     console.log('Clicked Me')
// })



let elements = document.querySelectorAll('li')

elements.forEach(function(element){
    element.addEventListener('click',function(e){
        // console.log("clicked on",element.innerText)

        // console.log(e.target)

        e.target.style.textDecoration = "Line-through"


    })
})