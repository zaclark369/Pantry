var displayModal = function (event) {
    for (var i = 0; i < recipeArrayCategory.length; i++) {
      if (recipeArrayCategory[i].name === event.target.textContent) {
        // MODAL CONTENTS
        var name = recipeArrayCategory[i].name;
        var address = recipeArrayCategory[i].address;
        var imgSrc = recipeArrayCategory[i].imgSrc;
        var phone = recipeArrayCategory[i].phone;
        var website = recipeArrayCategory[i].website;
  
        var img = document.createElement("img");
        img.src = imgSrc;
        img.setAttribute("class", "recipe-img");
        img.setAttribute("id", "recipe-img");
  
        var modalEl = document.querySelector("#recipe-modal");
        modalEl.innerHTML =
          '<center><div class="modal-content"><h4>' + name + "</h4></center>";
        modalEl.appendChild(img);
        modalEl.insertAdjacentHTML(
          "beforeend",
          "<center><p>" +
            address +
            "</p><p>" +
            phone +
            "</p><p>" +
            '<a href="' +
            website +
            '">' +
            website +
            "</a></p></center>"
        );
      }
    }
  };