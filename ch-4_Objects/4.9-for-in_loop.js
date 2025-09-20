// for-in loop  (Each iteration return a "key" of object)


let car ={
    model:2025,
    color: "black",
    company:"Toyota"
}

console.log(car)

let x = ""
for(let key in car){
    x=x+car[key]
}
console.log(x)


// enumerable property :-->>
// an enumerable property is a property of an object that can be iterated over in loops like for...in or retrieved by functions like Object.keys().