"use script";

import {
    displayFieldError,
    clearErrorField
} from "../helper.js";


// Error validation for form step 2
export function validateStep2() {
    let isValid = true;
    let eduFields = document.querySelectorAll('.edu-fieldset');

    console.log(`Number of education fields: ${eduFields.length}`);


    eduFields.forEach(fieldset => {

        const i = fieldset.getAttribute('data-index');


        const schoolNameRaw = fieldset.querySelector(`#school-name-${i}`);
        const courseNameRaw = fieldset.querySelector(`#course-name-${i}`);
        const qualificationRaw = fieldset.querySelector(`#your-qualification-${i}`);
        const startDateRaw = fieldset.querySelector(`#start-date-${i}`);
        const completionDateRaw = fieldset.querySelector(`#error-end-${i}`);
        const certificateInViewRaw = fieldset.querySelector(`#certificate-inview-${i}`);

        if (schoolNameRaw === null || courseNameRaw === null || qualificationRaw === null || startDateRaw === null || completionDateRaw === null) {
            console.error('Required fields are missing');
            return;
        }

        const schoolName = schoolNameRaw.value.trim();
        const courseName = courseNameRaw.value.trim();
        const qualification = qualificationRaw.value.trim();
        const startDate = new Date(startDateRaw.value.trim());
        const completionDate = Date(completionDateRaw);

        // values




        if (schoolName === '' || schoolName === null) {
            displayFieldError(`error-sch-${i}`, 'School name is required');
            isValid = false;
        } else {
            clearErrorField(`error-sch-${i}`);
        }

        if (courseName === '' || courseName === null) {
            displayFieldError(`error-course-${i}`, 'Course name is required');
            isValid = false;
        } else {
            clearErrorField(`error-course-${i}`);
        }

        if (qualification === '' || qualification === null) {
            displayFieldError(`error-qual-${i}`, 'you need to select a qualification');
            isValid = false;
        } else {
            clearErrorField(`error-qual-${i}`);
        }

        if (isNaN(startDate.getTime())) {
            displayFieldError(`error-start-${i}`, 'Invalid start date format');
            isValid = false;
        } else if (startDate > new Date()) {
            displayFieldError(`error-start-${i}`, 'Start date cannot be in the future');
            isValid = false;
        } else {
            clearErrorField(`error-start-${i}`);
        }
        // checks for empty, null, future date, and invalid date format
        if (completionDate === '') {
            displayFieldError(`error-end-${i}`, 'skip if its your current course');
            isValid = false;
        } else {
            clearErrorField(`error-end-${i}`);
        }
    });
    return isValid;
}





document.addEventListener('DOMContentLoaded', () => {
    const initialFieldset = document.querySelector('.edu-fieldset');
    if (initialFieldset) {
        const index = initialFieldset.getAttribute('data-index');
        const certificateCheckbox = initialFieldset.querySelector(`#certificate-inview-${index}`);
        certificateCheckbox.addEventListener('change', () => handleToggle(initialFieldset));
    }
});