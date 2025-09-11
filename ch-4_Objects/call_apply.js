// call and apply method
//  We can manually set the value of "this" keyword using call and apply method

let mainPlane = {
    airline : "Fly India",
    iatacode : "FI",
    bookings : [],
    book : function(flighNum , name){
        console.log(`${name} Booked Flight on ${this.airline} with flight number ${this.iatacode}${flighNum}`);
    }
}

mainPlane.book(555,"john")