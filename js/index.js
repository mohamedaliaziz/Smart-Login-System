// all inputs and buttons and links

var signIn = document.querySelector('#signIn')
var signUp = document.querySelector('#signUp')
var home = document.querySelector('#home')
var signupName = document.querySelector('#signupName')
var signupEmail = document.querySelector('#signupEmail')
var signupPassword = document.querySelector('#signupPassword')
var signinEmail = document.querySelector('#signinEmail')
var signinPassword = document.querySelector('#signinPassword')
var user = document.querySelector('#username')
var exist = document.querySelector('#exist')
var Loginn = document.querySelector('#Login')
var signupp = document.querySelector('#signUpp')
var Sign = document.querySelector('#Sign')
var singInn = document.querySelector('#singInn')
var logOut = document.querySelector('#logOut')
var incorrect = document.querySelector('#incorrect')


var signUpArray = [];
if (localStorage.getItem('users') == null) {
    signUpArray = [];
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'));
};
function emptyRegistration() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
};

function erorrEmail() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
};
function signpp() {
    if (emptyRegistration() == false) {
        exist.innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    if (signUpArray.length == 0) {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        exist.innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }
    if (erorrEmail() == false) {
        exist.innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        exist.innerHTML = '<span class="text-success m-3">Success</span>'

    }


};
Sign.addEventListener('click', signpp);

function LoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
};
function login() {
    if (LoginEmpty() == false) {
        incorrect.innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var password = signinPassword.value
    var email = signinEmail.value
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername', signUpArray[i].name)
            home.classList.replace('d-none', 'd-block')
            signIn.classList.replace('d-block', 'd-none');


        } else {
            incorrect.innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
        var username = localStorage.getItem('sessionUsername')
        if (username) {
            user.innerHTML = "Welcome " + username
        }
    }

};
Loginn.addEventListener('click', login);

function logout() {
    localStorage.removeItem('sessionUsername')
    incorrect.innerHTML = ''
    signIn.classList.replace('d-none', 'd-block');
    home.classList.replace('d-block', 'd-none')
};
logOut.addEventListener('click', logout);
function signUpp() {
    incorrect.innerHTML = ''
    signUp.classList.replace('d-none', 'd-block');
    signIn.classList.replace('d-block', 'd-none');
};
signupp.addEventListener('click', signUpp);
function singIn() {
    exist.innerHTML = ''
    signIn.classList.replace('d-none', 'd-block');
    signUp.classList.replace('d-block', 'd-none');
};
singInn.addEventListener('click', singIn);

