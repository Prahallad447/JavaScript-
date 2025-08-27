// Introduction to objects in javaScript

let car = {
    color : "Black",
    model : "2026",
    company :"tata"
}
console.log(car);

// Accessing the javaScript object properties
console.log(car["color"])
console.log(car.model)

let propertyName = "color";
console.log(car[propertyName])    // Computed
// ************   When i use Bracket notation ,i pass the variable and i change the value in future , and i pass the exact name of the property which is present in the object  ***********

console.log(car.propertyName);  
// ******  When i use dot notation ,i pass the exact name of the property which is present in the object  ***********



 


// "Modify" the object

car.color = "red"
// car["color"] = "red"
console.log(car.color)
console.log(car)