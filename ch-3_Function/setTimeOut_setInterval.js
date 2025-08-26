// setTimeout and setinterval

// setTimeOut  -->> Run function "once" after "interval" of time

// setInterval  -->> Run function repeatedly, starting after the interval of time then repeating.........

// setTimeOut(func | code , delay ,arg1 , arg2,....)

function geeting(){
    console.log("Hello World");
}
// setTimeout(geeting,5000);  // 5000ms = 5sec


// setTimeout(function greeting(){
    //     console.log("Welcome to our coder dost family");
    // },6000)


function geeting(name){
    console.log(`Welcome to our coder dost family ${name}`);
}
// setTimeout(geeting,5000,"neha");  // 5000ms = 5sec




// setInterval

// setInterval  -->> Run function repeatedly, starting after the interval of time then repeating.........

// setInterval(func | code , delay, arg1,arg2,...)
setInterval(geeting , 2000);