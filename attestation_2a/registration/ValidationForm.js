'use strict';

const button = document.querySelector('.form__registration__button');

button.addEventListener('click', (event) => {
    event.preventDefault();

    // ----- create person ----- //

    const person = new Object();

    // ----- for input Email ----- //

    const email = document.querySelector('.form__registration__input-email').value;
    const inputEmail = document.querySelector('.form__registration--error-email');
    const fillEmail = document.querySelector('.form__registration__required-to-fill-email');
    const incorrectEmail = document.querySelector('.form__registration__incorrect-input');

    // ----- for input password ----- //

    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirmation').value;
    const inputPassword = document.querySelector('.form__registration--error-password');
    const fillPassword = document.querySelector('.form__registration__required-to-fill-password');
    const inputPasswordConfirm = document.querySelector('.form__registration--error-password-confirm');
    const notMatchConfirm = document.querySelector('.form__registration__not-match');
    const lengthPassword = document.querySelector('.form__registration__password-length');

    // ----- validation Email ----- //

    if (email.length === 0) {
        errorBorder(inputEmail);
        showErrorName(fillEmail);
        hideErrorName(incorrectEmail);
    }

    if (!validateEmail(email) && email.length >= 1) {
        showErrorName(incorrectEmail);
        errorBorder(inputEmail);
        hideErrorName(fillEmail);
    }

    if (validateEmail(email)) {
        borderNormal(inputEmail);
        hideErrorName(incorrectEmail);
        hideErrorName(fillEmail);
        person.email = email;
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // ----- validation password ----- //

    if (password !== passwordConfirm) {
        errorBorder(inputPassword);
        errorBorder(inputPasswordConfirm);
        showErrorName(notMatchConfirm);
        hideErrorName(fillPassword);
    }

    if (password === '') {
        errorBorder(inputPassword);
        showErrorName(fillPassword);
    }

    if (passwordConfirm.length === 0) {
        errorBorder(inputPasswordConfirm);
        showErrorName(notMatchConfirm);
    }

    if (password.length > 0 && password.length < 8) {
        errorBorder(inputPassword);
        showErrorName(lengthPassword);
        hideErrorName(notMatchConfirm);
    }

    if (password.length >= 8 || password.length === 0) {
        hideErrorName(lengthPassword);
    }

    if (password.length >= 8 && password === passwordConfirm) {
        borderNormal(inputPassword);
        borderNormal(inputPasswordConfirm);
        hideErrorName(notMatchConfirm);
        hideErrorName(fillPassword);
        person.password = password;
        person.passwordConfirm = passwordConfirm;
    }

    const getGender = () => {
        const man = document.getElementById('man');
        const woman = document.getElementById('woman');
        if (man.checked) {
            person.sex = 'MAN';
        } else if (woman.checked) {
            person.sex = 'WOMAN';
        }
    };

    const getComment = () => {
        const comment = document.getElementById('comment');
        person.comment = comment.value;
    };

    const getCheckbox = () => {
        const check = document.getElementById('checkbox');
        if (check.checked) {
            person.checkbox = true;
        } else {
            person.checkbox = false;
        }
    };

    const getData = () => {
        getGender();
        getComment();
        getCheckbox();
    };

    // ----- error ----- //

    function errorBorder (elem) {
        elem.style.borderColor = 'rgba(238, 36, 36, 1)';
    }

    function borderNormal (elem) {
        elem.style.borderColor = '#787878';
    }

    function showErrorName (elem) {
        elem.style.display = 'block';
    }

    function hideErrorName (elem) {
        elem.style.display = 'none';
    }

    // ----- validation Email and password ----- //

    if (validateEmail(email) && password.length >= 8 && password === passwordConfirm) {
        getData();
        console.log(person);
    }
});
