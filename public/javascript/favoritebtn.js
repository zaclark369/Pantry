saveFavorite = async (event) => {
  if (event.target.className == "favorite") {
    const name = event.target
      .closest(".card")
      .querySelector(".card-title").innerText;
    const image = event.target
      .closest(".card")
      .querySelector("div[data-image]")
      .getAttribute("data-image");
    const link = event.target
      .closest(".card")
      .querySelector(".card-body a").href;

    console.log(name, image, link);

    const response = await fetch("/api/recipes", {
      method: "POST",
      body: JSON.stringify({
        recipe_name: name,
        recipe_image: image,
        recipe_link: link,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert(`${name} added to favorites!`);
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#recipe-list").addEventListener("click", saveFavorite);
