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


//  It does not return a new array and does not modify the original array. It's commonly used for iteration and performing actions on each array element.

// Syntax
    // array.forEach(callback(element, index, arr), thisValue);




 

// Object inside array
let blockList = [{Username : "john",reason:"Abusive Contact"}, {Username : "sam",reason:"Spam"}]
console.log(blockList)

for(let i=0;i<blockList.length;i++){
    console.log(`${blockList[i].Username} Blocked due to this reason ${blockList.reason} as resone`);
}







