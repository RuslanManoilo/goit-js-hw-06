const formElem = document.querySelector('.login-form');
console.log(formElem);

formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    console.dir(event.currentTarget.elements);
    event.preventDefault();

    const {email, password} = event.currentTarget.elements;

    if (email.value === "" || password.value === "") {
        const message = "Всі поля повинні бути заповнені !";
        return alert(message);
    }

    const formData = {
        Email: email.value,
        Password: password.value
    }

    console.log(formData);
    
    event.currentTarget.reset();
}