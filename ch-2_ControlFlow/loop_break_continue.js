for (let i = 0; i <5; i++) {   // Infinite loop in case we miss consitional statement
    console.log(i);
    
    
}

let i = 0
while (i < 5) { // Using a while loop to avoid infinite loop
    console.log(i);
    i++;
}


//Break 

// used to terminate a loop prematurely and control transfer from outside
for (let i = 0; i < 10; i++) {
    if(i == 5) {
        console.log("Breaking the loop at i = 5");
        break; // Breaks the loop when i equals 5
    }
    
}

// Continue 
//aloso callled jump statements --- continue


// switch
let age =15;
switch(age){
    case 15:
    case 16:
    case 17:
        result ="Minor";
        break; // Breaks out of the switch statement
        default:
        result = "Adult";

}
console.log(result); // Minor