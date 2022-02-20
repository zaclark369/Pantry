function ingredientButtonHandler(event) {
//highlight button
event.currentTarget.classList.remove('btn-secondary');
event.currentTarget.classList.add('btn-success');

//reveal recipes
  const recipeShow = document.querySelectorAll(
    "." + event.currentTarget.textContent
  );
  recipeShow.forEach((recipe) => {
    recipe.classList.remove("hide");
    recipe.classList.add("show");
  });
}

//attach event listener to each button
document.querySelectorAll("#ingredients button").forEach((button) => {
  button.addEventListener("click", ingredientButtonHandler);
});
