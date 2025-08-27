// Delete properties of an object

let obj = {
    prop1 : "value1",
    prop2 : "value2"
}
delete obj.prop1;
console.log(obj)        // { prop2: 'value2' }
console.log(obj.prop1)  // undefined



let returnValue = delete obj["prop1"]
// It always return true
console.log(obj.prop1 , returnValue)  // undefined true



// Function VS Method

// Function --> It is a block of code which is used to perform a particular task
// which can be called multiple times

// let ageCalculation = function(birthYear){
//     let age = 2025 - birthYear;
//     console.log(`Current age is ${age}`)
// }
// ageCalculation(2005)




// Method  -->It is nothing but object property(key) holding function as "value"
let person = {
    ageCalculation : function(birthYear = 2005){
        let age = 2025 - birthYear;
        return age;
    }
}
console.log(`Current age is ${person.ageCalculation()}`);