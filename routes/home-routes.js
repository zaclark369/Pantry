const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Favorite } = require('../models');
const { recipeData } = require('../seeds/recipes-seeds');

router.get('/', (req, res) => {
    // console.log('============================================');
    res.render('homepage', { loggedIn: req.session.loggedIn });
})

router.get('/favorites', async (req, res) => {
    try {
        let favorites = await Favorite.findAll(
            {
                where: { 
                    user_id: req.session.user_id
                }
            }
        )
        favorites = favorites.map(favorite => favorite.get({ plain: true }))
        console.log(favorites)
        res.render('favorites', { favorites, loggedIn: req.session.loggedIn });
    } catch (err) {

    }
})

router.get('/search', (req, res) => {
    res.render('search', { recipeData, loggedIn: req.session.loggedIn });
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;