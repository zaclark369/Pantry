function categoryButtonHandler(event) {
  //highlight button
  if (event.currentTarget.classList.contains("btn-secondary")) {
    event.currentTarget.classList.remove("btn-secondary");
    event.currentTarget.classList.add("btn-success");
  } else {
    event.currentTarget.classList.remove("btn-success");
    event.currentTarget.classList.add("btn-secondary");
  }
}

//attach event listener to each button
document.querySelectorAll(".recipe-categories button").forEach((button) => {
  button.addEventListener("click", categoryButtonHandler);
});
