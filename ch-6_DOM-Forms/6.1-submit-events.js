// Forms Events (submit form)

let form = document.querySelector('.sign-up-form')

// let email = document.querySelector('#email')
// let password = document.querySelector('#password')


form.addEventListener('submit', (e) => {
    e.preventDefault() // 

    // console.log(email.value , password.value)

    // console.log(form.email.value , form.password.value) 

    console.log(form.userEmail.value , form.userPassword.value)

})


// preventDefault() --> Every time you do something on a webpage (click a link, submit a form, right-click, etc.),

// The browser automatically does something by default.

// preventDefault() tells the browser:

// “Hey, don’t do what you normally do — I will handle it myself.”