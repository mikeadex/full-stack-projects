"use script";

import {
    validateEmail,
    displayFieldError,
    clearErrorField
} from "../helper.js";


export function validateStep1() {
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const country = document.getElementById('country').value.trim();
    const phoneNumber = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    let isValid = true;
    if (firstName === '' || firstName === null) {
        displayFieldError('errorFn', 'Firstname is required');
        isValid = false;
    } else {
        clearErrorField('errorFn');
    }

    if (lastName === '' || lastName === null) {
        displayFieldError('errorLn', 'Lastname is required');
        isValid = false;
    } else {
        clearErrorField('errorLn');
    }

    if (address === '' || address === null) {
        displayFieldError('errorAd', 'You need to specify your address');
        isValid = false;
    } else {
        clearErrorField('errorAd');
    }

    if (city === '' || city === null) {
        displayFieldError('errorCity', 'Please specify your city');
        isValid = false;
    } else {
        clearErrorField('errorCity');
    }

    if (country === '' || country === null) {
        displayFieldError('errorCountry', 'country is required');
        isValid = false;
    } else {
        clearErrorField('errorCountry');
    }

    if (phoneNumber === '' || phoneNumber === null) {
        displayFieldError('errorPhone', 'Phone number is required');
        isValid = false;
    } else if (phoneNumber.length < 10) {
        displayFieldError('errorPhone', 'Phone number must be at least 10 digits');
        isValid = false;
    } else {
        clearErrorField('errorPhone');
    }

    if (email === '' || email === null) {
        displayFieldError('errorEmail', 'email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        displayFieldError('errorEmail', `Invalid email format: e.g name@example.com`);
        isValid = false;
    } else {
        clearErrorField('errorEmail');
    }

    return isValid;
}