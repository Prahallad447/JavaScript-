// Array methods 

// Map method 

// Create new array from original array By applying Transformation function


let salaries = [100,2000,60000,5000,84500]
let newsalaries = salaries.map(salary => {
    let increamentedAmount = salary / 2;
    return salary + increamentedAmount;
})

console.log("After 50% bonus new salaries are :",newsalaries)

// length of new array always "equal" to the original array
