const fruitsVeggies = ["apples", "asparagus", "bananas", "broccoli", "bananas", "blueberries", "carrots", "celery", "cauliflower", "cucumbers", "garlic", "ginger","lettuce", "jam", "kale", "lemon", "mango", "mushroom", "olives", "orange", "onion", "pepper", "pineapple", "peach", "potato", "raisins", "raspberries", "spinach", "squash","tomato", "watermelon", "zucchini"]

const dairy = ["cream", "cheese", "alfredo", "butter", "milk", "mayonnaise", "yogurt"];

const meat = ["beef", "chicken", "fish", "pork"];
const staples = ["sugar", "flour", "beans", "pasta", "eggs", "oil"];
const alcohol = ["rum", "gin", "mezcal", "wine"];

const ingredientContainer = document.getElementById("ingredients");

// Fruits & Veggies
// create container
var fruitsVeggiesContainer = document.createElement("div")
ingredientContainer.appendChild(fruitsVeggiesContainer);

// create buttons
fruitsVeggies.forEach(ingredient => {
var button = document.createElement("button");
button.type = "button";
button.innerHTML = ingredient;
button.classList.add('btn');
button.classList.add('btn-secondary');
fruitsVeggiesContainer.appendChild(button);
})

// dairy
// create container
var dairyContainer = document.createElement("div")
ingredientContainer.appendChild(dairyContainer);

// create buttons
dairy.forEach(ingredient => {
var button = document.createElement("button");
button.type = "button";
button.innerHTML = ingredient;
button.classList.add('btn');
button.classList.add('btn-secondary');
dairyContainer.appendChild(button);
})

// meat
// create container
var meatContainer = document.createElement("div")
ingredientContainer.appendChild(meatContainer);

// create buttons
meat.forEach(ingredient => {
var button = document.createElement("button");
button.type = "button";
button.innerHTML = ingredient;
button.classList.add('btn');
button.classList.add('btn-secondary');
meatContainer.appendChild(button);
})

// staples
// create container
var meatContainer = document.createElement("div")
ingredientContainer.appendChild(meatContainer);

// create buttons
meat.forEach(ingredient => {
var button = document.createElement("button");
button.type = "button";
button.innerHTML = ingredient;
button.classList.add('btn');
button.classList.add('btn-secondary');
meatContainer.appendChild(button);
})

// alcohol
// create container
var meatContainer = document.createElement("div")
ingredientContainer.appendChild(meatContainer);

// create buttons
meat.forEach(ingredient => {
var button = document.createElement("button");
button.type = "button";
button.innerHTML = ingredient;
button.classList.add('btn');
button.classList.add('btn-secondary');
meatContainer.appendChild(button);
})

function ingredientButtonHandler(event) {
  //highlight button
  if (event.currentTarget.classList.contains("btn-secondary")) {
    event.currentTarget.classList.remove("btn-secondary");
    event.currentTarget.classList.add("btn-success");
  } else {
    event.currentTarget.classList.remove("btn-success");
    event.currentTarget.classList.add("btn-secondary");
  }

  //reveal recipes
  const recipeShow = document.querySelectorAll(
    "." + event.currentTarget.textContent
  );
  recipeShow.forEach((recipe) => {
    if (recipe.classList.contains("d-none")) {
      recipe.classList.remove("d-none");
    } else {
      recipe.classList.add("d-none");
    }
  });
}

//attach event listener to each button
document.querySelectorAll("#ingredients button").forEach((button) => {
  button.addEventListener("click", ingredientButtonHandler);
});
