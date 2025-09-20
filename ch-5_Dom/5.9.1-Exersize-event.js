const h1= document.querySelector('h1')
const card =document.querySelector('.card')
const container =document.querySelector('.container')

// function sayHi(){
//     console.log("Hiiiiiiii!");
// }
// function secondsayHi(){
//     console.log("2nd Hiiiiiiii!");
// }


// h1.onclick=sayHi()
// h1.addEventListener('Click',sayHi)
// h1.addEventListener('click',secondsayHi)
let count=0
// card.addEventListener('click',() =>{  //MOuse Click Events
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })
// card.addEventListener('dblclick',(e) =>{ //Mouse dblclick Events
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })

// card.addEventListener('mousedown',(e) =>{ //Mousedown Events
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })

// card.addEventListener('mouseup',(e) =>{ //Mouseup events
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })
// card.addEventListener('mouseenter',(e) =>{  //Mouseenter Events
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })
// card.addEventListener('mouseleave',(e) =>{  //MouseLeave Events
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })

card.addEventListener('mousemove',(e) =>{  // Mousemove Events
    console.log(e);
    const newCard = document.createElement("div")
    newCard.classList.add('card')
    newCard.innerText=count++
    container.append(newCard)
})
// card.addEventListener('mouseout',(e) =>{ // Mouseout Events
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })
// card.addEventListener('mouseover',(e) =>{   //Mouse Over events
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })

// card.addEventListener('wheel',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })

// document.addEventListener('scroll',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })

// card.addEventListener('touchstart',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })
// card.addEventListener('touchend',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })
// card.addEventListener('touchmove',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })
// card.addEventListener('pointermove',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })
// card.addEventListener('pointerenter',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })
// card.addEventListener('pointerleave',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div")
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)

// })