//ingredient button click event
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

  revealRecipes.forEach(function (recipe) {
    if (recipe.classList.contains("d-none")) {
      recipe.classList.remove("d-none");
    } else {
      recipe.classList.add("d-none");
    }
  });

  //remove pan
  const pan = document.getElementById("pan");
  pan.classList.add("d-none")

  //add pan if all buttons are deselected
  if (document.querySelector("#ingredients").querySelectorAll(".btn-success").length == 0) {
    pan.classList.remove("d-none")
  };
}

//attach event listeners to buttons
document.querySelectorAll("#ingredients button").forEach((button) => {
  button.addEventListener("click", buttonHandler);
});
