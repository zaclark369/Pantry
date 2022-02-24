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

// CLICK EVENTS
function buttonHandler(event) {
  //highlight button
  if (event.currentTarget.classList.contains("btn-secondary")) {
    event.currentTarget.classList.remove("btn-secondary");
    event.currentTarget.classList.add("btn-success");
  } else {
    event.currentTarget.classList.remove("btn-success");
    event.currentTarget.classList.add("btn-secondary");
  }

  //reveal recipes
  const recipes = document.querySelectorAll("#recipe-card");
  const keyword = event.currentTarget.textContent;

  //go through all recipe cards
  for (i = 0; i < recipes.length; i++) {
    if (
      //check for keyword, plural keyword and if title contains keyword
      recipes[i].classList.contains(keyword) ||
      recipes[i].classList.contains(keyword + "s") ||
      recipes[i].classList.contains(keyword + "es") ||
      recipes[i].classList.contains(keyword.toLowerCase()) ||
      recipes[i].children[1].innerText.indexOf(keyword) !== -1
    ) {
      recipes[i].classList.toggle("d-none");
    }
  }
}

//attach event listeners to buttons
//ingredients
document.querySelectorAll("#ingredients button").forEach((button) => {
  button.addEventListener("click", buttonHandler);
});

//categories
document.querySelectorAll(".recipe-categories button").forEach((button) => {
  button.addEventListener("click", buttonHandler);
});
