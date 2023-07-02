const categoryItems = document.querySelectorAll('.item');
const itemsCount = categoryItems.length;
console.log(`Number of categories: ${ itemsCount } `);

categoryItems.forEach((element) => {
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.children.length);
  console.log('');
});