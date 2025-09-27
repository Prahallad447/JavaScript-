// Array method 

// filter method (used to perform filteration on array)

let gifts = ["Watch","Ring","Chocolstes","Teddy-Bear","Watch","Ring","tedy"]

// Now you want to filter only "Watch and Ring" gifts

let filterArray = gifts.filter(gift => {
    if(gift =="Watch" || gift == "Ring")
    {
        return gift;
    }
})

// It return "new" Array
console.log(filterArray)    // [ 'Watch', 'Ring', 'Watch', 'Ring' ]

console.log(gifts)     // ['Watch','Ring''Chocolstes', 'Teddy-Bear', 'Watch', 'Ring', 'tedy']

// Imp note
// Length of new array may or may not be equal to original array