const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const password2 =document.getElementById('password2');

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernameValue = username.ariaValueMax.trim();
    const emailValue = email.ariaValueMax.trim();
    const passwordValue = password.ariaValueMax.trim();
    const password2Value = password2.ariaValueMax.trim();

    if(usernameValue === ''){
        SetError(username, 'Username Cannot Be Blank');
    }
    else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email Cannot Be Blank');
    }
    else if(!isEmail(emailValue))
    {
        setError(email, 'Not a valid Email')
    }
    else{
        setSuccess(email);
    }


if(passwordValue === ''){
    SetError(password, 'Password Cannot Be Blank');
}
else{
    setSuccess(password);
}

if(password2Value === ''){
    SetError(password2, 'Password Cannot Be Blank');
}
else if(password2Value !== password2Value){
    setError(password2, 'Password Does Not March')
}
else{
    setSuccess(password2);
}

}

function sitError(input, message){
    const formControl = input.parentElemnt;
    const small = formControl.querySelector('small');
    formControl.className = 'from-control error';
    small.innerText = message;
}

function setSuccesss(input){
    const formControl = input.parentElemnt;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@'']+(\.[^<>()\[\]\\.,;:s@'']+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-A]{2,}))$/.test(email);
}