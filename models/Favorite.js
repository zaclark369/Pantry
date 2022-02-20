const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model {};

Favorite.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        recipe_index: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'favorite'
    }
)

module.exports = Favorite;