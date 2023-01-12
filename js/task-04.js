// Створи змінну counterValue, в якій буде зберігатися поточне 
// значення лічильника та ініціалізуй її значенням 0.

// Додай слухачів кліків до кнопок, всередині яких збільшуй 
// або зменшуй значення лічильника.

// Оновлюй інтерфейс новим значенням змінної counterValue.


const counterValueElem = document.querySelector('#value');
console.log(counterValueElem);

let counterValue = 0;

const decrementValue = document.querySelector('[data-action="decrement"]');
const incrementValue = document.querySelector('[data-action="increment"]');
console.log(decrementValue);
console.log(incrementValue);


decrementValue.addEventListener('click', decrement);

function decrement() {
    counterValue -=1;
    counterValueElem.textContent = counterValue; 
}

incrementValue.addEventListener('click', increment);

function increment() {
    counterValue +=1;
    counterValueElem.textContent = counterValue;
}