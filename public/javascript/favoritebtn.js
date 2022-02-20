saveFavorite = async event => {
    event.preventDefault();
}

const favorite = document.querySelector('#starbtn').value.trim();

// get id of recipe
const recipe_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

if (favorite) {
    const response = await fetch('/api/users/recipe-routes',
    {
        method: 'POST',
        body: JSON.stringify(
            {
              
        ),
        headers: { 'Content-Type': 'application/json' }
    })

    if( response.ok) {
        document.location.reload();
        comment.value = '';
    } else {
        alert(response.statusText);
    }
    }
}

document.querySelector('.starbtn').addEventListener('submit', saveFavorite)