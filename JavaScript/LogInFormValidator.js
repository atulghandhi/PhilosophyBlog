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

//Capitalise the first letter of input string
function capitalise(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Check if email is valid
function checkEmail(field){
    const REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(REGEX.test(field.value.trim())){
        showSuccess(field)
    } else {
        showError(field, "Email invalid")
    }
}

//Check input field are required length
function checkLength(field, min, max) {
    if(field.value.length < min){
        showError(field, `${capitalise(field.id)} must be at least ${min} characters`)
    } else if(field.value.length > max){
        showError(field, `${capitalise(field.id)} must be fewer than ${max} characters`)
    } else {
        showSuccess(field);
    }
}

//Validate input strings are not empty
function checkIfEmpty(fieldsArray) {
    fieldsArray.forEach(function (field) {
        if(field.value.trim() === ''){
            showError(field, `${capitalise(field.id)} is required...`)
        } else {
            showSuccess(field);
        }
    })
}

//Validate passwords match
function checkFieldsMatch(field, field2) {
    if(field.value !== field2.value) {
        showError(field2, `${capitalise(field.id)} and ${capitalise(field2.id)} must match...`)
    }
}

//Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkIfEmpty([username, email, password, password2]);
    checkLength(username, 6, 20);
    checkLength(password, 8, 20);
    checkEmail(email)
    checkFieldsMatch(password, password2);
});
