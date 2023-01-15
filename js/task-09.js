const bodyElem = document.querySelector('body');
const buttonElem = document.querySelector('.change-color');
const spanElem = document.querySelector('.color');

buttonElem.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  bodyElem.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  spanElem.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
