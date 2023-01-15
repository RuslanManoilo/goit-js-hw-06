const inputRangeControl = document.querySelector('#font-size-control');
console.log(inputRangeControl);

const textElem = document.querySelector('#text');

inputRangeControl.addEventListener('input', fontSizeControl);

function fontSizeControl(event) {
    const range = event.currentTarget.value;
    console.log(range);
    textElem.style.fontSize = `${range}px`;
};