let ingredients = document.querySelector("#ingredients");
let recipes = document.querySelector("#recipe-list");

let recipeButton = document.querySelector("#recipes-button");
let ingredientsButton = document.querySelector("#ingredients-button");

// render the ingredients tab
viewIngredients = event => {
    event.preventDefault();
    
    recipeButton.classList.remove("btn-success");
    recipeButton.classList.add("btn-secondary");

    ingredientsButton.classList.add("btn-success");
    ingredientsButton.classList.remove("btn-secondary");

    ingredients.classList.remove("d-none", "d-md-flex", "d-sm-none");
    recipes.classList.add("d-none", "d-md-flex", "d-sm-none");
}

// render the recipe tab
viewRecipes = event => {
    event.preventDefault();

    recipeButton.classList.remove("btn-secondary");
    recipeButton.classList.add("btn-success");

    ingredientsButton.classList.add("btn-secondary");
    ingredientsButton.classList.remove("btn-success");

    recipes.classList.remove("d-none","d-md-flex", "d-sm-none");
    ingredients.classList.add("d-none", "d-md-flex", "d-sm-none");
}

ingredientsButton.addEventListener("click", viewIngredients);
recipeButton.addEventListener("click", viewRecipes)

window.addEventListener("resize", () => {
    // reset the display for both columns
    ingredients.classList.remove("d-none", "d-md-flex", "d-sm-none");
    recipes.classList.add("d-none", "d-md-flex", "d-sm-none");
})