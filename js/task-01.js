// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, 
// знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і 
// кількість елементів в категорії (усіх <li>, вкладених в нього).


const listItem = document.querySelectorAll('.item');
console.log('Number of categories:', listItem.length);

const categoriesElements = document.querySelector('ul');
const childrenCategories = categoriesElements.children;

// console.log(categoriesElements);
// console.log(childrenCategories);

for (const itemEl of childrenCategories) {
    console.log('Category:', itemEl.firstElementChild.textContent);
    console.log('Elements:', itemEl.lastElementChild.childElementCount);
};