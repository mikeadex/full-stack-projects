"use script";

import {
    displayFieldError,
    clearErrorField
} from "../helper.js";

// Error validation for form step 3
export function validateStep3() {
    let isValid = true;

    let jobFields = document.querySelectorAll('.experience-fieldset');

    console.log(`Number of job fields: ${jobFields.length}`);

    jobFields.forEach(fieldset => {

        const i = fieldset.getAttribute('data-index');

        const employerRaw = fieldset.querySelector(`#employer-name-${i}`);
        console.log(employerRaw);
        const jobTitleRaw = fieldset.querySelector(`#job-role-${i}`);
        console.log(jobTitleRaw);
        const employmentTypeRaw = fieldset.querySelector(`#employment-type-${i}`);
        console.log(employmentTypeRaw);
        const startDateRaw = fieldset.querySelector(`#start-date-${i}`);
        const endDateRaw = fieldset.querySelector(`#end-date-${i}`);
        console.log(endDateRaw);
        const jobDescriptionRaw = fieldset.querySelector(`#job-desc-${i}`);
        console.log(jobDescriptionRaw);
        const achievementsRaw = fieldset.querySelector(`#achievements-${i}`);
        console.log(achievementsRaw);

        if (employerRaw === null) {
            console.error('employer  fields are missing');
            return;
        }

        if (jobTitleRaw === null) {
            console.error('job title fields are missing');
            return;
        }

        if (employmentTypeRaw === null) {
            console.error('employment type fields are missing');
            return;
        }

        if (startDateRaw === null) {
            console.error('start date fields are missing');
            return;
        }

        if (endDateRaw === null) {
            console.error('end date fields are missing');
            return;
        }


        if (jobDescriptionRaw === null) {
            console.error('job description fields are missing');
            return;
        }

        if (achievementsRaw === null) {
            console.error('achievements fields are missing');
            return;
        }


        const employer = employerRaw.value.trim();
        const jobTitle = jobTitleRaw.value.trim();
        const employmentType = employmentTypeRaw.value.trim();
        const startDate = new Date(startDateRaw.value.trim());
        const endDate = new Date(endDateRaw.value.trim());
        const jobDescription = jobDescriptionRaw.value.trim();
        const achievements = achievementsRaw.value.trim();




        if (employer === '' || employer === null) {
            displayFieldError(`error-emp-${i}`, 'employer name is required');
            isValid = false;
        } else {
            clearErrorField(`error-emp-${i}`);
        }

        if (jobTitle === '' || jobTitle === null) {
            displayFieldError(`error-title-${i}`, 'You forgot to enter your job title');
            isValid = false;
        } else {
            clearErrorField(`error-title-${i}`);
        }

        if (employmentType === '' || employmentType === null) {
            displayFieldError(`error-type-${i}`, 'You forgot to enter your employment type');
            isValid = false;
        } else {
            clearErrorField(`error-type-${i}`);
        }
        // checks for empty, null, future date, and invalid date format
        if (startDate === '' || startDate === null) {
            displayFieldError(`error-job-start-${i}`, 'start date is required');
            isValid = false;
        } else if (isNaN(startDate.getTime())) {
            displayFieldError(`error-job-start-${i}`, 'Invalid start date format');
            isValid = false;
        } else if (startDate > new Date()) {
            displayFieldError(`error-job-start-${i}`, 'Start date cannot be in the future');
            isValid = false;
        } else {
            clearErrorField(`error-job-start-${i}`);
        }
        // checks for empty, null, future date, and invalid date format
        if (endDate === '' || endDate === null) {
            displayFieldError(`error-job-end-${i}`, 'You forgot to enter your end date');
            isValid = false;
        } else if (isNaN(endDate.getTime())) {
            displayFieldError(`error-job-end-${i}`, 'invalid end date format');
            isValid = false;
        } else {
            clearErrorField(`error-job-end-${i}`);
        }


        if (jobDescription === '' || jobDescription === null) {
            displayFieldError(`error-job-desc-${i}`, 'You forgot to enter your job description');
            isValid = false;
        } else {
            clearErrorField(`error-job-desc-${i}`);
        }
    })
    return isValid;
}