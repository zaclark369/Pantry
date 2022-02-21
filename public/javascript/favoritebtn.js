saveFavorite = async event => {
    event.preventDefault();

    const item = event.target;

    if (item.className == "starbtn") {
        const name = item.closest("div").querySelector("h5").innerText;
        const image = item.closest("#recipe-card").querySelector("img").src;
        const link = item.closest("div").querySelector("a").href;
        
        console.log(name, image, link);

        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify(
                {
                    recipe_name: name,
                    recipe_image: image,
                    recipe_link: link
                }
            ),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.reload();
            comment.value = '';
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#recipe-list').addEventListener('click', saveFavorite)