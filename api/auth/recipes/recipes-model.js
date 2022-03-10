const db = require('../../data/db-config')

const getAllRecipes = () => {
    return db('recipe')
}

const getRecipeById = recipe_id => {
    return db('recipe').where('recipe_id', recipe_id).first();
}

const addRecipe = async newRecipe => {
    const [addedRecipe] = await db('recipe')
    .insert(newRecipe, [
        'recipe_id',
        'title',
        'source',
        'ingredients',
        'instructions',
        'category',
    ])
    return addedRecipe
} 

const removeRecipe = recipe_id => {
    return db('recipe').where('recipe_id', recipe_id).del();
}

const updateRecipe = updated => {
    const { recipe_id } = updated
    return db('recipe').where('recipe_id', recipe_id).update(updated);
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    removeRecipe,
    updateRecipe,
    addRecipe
}