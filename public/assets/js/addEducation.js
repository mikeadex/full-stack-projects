'use strict';

let eduCount = document.querySelectorAll('.edu-fieldset').length;

// Function to handle toggle
function handleToggle(fieldset) {
    const i = fieldset.getAttribute('data-index');
    const certificateCheckBox = fieldset.querySelector(`#certificate-inview-${i}`);
    console.log(`Certificate checkbox ${i}: ${certificateCheckBox.checked}`);
    const completionDate = fieldset.querySelector(`#completion-date-${i}`);
    console.log(`Completion date ${i}: ${completionDate.value}`);
    console.log(`Completion date ${i}: ${completionDate.parentElement.hidden}`);

    if (certificateCheckBox.checked) {
        console.log('Certificate checkbox is checked');
        completionDate.setAttribute('hidden', '');
    } else {
        console.log('Certificate checkbox is not checked');
        completionDate.removeAttribute('hidden');
    }
}

function addEducationFieldSet() {
    eduCount++;

    const educationContainer = document.getElementById('education-container');
    const allFieldsets = educationContainer.querySelectorAll('.edu-fieldset');
    const lastFieldSet = allFieldsets[allFieldsets.length - 1];
    const cloned = lastFieldSet.cloneNode(true);

    // Update data-index
    cloned.setAttribute('data-index', eduCount);

    // Update all HTML elements with the new data-index
    const inputs = cloned.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        if (input.id) {
            const idParts = input.id.split('-');
            // Remove the last part (index) and join the rest to form the base ID
            const baseId = idParts.slice(0, -1).join('-');
            const newId = `${baseId}-${eduCount}`;
            input.id = newId;

            // Update aria-describedby ID
            if (input.getAttribute('aria-describedby')) {
                const errorIdParts = input.getAttribute('aria-describedby').split('-');
                const baseErrorId = errorIdParts.slice(0, -1).join('-');
                const newErrorId = `${baseErrorId}-${eduCount}`;
                input.setAttribute('aria-describedby', newErrorId);
            }
        }

        // Clear input values before appending
        if (input.type !== 'checkbox' && input.tagName.toLowerCase() !== 'select' && input.tagName.toLowerCase() !== 'textarea') {
            input.value = '';
        } else if (input.type === 'checkbox') {
            input.checked = false;
        } else if (input.tagName.toLowerCase() === 'select') {
            input.selectedIndex = 0;
        }
    });

    // Update Error message IDs
    const errorMsgs = cloned.querySelectorAll('.error');
    errorMsgs.forEach(errorMsg => {
        if (errorMsg.id) {
            const errorParts = errorMsg.id.split('-');
            const baseErrorId = errorParts.slice(0, -1).join('-');
            const newErrorId = `${baseErrorId}-${eduCount}`;
            errorMsg.id = newErrorId;
        }
        errorMsg.textContent = '';
    });

    // Update label for attributes
    const labels = cloned.querySelectorAll('label.label');
    labels.forEach(label => {
        if (label.getAttribute('for')) {
            const forParts = label.getAttribute('for').split('-');
            const baseFor = forParts.slice(0, -1).join('-');
            const newFor = `${baseFor}-${eduCount}`;
            label.setAttribute('for', newFor);
        }
    });

    // Append the cloned fieldset to the education container
    educationContainer.appendChild(cloned);

    // Add event listener to the toggle function
    const certificateCheckBox = cloned.querySelector(`#certificate-inview-${eduCount}`);
    certificateCheckBox.addEventListener('change', () => handleToggle(cloned));

    // Initialize toggle based on the checkbox state
    handleToggle(cloned);

    // Event listener for remove button
    const removeBtn = cloned.querySelector('.remove-education');
    if (removeBtn) {
        removeBtn.addEventListener('click', () => {
            removeEduField(cloned);
        });
    }

    console.log(`Added education fieldset ${eduCount}`);
}

// Remove Education Button
function removeEduField(fieldset) {
    const educationContainer = document.querySelector('#education-container');
    const fieldsets = educationContainer.querySelectorAll('.edu-fieldset');

    if (fieldsets.length > 1) {
        educationContainer.removeChild(fieldset);
        console.log(`Removed education fieldset ${eduCount}`);
        // Note: eduCount is not decremented to maintain unique IDs
    } else {
        alert('You must have at least one education fieldset');
    }
}

// Event listener for add education button
document.querySelector('#add-education').addEventListener('click', addEducationFieldSet);

// Event delegation for dynamically added "Remove" buttons
document.getElementById('education-container').addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('remove-education')) {
        const fieldset = event.target.closest('.edu-fieldset');
        if (fieldset) {
            removeEduField(fieldset);
        }
    }
});