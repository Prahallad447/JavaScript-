// forEach method of array

// Its another type of loop which we used to traverse over the array

let dishes = ["eggroll","pasta","pizza","Burgar","chocolate"]

// Using loop
for(let i=0 ;i<dishes.length ; i++){
    console.log(dishes[i])
}

console.log("***********")

// Using forEach method
dishes.forEach(function(element){
    console.log(element);
})

// using arrow function
dishes.forEach(food => console.log(food))


//  It does not return a new array and does not modify the original array. It's commonly used for iteration and performing actions on each array element.

// Syntax
    // array.forEach(callback(element, index, arr), thisValue);











