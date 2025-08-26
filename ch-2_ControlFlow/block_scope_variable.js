// variable and block scope

// scope  >> -- Area where variable is deefined or accessible

// const score = 90;

if(true){
    const score = 100; // block scope variable
    // console.log(score); // 100
}

console.log(score); // 90
