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
      if (recipe.classList.contains("hide")) {
        recipe.classList.remove("hide");
        recipe.classList.add("show");
      } else {
        recipe.classList.remove("show");
        recipe.classList.add("hide");
      }
    
  });
}

//attach event listener to each button
document.querySelectorAll("#ingredients button").forEach((button) => {
  button.addEventListener("click", ingredientButtonHandler);
});
