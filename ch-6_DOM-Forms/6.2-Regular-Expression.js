// Lgular Expression (Regex)

// It is a pattern of characters o=used to do pattern matching or we can say for "Data Validation".

// Implementation of password validation

// Length at least = 8
// At least contain one UpperCase letter
// At least contain one Lower Case letter
// At least contain one digit 0 to 9

let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$" ;


let form = document.querySelector('.sign-up-form')
let password = document.querySelector('#password')

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(form.email.value ,form.password.value)

    let result = form.password.value.match(passwordPattern)

    console.log(result)

    if(result){
        alert("Your password is strong")
    }
    else{
        alert("Your password is weak")
    }
})