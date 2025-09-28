// Array method

// Reduce Method

// Run reducer function for each array element
// Array.reduce(function(total,curr=rentValue), initialvalue(starting value))

// It return single value / output

let nums = [1,5,7,8,2,7]

let sum = nums.reduce(function(total,currentValue){
    return total + currentValue ;

},0)

console.log(sum)

// Does not mutate original array

console.log(nums);
