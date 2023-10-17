const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 3,
          max =25;
    
    const username = usernameEl.ariaValueMax.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username must be between ${min} and ${max} characters.')
    }else{
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showError(emailEl)
        valid = true;
    }
    return valid;
};
const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();
    if (!isRequired(password)) {
        showError(password, 'Password cannot be blank.');
    }else if (!isRequired(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase'+
        'character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    }else {
        showError(password);
        valid = true;
    }

    return valid;
};

const checkConfirnPassword = () => {
    let valid = false;

    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    }else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    }else{
        showSuccess(confirmPasswordEl)
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    
}