removeFavorite = async (event) => {
  if (event.target.textContent == "❌") {
    const recipe_id = event.target
      .closest("div[data-id]")
      .getAttribute("data-id");

    const response = await fetch(`/api/recipes/${recipe_id}`, {
      method: "DELETE",
    });
    console.log(response);

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".favorites-container")
  .addEventListener("click", removeFavorite);
