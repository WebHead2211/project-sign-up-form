const divList = document.querySelectorAll('.form-child');
const button = document.querySelector("button");
let inputList = [];
let pass = document.querySelector('#password');
let confirmPass = document.querySelector('#confirm-password');
const error = document.querySelector('#error');
divList.forEach(item => inputList.push(item.querySelector('input')));

button.addEventListener('click', buttonClick);

function buttonClick(){
    inputList.forEach(item => item.setAttribute('required', ''));
    let passValue = pass.value;
    let confirmPassValue = confirmPass.value;
    if(passValue != confirmPassValue){
        confirmPass.classList.add('invalid');
        pass.classList.add('invalid');
        error.textContent = '*Passwords do not match.'
        button.disabled = true;
    } else {
        // confirmPass.setCustomValidity('');
        // pass.setCustomValidity('');
        pass.classList.remove('invalid');
        confirmPass.classList.remove('invalid');
        button.disabled = false;
    }
}

confirmPass.addEventListener('input', makeValid);

function makeValid(e){
    if(pass.value != e.target.value){
        // confirmPass.setCustomValidity('Invalid Field.');
        // pass.setCustomValidity('Passwords do not match.');
        confirmPass.classList.add('invalid');
        pass.classList.add('invalid');
        error.textContent = '*Passwords do not match.';
        button.disabled = true;
    } else {
        // confirmPass.setCustomValidity('');
        // pass.setCustomValidity('');
        error.textContent = '';
        pass.classList.remove('invalid');
        confirmPass.classList.remove('invalid');
        button.disabled = false;
    }
}

