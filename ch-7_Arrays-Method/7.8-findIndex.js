// Array Method

// findIndex Method

// Excuate function for each array  element
// It return "index" of that array element who first pass the test "otherwise" -1 


let ages = [21,18,17,23,20]

let result = ages.findIndex(age =>{
    return age > 22;
})

console.log("Index of required age = ",result)   // Index of required age =  3




// using object
let students = [{id:1,name:"Alex"} , {id:2,name:"john"} , {id:1,name:"Paul"}]

let results = students.findIndex(student =>{
    // return student.id === 2
    return student.name === "Paul"
})

console.log(results);
