// Array Method

// "some" and "every" method

// some method return "true" if "any" array element pass the test .

// "every" method return "true" if "all" elements pass the test

let scores = [25,34,67,65,89]

let result = scores.some(score =>{
    return score >50;
})

console.log("some method :",result)  //true



let newScores = [54,8,89,98,95]

let result2 = newScores.every(score =>{
    return score > 50
})

console.log("every method :",result2)  // falsse