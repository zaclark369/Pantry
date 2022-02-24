const fruitsVeggies = ["apple","banana","broccoli","blueberries","carrots","celery","cauliflower","cucumber","garlic","ginger","lettuce","kale","lemon","mango","mushroom","orange","onion","pepper","pineapple","peach","potato","raisin","raspberries","spinach","squash","tomato","watermelon","zucchini"];
const dairy = ["cream","cheese","alfredo","butter","milk","mayonnaise","yogurt"];
const meat = ["beef", "chicken", "fish", "pork"];
const staples = ["sugar", "flour", "beans", "pasta", "eggs", "oil"];

const ingredientContainer = document.getElementById("ingredients");
const fruitsVeggiesContainer = document.getElementById("fruitsVeggies");
const dairyContainer = document.getElementById("dairy");
const meatContainer = document.getElementById("meat");
const staplesContainer = document.getElementById("staples");

// Fruits & Veggies
fruitsVeggies.forEach((ingredient) => {
  var button = document.createElement("button");
  button.type = "button";
  button.innerHTML = ingredient;
  button.classList.add("btn");
  button.classList.add("btn-secondary");
  button.classList.add("ingredBtn");
  fruitsVeggiesContainer.appendChild(button);
});

// Dairy
dairy.forEach((ingredient) => {
  var button = document.createElement("button");
  button.type = "button";
  button.innerHTML = ingredient;
  button.classList.add("btn");
  button.classList.add("btn-secondary");
  button.classList.add("ingredBtn");
  dairyContainer.appendChild(button);
});

// Meat
meat.forEach((ingredient) => {
  var button = document.createElement("button");
  button.type = "button";
  button.innerHTML = ingredient;
  button.classList.add("btn");
  button.classList.add("btn-secondary");
  button.classList.add("ingredBtn");
  meatContainer.appendChild(button);
});

// Staples
staples.forEach((ingredient) => {
  var button = document.createElement("button");
  button.type = "button";
  button.innerHTML = ingredient;
  button.classList.add("btn");
  button.classList.add("btn-secondary");
  button.classList.add("ingredBtn");
  staplesContainer.appendChild(button);
});