

function getFormDetails(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.split();
    let email = document.getElementById('email').value.split();


    let nameResult = document.getElementById('name-result');
    nameResult.innerHTML = name;

    let emailResult = document.getElementById('email-result')
    emailResult.innerHTML = email;
}
let newsletterForm = document.getElementById("newsletter-signup")
newsletterForm.addEventListener('submit', getFormDetails)
