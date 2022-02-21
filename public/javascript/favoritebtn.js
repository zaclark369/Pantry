saveFavorite = async event => {
    event.preventDefault();


const favorite = document.querySelector('.starbtn');
console.log(favorite);
const id = favorite.closest('div').getAttribute('data-id')
// .getAttribute("data-id").value;
console.log(id);



if (favorite) {
    const response = await fetch('/api/recipes',
    {
        method: 'POST',
        body: JSON.stringify(
            {
            recipe_index: id
            }),
        headers: { 'Content-Type': 'application/json' }
    })

    if( response.ok) {
        document.location.reload();
        comment.value = '';
    } else {
        alert(response.statusText);
    }
    }
};

document.querySelector('.starbtn').addEventListener('click', saveFavorite)