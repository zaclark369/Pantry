const User = require("./User");
const Favorite = require("./Favorite");

User.hasMany(Favorite, {
  foreignKey: "user_id",
});

Favorite.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Favorite };
