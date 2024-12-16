'use strict';
import {
    validateEmail,
    displayFieldError,
    clearErrorField
} from "./helper.js";

// export function validateStep1() {
//     const firstName = document.getElementById('first-name').value.trim();
//     const lastName = document.getElementById('last-name').value.trim();
//     const address = document.getElementById('address').value.trim();
//     const city = document.getElementById('city').value.trim();
//     const country = document.getElementById('country').value.trim();
//     const phoneNumber = document.getElementById('phone').value.trim();
//     const email = document.getElementById('email').value.trim();

//     let isValid = true;
//     if (firstName === '' || firstName === null) {
//         displayFieldError('errorFn', 'Firstname is required');
//         isValid = false;
//     } else {
//         clearErrorField('errorFn');
//     }

//     if (lastName === '' || lastName === null) {
//         displayFieldError('errorLn', 'Lastname is required');
//         isValid = false;
//     } else {
//         clearErrorField('errorLn');
//     }

//     if (address === '' || address === null) {
//         displayFieldError('errorAd', 'You need to specify your address');
//         isValid = false;
//     } else {
//         clearErrorField('errorAd');
//     }

//     if (city === '' || city === null) {
//         displayFieldError('errorCity', 'Please specify your city');
//         isValid = false;
//     } else {
//         clearErrorField('errorCity');
//     }

//     if (country === '' || country === null) {
//         displayFieldError('errorCountry', 'country is required');
//         isValid = false;
//     } else {
//         clearErrorField('errorCountry');
//     }

//     if (phoneNumber === '' || phoneNumber === null) {
//         displayFieldError('errorPhone', 'You forgot to enter your phone number');
//         isValid = false;
//     } else if (phoneNumber.length < 10) {
//         displayFieldError('errorPhone', 'Phone number must be at least 10 digits');
//         isValid = false;
//     } else {
//         clearErrorField('errorPhone');
//     }

//     if (email === '' || email === null) {
//         displayFieldError('errorEmail', 'You forgot to enter your email');
//         isValid = false;
//     } else if (!validateEmail(email)) {
//         displayFieldError('errorEmail', `Invalid email format: e.g name@example.com`);
//         isValid = false;
//     } else {
//         clearErrorField('errorEmail');
//     }

//     return isValid;
// }



// Error validation for form step 2
export function validateStep2() {
    const schoolName = document.getElementById('school-name').value.trim();
    const courseName = document.getElementById('course-name').value.trim();
    const qualification = document.getElementById('qualification').value.trim();
    const startDateValue = document.getElementById('start-date').value.trim();
    const startDate = new Date(startDateValue);
    const completionDateValue = document.getElementById('completion-date').value.trim();
    const completionDate = new Date(completionDateValue);


    let isValid = true;


    if (schoolName === '' || schoolName === null) {
        displayFieldError('errorSch', 'School name is required');
        isValid = false;
    } else {
        clearErrorField('errorSch');
    }

    if (courseName === '' || courseName === null) {
        displayFieldError('errorCourse', 'Course name is required');
        isValid = false;
    } else {
        clearErrorField('errorCourse');
    }

    if (qualification === '' || qualification === null) {
        displayFieldError('errorQual', 'you need to select a qualification');
        isValid = false;
    } else {
        clearErrorField('errorQual');
    }

    if (isNaN(startDate.getTime())) {
        displayFieldError('errorStart', 'Invalid start date format');
        isValid = false;
    } else if (startDate > new Date()) {
        displayFieldError('errorStart', 'Start date cannot be in the future');
        isValid = false;
    } else {
        clearErrorField('errorStart');
    }
    // checks for empty, null, future date, and invalid date format
    if (completionDate === '') {
        displayFieldError('errorEnd', 'skip if its your current course');
        isValid = false;
    } else {
        clearErrorField('errorEnd');
    }

    return isValid;
}

