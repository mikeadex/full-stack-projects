"use script";

import {
    displayFieldError,
    clearErrorField
} from "../helper.js";


// Error validation for form step 4
export function validateStep4() {
    const jobInterest = document.getElementById('desired-position').value.trim();
    const desiredLocation = document.getElementById('preferred-location').value.trim();
    const jobType = document.getElementById('job-type').value.trim();
    let isValid = true;

    let errorMsg = [];
    if (jobInterest === '' || jobInterest === null) {
        displayFieldError('errorJobInterest', 'What job are you interested in?');
        isValid = false;
    } else {
        clearErrorField('errorJobInterest');
    }

    if (desiredLocation === '' || desiredLocation === null) {
        displayFieldError('errorLocation', 'You forgot to enter your desired location');
        isValid = false
    } else {
        clearErrorField('errorLocation');
    }

    if (jobType === '' || jobType === null) {
        displayFieldError('errorJobType', 'You forgot to enter your job type');
        isValid = false;
    } else {
        clearErrorField('errorJobType');
    }

    return isValid;
}