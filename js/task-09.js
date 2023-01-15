// Напиши скрипт, який змінює кольори фону елемента <body> через
// інлайн-стиль по кліку на button.change-color і виводить 
// значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію 
// getRandomHexColor.



const bodyElem = document.querySelector('body');
// console.log(bodyElem);
const buttonElem = document.querySelector('.change-color');
// console.log(buttonElem);
const spanElem = document.querySelector('.color');
// console.log(spanElem);

buttonElem.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  bodyElem.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  spanElem.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
