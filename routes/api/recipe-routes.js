const router = require("express").Router();
const { Favorite, User } = require("../../models");

// get all favorite recipes
router.get("/", async (req, res) => {
  try {
    const favorites = await Favorite.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    res.json(favorites);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create new favorite recipe
router.post("/", async (req, res) => {
  try {
    const favorite = await Favorite.create({
      user_id: req.session.user_id,
      recipe_name: req.body.recipe_name,
      recipe_link: req.body.recipe_link,
      recipe_image: req.body.recipe_image,
    });
    res
      .status(200)
      .json({ favorite, message: "Favorite successfully created!" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const favorite = await Favorite.destroy({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json({ favorite, message: "Favorite successfully deleted!" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
