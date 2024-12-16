const input = document.querySelector('input');
input.addEventListener('submit', updateValue);

function updateValue(event) {

    const log = document.getElementById('values');
    const name = document.getElementById('name').value.split();
    let errorField = [];
    if (name === '') {
        log.textContent = 'Please enter a value';
    }
}

