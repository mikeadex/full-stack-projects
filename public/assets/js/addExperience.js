'use strict';

let expCount = document.querySelectorAll('.experience-fieldset').length;


/**
 * Adds a new experience fieldset to the experience container.
 * 
 * This function clones the last experience fieldset, updates its attributes and IDs,
 * clears its input values, and appends it to the experience container. It also sets up
 * an event listener for the remove button within the cloned fieldset.
 * 
 * @function addExperienceFieldset
 * @global
 * 
 * @example
 * // Call this function to add a new experience fieldset
 * addExperienceFieldset();
 * 
 * @description
 * - Increments the experience count (`expCount`).
 * - Clones the last experience fieldset and updates its `data-index` attribute.
 * - Updates the IDs and `aria-describedby` attributes of all input, select, and textarea elements within the cloned fieldset.
 * - Clears the values of the cloned input elements.
 * - Updates the IDs of error message elements within the cloned fieldset.
 * - Updates the `for` attributes of label elements within the cloned fieldset.
 * - Appends the cloned fieldset to the experience container.
 * - Adds an event listener to the remove button within the cloned fieldset to handle its removal.
 * 
 * @throws {Error} If the remove button is not found within the cloned fieldset.
 */
function addExperienceFieldset() {
    console.log('Experience field started');
    expCount++;

    const experienceContainer = document.getElementById('experience-container');
    const allFieldsets = experienceContainer.querySelectorAll('.experience-fieldset');
    const lastFieldSet = allFieldsets[allFieldsets.length - 1];
    const cloned = lastFieldSet.cloneNode(true);

    // Update data-index
    cloned.setAttribute('data-index', expCount);
    console.log(`Experience field data-index: ${expCount}`);

    // Update all HTML elements with the new data-index
    const inputs = cloned.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        if (input.id) {
            const idParts = input.id.split('-');
            // Remove the last part (index) and join the rest to form the base ID
            const baseId = idParts.slice(0, -1).join('-');
            const newId = `${baseId}-${expCount}`;
            input.id = newId;

            // Update aria-describedby ID
            if (input.getAttribute('aria-describedby')) {
                const errorIdParts = input.getAttribute('aria-describedby').split('-');
                const baseErrorId = errorIdParts.slice(0, -1).join('-');
                const newErrorId = `${baseErrorId}-${expCount}`;
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

        console.log(`Input ID: ${input.id}`);
    });

    // Update Error message IDs
    const errorMsgs = cloned.querySelectorAll('.error');
    errorMsgs.forEach(errorMsg => {
        if (errorMsg.id) {
            const errorParts = errorMsg.id.split('-');
            const baseErrorId = errorParts.slice(0, -1).join('-');
            const newErrorId = `${baseErrorId}-${expCount}`;
            errorMsg.id = newErrorId;
        }
        errorMsg.textContent = '';
    });

    // Update label for attributes
    const labels = cloned.querySelectorAll('label.label');
    labels.forEach(label => {
        if (label.getAttribute('for')) {
            const forParts = label.getAttribute('for').split('-');
            const baseForId = forParts.slice(0, -1).join('-');
            const newForId = `${baseForId}-${expCount}`;
            label.setAttribute('for', newForId);
        }
    });

    // Append the cloned fieldset to the container
    experienceContainer.appendChild(cloned);

    // Event Listener for remove button

    const removeBtn = cloned.querySelector('.remove-experience');
    if (removeBtn) {
        removeBtn.addEventListener('click', () => {
            removeExperienceFieldset(cloned);
        });
    } else {
        console.error('Remove button not found');
    }

    console.log('Experience field added');

}

function removeExperienceFieldset(fieldset) {
    const experienceContainer = document.querySelector('#experience-container');
    const fieldsets = experienceContainer.querySelectorAll('.experience-fieldset');

    if (fieldsets.length > 1) {
        experienceContainer.removeChild(fieldset);
        console.log('Experience field removed');
    } else {
        console.log('Cannot remove the only experience field');
    }
}

document.querySelector('#add-experience').addEventListener('click', addExperienceFieldset);

document.getElementById('experience-container').addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('remove-experience')) {
        const fieldset = e.target.closest('.experience-fieldset');
        if (fieldset) {
            removeExperienceFieldset(fieldset);
        }
    }
});