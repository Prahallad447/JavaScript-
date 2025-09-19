// More event 

// COpy event 

 let copyRighthElement = document.querySelector('.copy')

 copyRighthElement.addEventListener('copy',() => {
    console.log("OOI! This is copy Right content")
 })


//  Mouse Move Event

let Box = document.querySelector('.box');
Box.addEventListener('mousemove',(e)=> {
    // console.log(e)
    console.log(e.offsetX,e.offsetY);
}) 