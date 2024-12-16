export function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}


export function displayFieldError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
    };

    const inputField = document.querySelector(`[aria-describedby="${errorId}"]`);
    if (inputField) {
        inputField.classList.add('input-error');
    }
}

export function clearErrorField(errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = '';
    }

    const inputField = document.querySelector(`[aria-describedby="${errorId}"]`);
    if (inputField) {
        inputField.classList.remove('input-error');
    }
}