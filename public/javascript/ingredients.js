function ingredientButtonHandler(event) {
filter.push(event.currentTarget.textContent)

const recipeHide = document.querySelectorAll('.' + event.currentTarget.textContent)
console.log(recipeHide)

recipeHide.forEach((recipe) => {
    recipe.classList.remove("hide")
    recipe.classList.add("show")
})
}

//attach event listener to each button
document.querySelectorAll("#ingredients button").forEach((button) => {
  button.addEventListener("click", (ingredientButtonHandler));
})