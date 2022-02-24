const fruitsVeggies = ["apple","asparagus","banana","broccoli","blueberries","carrots","celery","cauliflower","cucumber","garlic","ginger","lettuce","jam","kale","lemon","mango","mushroom","olive","orange","onion","pepper","pineapple","peach","potato","raisin","raspberries","spinach","squash","tomato","watermelon","zucchini"];
const dairy = ["cream","cheese","alfredo","butter","milk","mayonnaise","yogurt"];
const meat = ["beef", "chicken", "fish", "pork"];
const staples = ["sugar", "flour", "beans", "pasta", "eggs", "oil"];
const alcohol = ["rum", "gin", "mezcal", "wine"];

const ingredientContainer = document.getElementById("ingredients");
const fruitsVeggiesContainer = document.getElementById("fruitsVeggies");
const dairyContainer = document.getElementById("dairy");
const meatContainer = document.getElementById("meat");
const staplesContainer = document.getElementById("staples");
const alcoholContainer = document.getElementById("alcohol");

// Fruits & Veggies
// create buttons
fruitsVeggies.forEach((ingredient) => {
  var button = document.createElement("button");
  button.type = "button";
  button.innerHTML = ingredient;
  button.classList.add("btn");
  button.classList.add("btn-secondary");
  button.classList.add("ingredBtn");
  fruitsVeggiesContainer.appendChild(button);
});
// dairy

// create buttons
dairy.forEach((ingredient) => {
  var button = document.createElement("button");
  button.type = "button";
  button.innerHTML = ingredient;
  button.classList.add("btn");
  button.classList.add("btn-secondary");
  button.classList.add("ingredBtn");
  dairyContainer.appendChild(button);
});
// meat
// create buttons
meat.forEach((ingredient) => {
  var button = document.createElement("button");
  button.type = "button";
  button.innerHTML = ingredient;
  button.classList.add("btn");
  button.classList.add("btn-secondary");
  button.classList.add("ingredBtn");
  meatContainer.appendChild(button);
});
// staples
staples.forEach((ingredient) => {
  var button = document.createElement("button");
  button.type = "button";
  button.innerHTML = ingredient;
  button.classList.add("btn");
  button.classList.add("btn-secondary");
  button.classList.add("ingredBtn");
  staplesContainer.appendChild(button);
});
// alcohol
// create buttons
alcohol.forEach((ingredient) => {
  var button = document.createElement("button");
  button.type = "button";
  button.innerHTML = ingredient;
  button.classList.add("btn");
  button.classList.add("btn-secondary");
  button.classList.add("ingredBtn");
  alcoholContainer.appendChild(button);
});