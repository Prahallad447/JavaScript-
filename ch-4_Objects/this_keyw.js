// this keyword

// In Each method we have an access of special keyword called "this"

// "this" keyword represent the object. "calling" the "method" in which "this" is "present"


// Example

let person = {
    firstName : "Harry",
    lastName : "Potter",
    city :"London",
    birthYear : 2005,
    education : "Software Engineer",
    getSummary : function(name){
        // console.log(`Harry potter lived in London . He is software Engeneer  and his birthYear is 2005.`)
        // console.log(`${this.firstName} ${this.lastName} and ${name} lived in ${this.city}`);
    }
}
person.getSummary("tom");

// step -1 :  check in which method we use "this" keyword
// sttep-2 : owner of that method(who is callin thos method)





// "this" ---->>>  It is reffer the current contaxt within the object

const user = {
    userName : "Hitesh",
    price :999,
    welComeMessage : function(){
        console.log(`${this.userName} , Welcome to website`);
        console.log(this)
    }
}

user.welComeMessage();
user.userName = "sam";
user.welComeMessage();
// console.log(this);





//  wrong
function myfunction(){
    let user = "Hitesh"
    console.log(this.user)   // undefined
}
myfunction()
