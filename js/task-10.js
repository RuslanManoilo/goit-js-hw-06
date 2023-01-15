const inputElem = document.querySelector('input');
const createElem = document.querySelector('[data-create]');
const destroyElem = document.querySelector('[data-destroy]');
const boxesElem = document.querySelector('#boxes');

createElem.addEventListener('click', createBoxes);

function createBoxes() {
  let numberTest = inputElem.value;
  let amount = [];

  for (let i = 1; i <= numberTest; i++) {
    const pushElem = amount.push(i); 
  }

  const markup = amount
    .map(elem => 
      `<div 
        style=
          "width: ${30 + (elem-1) * 10}px; 
          height: ${30 + (elem-1) * 10}px;
          border: ${elem}px solid;
          background-color: ${getRandomHexColor()};">
      </div>`)
    .join("");

  boxesElem.insertAdjacentHTML("beforeend", markup);
}

destroyElem.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesElem.innerHTML = "";
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}