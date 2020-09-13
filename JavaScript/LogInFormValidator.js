const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//If there is error in one of the fields
function showError(field, errorMessage) {
    const formControl = field.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = errorMessage;
}

//If field is filled in correctly
function showSuccess(field) {
    const formControl = field.parentElement;
    formControl.className = 'form-control success';
}

//Check if email is valid
function validateEmail(email){
    const REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return REGEX.test(String(email).toLowerCase());
}

//Validate input fields
function validateInput(fieldsArray) {
    for (const field of fieldsArray) {
        console.log(field.value);
    }
}

//Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    validateInput([username, email, password, password2]);
});
