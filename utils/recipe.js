const recipes = require('seeds/recipes-seeds.js');

module.exports = {
recipeCard: () => {
    return (
        <>
        {recipes.map(({ name, url, image, description }) => (
        <div><h1>{name}</h1><p>{description}</p></div>
        ))}
        </>
    );
} 
}
