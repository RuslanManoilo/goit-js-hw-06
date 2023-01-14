// Напиши скрипт, який під час втрати фокусу на інпуті 
// (подія blur), перевіряє його вміст щодо правильної 
// кількості введених символів.

const inputElem = document.querySelector('#validation-input');
console.log(inputElem);
const inputLength = Number(inputElem.dataset.length);
console.log(inputLength);

inputElem.addEventListener('input', onInput)
inputElem.addEventListener('focus', onInputFocus);
inputElem.addEventListener('blur', onInputBlur);

function onInput(event) {
    const query = event.currentTarget.value;
    console.log(query);
}

function onInputFocus() {
    console.log('onInputFocus');
}

function onInputBlur(event) {
    const query = (event.currentTarget.value).trim().length;
    console.log(query);
    if (query === inputLength) {
        inputElem.classList.add('valid');     
        inputElem.classList.remove('invalid');    
    } else {
        inputElem.classList.add('invalid');
    }
}