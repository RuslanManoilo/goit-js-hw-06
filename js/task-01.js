const listItem = document.querySelectorAll('.item');
console.log('Number of categories:', listItem.length);

const categoriesElements = document.querySelector('ul');
const childrenCategories = categoriesElements.children;

for (const itemEl of childrenCategories) {
    console.log('Category:', itemEl.firstElementChild.textContent);
    console.log('Elements:', itemEl.lastElementChild.childElementCount);
};