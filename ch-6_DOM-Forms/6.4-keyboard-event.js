// Keyboard event

let userNamePattern = /^[A-Za-z]{6,12}$/ 

let user = document.querySelector('#name')
let form = document.querySelector('.sign-up-form')


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


// Live Feedback

user.addEventListener('keyup', (e) => {
    if(userNamePattern.test(e.target.value)){
        user.setAttribute('class' , 'success')
    }
    else{
       user.setAttribute('class' , 'error')
    }
})