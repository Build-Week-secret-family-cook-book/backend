const router = require('express').Router();
const Recipe = require('./recipes-model')

router.get('/', (req, res, next) => {
    Recipe.getAllRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Recipe.addRecipe(req.body)
    .then(newRecipe => {
        res.status(201).json(newRecipe)
    })
    .catch(next)
})

router.delete('/:recipe_id', (req , res, next) => {
    Recipe.removeRecipe(req.params.recipe_id)
    .then(() => {
        res.json({message: "Recipe removed!"})
    })
    .catch(next)
})

router.get('/:recipe_id', (req, res ,next) => {
    Recipe.getRecipeById(req.params.recipe_id)
    .then((r) => {
    res.json(r)
    })
    .catch(next)
})

router.put('/update', (req, res, next) => {
    Recipe.updateRecipe(req.body)
    .then(update => {
        res.json(update)
    })
    .catch(next)
})

module.exports = router