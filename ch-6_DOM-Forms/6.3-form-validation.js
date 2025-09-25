// Regular Expression part-2  (Regex)

// Basic Form Validation using Regex


// Implement userName validation

// User can only consist of A-z ar a-z
// length of userName between 6 to 12




let userNamePattern = /^[A-Za-z]{6,12}$/ 

let form = document.querySelector('.sign-up-form')
// let password = document.querySelector('#password')


form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(form.email.value ,form.password.value)

    let result =userNamePattern.test(form.userName.value)

    console.log(result == true)

    if(result){
        console.log("username is valid")
    }
    else{
        console.log("Username is not valid ! Try again..!")
    }
})