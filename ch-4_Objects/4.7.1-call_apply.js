// call and apply method
//  We can manually set the value of "this" keyword using call and apply method


//  call ----> current execution context pass the another object context
//  apply ----> same as call but it takes array of arguments
// bind ----> 

'use strict'  

let mainPlane = {
    airline : "Fly India",
    iatacode : "FI",
    bookings : [],
    book : function(flighNum , name){
        console.log(`${name} Booked Flight on ${this.airline} with flight number ${this.iatacode}${flighNum}`);
        this.bookings.push({flightName :`${this.airline}`, name :name , flightNum : `${this.iatacode}${flighNum}`})
    }
}

mainPlane.book(555,"john")
mainPlane.book(125,"herry")

console.log(mainPlane)

// New airline of same group
let childPlane = {
    airline :"Child Plane",
    iatacode : "CP",
    bookings : [],
    
}

let book = mainPlane.book
// book(625, "Lurrie") // book is regular function
// "this" value is "undefined" at least in strict mode


// solution using call method

book.call(childPlane, 124 , "Potter" )
console.log(childPlane)
mainPlane.book.call(mainPlane,458,"mj")
console.log(mainPlane)

// apply method

// book.apply(childPlane,[987,"iron"])
// console.log(childPlane)