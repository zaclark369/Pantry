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
  