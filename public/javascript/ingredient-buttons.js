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
  const keyword = event.currentTarget.textContent;
  var revealRecipes = document.querySelectorAll(`[class*=${keyword}]`);

  revealRecipes.forEach(function(recipe){
    if (recipe.classList.contains("d-none")) {
        recipe.classList.remove("d-none")
    } else {
        recipe.classList.add("d-none")
    }
  });
//   if (revealRecipes.classList.contains("d-none")) {
//     revealRecipes.classList.remove("d-none");
//   } else revealRecipes.classList.add("d-none");

  console.log(revealRecipes.classList);
}

//attach event listeners to buttons
//ingredients
document.querySelectorAll("#ingredients button").forEach((button) => {
  button.addEventListener("click", buttonHandler);
});
