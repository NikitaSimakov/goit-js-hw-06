const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const arr = [];

for (let i = 0; i < ingredients.length; i += 1) {

  const ingredient = document.createElement('li');
  ingredient.textContent = ingredients[i];
  ingredient.classList.add("item");
  console.log(ingredient)
  arr.push(ingredient);
}
list.append(...arr);