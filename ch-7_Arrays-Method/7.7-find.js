// Array Method

// "find" method

// It retuern the "First" element we are looking for.....


// It is more useful "higher order function"


let students = [{id:1,name:"Alex"} , {id:2,name:"john"} , {id:1,name:"Paul"}]

let result = students.find(student =>{
    return student.id === 1
})

console.log(result);
