// bind method

// bind ---> the bind() method is used to create a new function with a permanently-bound this keyword. 


function greet(){
    console.log(`Welcome ${this.firstName} ${this.lastName} on coder dost chennel`)  
}


let user = {
    firstName : "Neha",
    lastName : "Maiti"
}

let greets = greet.bind(user);
// greets();


