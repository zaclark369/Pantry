const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');
const { recipeData } = require('../seeds/recipes-seeds');

router.get('/', (req, res) => {
    // console.log('============================================');
    res.render('homepage', { loggedIn: req.session.loggedIn });
})

router.get('/favorites', (req, res) => {
    res.render('favorites', { loggedIn: req.session.loggedIn });
})

router.get('/search', (req, res) => {
    res.render('search', { recipeData, loggedIn: req.session.loggedIn });
})

router.get('/recipe/:id', (req, res) => {
    Post.findOne({
        where : { id: req.params.id},
        // come back and add attributes when recipes are ready
        attributes: ['id', 'title'],
        include: [
            {
                model: Recipe,
                attributes: ['id', 'user_id', 'created_at', 'recipe_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then( dbRecipeData=> {
        if (!dbRecipeData) {
            res.status(404).json({message:'No recipe found with this id.'});
            return;
        }

        const recipe = dbRecipeData.get({ plain: true });

        res.render('recipe', {
            post,
            loggedIn: req.session.loggedIn
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;