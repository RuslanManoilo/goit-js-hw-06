// Напиши скрипт, який реагує на зміну значення 
// input#font-size-control (подія input) і змінює інлайн-стиль 
// span#text, оновлюючи властивість font-size. В результаті, 
// перетягуючи повзунок, буде змінюватися розмір тексту.


const inputRangeControl = document.querySelector('#font-size-control');
console.log(inputRangeControl);

const textElem = document.querySelector('#text');
// console.log(textElem);

inputRangeControl.addEventListener('input', fontSizeControl);

function fontSizeControl(event) {
    const range = event.currentTarget.value;
    console.log(range);
    textElem.style.fontSize = `${range}px`;
};