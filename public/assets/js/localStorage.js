'use strict';
// Helper function to attach event handlers
function attachFormHandler(formId, handler, eventType = 'submit', selector = null) {
    const form = document.getElementById(formId);
    if (form) {
        if (selector) {
            const elements = form.querySelectorAll(selector);
            elements.forEach(element => {
                element.addEventListener(eventType, handler);
                console.log(`Event handler of type '${eventType}' attached to elements matching '${selector}' in form with ID: ${formId}`);
            });
        } else {
            form.addEventListener(eventType, handler);
            console.log(`Event handler of type '${eventType}' attached to form with ID: ${formId}`);
        }
    } else {
        console.warn(`Form with ID: ${formId} not found.`);
    }
}
// Example storage1 function (assuming it's correctly implemented)
function storage1(event) {
    event.preventDefault();
    console.log('storage1 function triggered');

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const country = document.getElementById('country').value.trim();
    const phoneNumber = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    const data1 = {
        firstName,
        lastName,
        address,
        city,
        country,
        phoneNumber,
        email
    };
    console.log('Data1:', data1);

    const storedData = localStorage.getItem('data1');
    if (storedData) {
        console.warn('Data1 already exists in localStorage. Overwriting with new data.');
    }

    localStorage.setItem('data1', JSON.stringify(data1));
    console.log('Data1 stored in localStorage.');
}

function storage2(event) {
    event.preventDefault();
    console.log('storage2 function triggered');

    const schoolFields = document.querySelectorAll('[id^="school-name-"]');
    const allData = [];

    if (schoolFields.length === 0) {
        console.warn('No school fields found.');
    }

    schoolFields.forEach(schoolField => {
        const index = schoolField.id.split('-').pop();
        console.log(`Processing field index: ${index}`);

        const schoolName = document.querySelector(`#school-name-${index}`).value.trim();
        const courseName = document.querySelector(`#course-name-${index}`).value.trim();
        const qualification = document.querySelector(`#your-qualification-${index}`).value;
        const startDate = document.querySelector(`#start-date-${index}`).value;
        const completionDate = document.querySelector(`#completion-date-${index}`).value;
        const certificateInView = document.querySelector(`#certificate-inview-${index}`).checked;

        console.log(`Extracted Data for index ${index}:`, {
            schoolName,
            courseName,
            qualification,
            startDate,
            completionDate,
            certificateInView
        });

        allData.push({
            schoolName,
            courseName,
            qualification,
            startDate,
            completionDate,
            certificateInView
        });
    });



    const storedData = localStorage.getItem('data2');
    if (storedData) {
        console.warn('Data2 already exists in localStorage. Overwriting with new data.');
    }

    localStorage.setItem('data2', JSON.stringify(allData));
    console.log('Data2 stored in localStorage.');
}

function storage3(event) {
    event.preventDefault();
    console.log('storage3 function triggered');

    const jobFields = document.querySelectorAll('[id^="employer-name-"]');
    const allData = [];

    if (jobFields.length === 0) {
        console.warn('No job fields found.');
    }

    jobFields.forEach(jobField => {
        const index = jobField.id.split('-').pop();
        console.log(`Processing field index: ${index}`);

        const employerName = document.querySelector(`#employer-name-${index}`).value.trim();
        const jobRole = document.querySelector(`#job-role-${index}`).value.trim();
        const employmentType = document.querySelector(`#employment-type-${index}`).value;
        const startDate = document.querySelector(`#start-date-${index}`).value;
        const endDate = document.querySelector(`#end-date-${index}`).value;
        const jobDescription = document.querySelector(`#job-desc-${index}`).value.trim();
        const achievements = document.querySelector(`#achievements-${index}`).value.trim();

        console.log(`Extracted Data for index ${index}:`, {
            employerName,
            jobRole,
            employmentType,
            startDate,
            endDate,
            jobDescription,
            achievements
        });

        allData.push({
            employerName,
            jobRole,
            employmentType,
            startDate,
            endDate,
            jobDescription,
            achievements
        });
    });

    const storedData = localStorage.getItem('data3');
    if (storedData) {
        console.warn('Data3 already exists in localStorage. Overwriting with new data.');
    }
    localStorage.setItem('data3', JSON.stringify(allData));
    console.log('Data3 stored in localStorage.');
}

function storage4(event) {
    event.preventDefault();
    console.log('storage4 function triggered');

    const jobInterest = document.getElementById('desired-position').value.trim();
    const desiredLocation = document.getElementById('preferred-location').value.trim();
    const jobType = document.getElementById('job-type').value.trim();
    let isValid = true;

    const data4 = {
        jobInterest,
        desiredLocation,
        jobType
    };
    console.log('Data4:', data4);

    const storedData = localStorage.getItem('data4');
    if (storedData) {
        console.warn('Data4 already exists in localStorage. Overwriting with new data.');
    }
    localStorage.setItem('data4', JSON.stringify(data4));
    console.log('Data4 stored in localStorage.');

}

function storage5() {
    // capture data from personal statement
    // aggregate all data from localStorage
    // send data to ai writer function
    // clear localStorage

    // later: ai writer function will return a response
    // display response to user
    // store response in postgres database as CV and as objects for future reusage
}

// Attach event listeners after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    attachFormHandler('form1', storage1);
    attachFormHandler('form-education-wrap', storage2, 'click', '#next2');
    attachFormHandler('form-employment-wrap', storage3, 'click', '#next3');
    attachFormHandler('form4', storage4);
});