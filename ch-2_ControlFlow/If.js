const userName = prompt("Enter your name:")
const userAge = parseInt(prompt("Enter your age:"))
// const userAge = +(prompt("Enter your age:"))
console.log(`Name : ${userName}`);
console.log(`Age : ${userAge}`);

// if(true) console.log("User is a working professionaly");
if(userAge >= 25 && userAge <= 45) 
{
    console.log("User is a working professionaly");
}

// `` ----> string template litarals