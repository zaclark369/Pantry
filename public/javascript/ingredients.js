const fruitsVeggies = ["apples", "bananas", "broccoli", "bananas", "blueberries", "carrots", "celery", "cauliflower", "garlic", "ginger","lettuce", "jam", "kale", "lemon", "mango", "orange", "onion", "pepper", "pineapple", "peach", "potato", "raisins", "raspberries", "spinach", "squash","tomato", "watermelon", "zucchini"]

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
