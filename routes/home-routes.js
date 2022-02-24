const router = require("express").Router();
const { User, Favorite } = require("../models");
const { recipeData, recipeCategories } = require("../seeds/recipes-seeds");

router.get("/search", async (req, res) => {
  res.render("search", {
    loggedIn: req.session.loggedIn,
    recipeData,
    recipeCategories,
  });
});

router.get("/", (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

router.get("/favorites", async (req, res) => {
  try {
    let favorites = await Favorite.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    favorites = favorites.map((favorite) => favorite.get({ plain: true }));

    res.render("favorites", { favorites, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/search", (req, res) => {
  res.render("search", { recipeData, loggedIn: req.session.loggedIn });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
