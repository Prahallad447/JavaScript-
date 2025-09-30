// Array Method

// sorting array using sort method


// By default sort method is used to sort strings . 
// It firstly convert everything into string and then....


let letters =['p','r','a','m','a']

console.log(letters.sort())

let nums = [2,5,-1,-22,-78,8]
// console.log(nums.sort()) //Unexpected


// If a-b < 0 ----> a<b(3<5) ---> A,B (Keep order same) 

// If a-b > 0 ----> a>b -----B,A (Switch the order)


// By default sort method used Assending

nums.sort((a,b) =>{
    // if(a<b){
    //     return -1
    // }
    // if(a>b){
    //     return 1
    // }
    return a-b
})

console.log("Sorted assn :",nums)


// By default sort method used Assending
nums.sort((a,b) =>{
    return b-a
})
console.log("Sorted desc",nums);
