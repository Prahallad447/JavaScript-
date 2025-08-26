// it is a simply a piece of code which we can use in our program many times

// It is just a variable holding some piece of code

// deckaration 
function nameOfFunction(){
    // code to be executed
    console.log("Hello, World!");   
}
// function call
nameOfFunction()


// Funnction Expression
let fun = function(){      //Also called Anonymous Function
    console.log("Hello, Function Expression!");
}
// calling the function expression
fun()



// passing values (arguments and parameters )

let invitation = function(name ="subhadeep" ,time =" 12:00 am"){     // name => parameter
    console.log(`Welcome ! ${name} You are invited on our event at the time of ${time}`);
}
invitation("Prahallad", "10:00 AM");   // arguments
invitation();

// Returning values (how to return value from the function )
let ageCalculate = function(birthYear,currentYear = 2025){
    let age = currentYear - birthYear;
    return age;
}
console.log(ageCalculate(2005));




// Arrow functiion 
// let invition = (name,time) => `welcome ${name} to this event at ${time}`;
// console.log(invition("Prahallad","10 am"));

let invitations = name => {
    return `Welcome ${name} to our event...`;
}
console.log(invitations("Prahallad"));



// passing function as an argument(higher order function examle)
let upperCase = function(str){
    return str.toUpperCase();
}

let lowerCase = function(str){
    return str.tolowerCase();
}

let transformer = function(str,fun){
    return fun(str);
}
console.log(transformer("Hello World",upperCase))   



// Function returning anpther function

let complement = function(msg){
    return function(name){
        console.log(`${msg} ${name}`)
        // return true;  
    }
}
// console.log(complement("You are good coder")("Subhadeep"));

// complement("You are good coder")("Sayan Metya");

// 2nd method
let complemented = complement("You are good coder");
complemented("Subhadeep");   
// complement is a higher order function




// Immediately invoked function expression(IIFE)
// Executed only one

//now this is expression
(function(name){
    console.log("This function is never executed again",name);
})("IIFE Example")
