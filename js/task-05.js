// Напиши скрипт, який під час набору тексту в інпуті 
// input#name-input (подія input), підставляє його поточне 
// значення в span#name-output. Якщо інпут порожній, у спані 
// повинен відображатися рядок "Anonymous".


const inputElem = document.querySelector('#name-input');
console.log(inputElem);

const outputElem = document.querySelector('#name-output');
console.log(outputElem);

inputElem.addEventListener('input', nameInput);

function nameInput(event) {
    const currTargetValue = event.currentTarget.value;
    outputElem.textContent = currTargetValue;
    if (!currTargetValue) {
        outputElem.textContent = "Anonymous";
    }
}