// Error validation for form step 3
export function validateStep3() {
    const employer = document.getElementById('employer').value.trim();
    const jobTitle = document.getElementById('job-title').value.trim();
    const employmentType = document.getElementById('employment-type').value.trim();
    const startDatevalue = document.getElementById('start-date').value.trim();
    const startDate = new Date(startDatevalue);
    const endDateValue = document.getElementById('end-date').value.trim();
    const endDate = new Date(endDateValue);
    const currentJob = document.getElementById('curren-employment').checked;
    const jobDescription = document.getElementById('job-desc').value.trim();
    const achievements = document.getElementById('achievements').value.trim();

    let isValid = true;
    if (employer === '' || employer === null) {
        displayFieldError('errorEmp', 'You forgot to enter your employer');
        isValid = false;
    } else {
        clearErrorField('errorEmp');
    }

    if (jobTitle === '' || jobTitle === null) {
        displayFieldError('errorTitle', 'You forgot to enter your job title');
        isValid = false;
    } else {
        clearErrorField('errorTitle');
    }

    if (employmentType === '' || employmentType === null) {
        displayFieldError('errorType', 'You forgot to enter your employment type');
        isValid = false;
    } else {
        clearErrorField('errorType');
    }
    // checks for empty, null, future date, and invalid date format
    if (startDate === '' || startDate === null) {
        displayFieldError('errorJobStart', 'start date is required');
        isValid = false;
    } else if (isNaN(startDate.getTime())) {
        displayFieldError('errorJobStart', 'Invalid start date format');
        isValid = false;
    } else if (startDate > new Date()) {
        displayFieldError('errorJobStart', 'Start date cannot be in the future');
        isValid = false;
    } else {
        clearErrorField('errorJobStart');
    }
    // checks for empty, null, future date, and invalid date format
    if (endDate === '' || endDate === null) {
        displayFieldError('errorJobEnd', 'You forgot to enter your end date');
        isValid = false;
    } else if (isNaN(endDate.getTime())) {
        displayFieldError('errorJobEnd', 'invalid end date format');
        isValid = false;
    } else {
        clearErrorField('errorJobEnd');
    }
    if (currentJob === false && endDate < startDate) {
        displayFieldError('errorCurrentJob', 'End date cannot be before start date');
        isValid = false;
    } else {
        clearErrorField('errorCurrentJob');
    }

    if (jobDescription === '' || jobDescription === null) {
        displayFieldError('errorJobDesc', 'You forgot to enter your job description');
        isValid = false;
    } else {
        clearErrorField('errorJobDesc');
    }
    return isValid;
}

// Error validation for form step 4
export function validateStep4() {
    const jobInterest = document.getElementById('job-interest').value.trim();
    const desiredLocation = document.getElementById('preferred-location').value.trim();
    const jobType = document.getElementById('job-type').value.trim();
    let isValid = true;

    let errorMsg = [];
    if (jobInterest === '' || jobInterest === null) {
        errorMsg.push('errorJobInterest', 'What job are you interested in?');
        isValid = false;
    } else {
        clearErrorField('errorJobInterest');
    }

    if (desiredLocation === '' || desiredLocation === null) {
        errorMsg.push('errorLocation', 'You forgot to enter your desired location');
        isValid = false
    } else {
        clearErrorField('errorLocation');
    }

    if (jobType === '' || jobType === null) {
        errorMsg.push('errorJobType', 'You forgot to enter your job type');
        isValid = false;
    } else {
        clearErrorField('errorJobType');
    }

    return isValid;
}


function displayErrors(errorId, messages) {
    const errorContent = document.getElementById(errorId);
    if (!errorContent) {
        console.log(`Error: No error element found with id: ${errorId}`);
        return;
    }
    errorContent.innerHTML = '';

    messages.forEach(msg => {
        const p = document.createElement('p');
        p.textContent = msg;
        errorContent.appendChild(p);
    });
}

