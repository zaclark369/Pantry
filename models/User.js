const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// use for password hashing
const bcrypt = require('bcrypt');

// user model constructor
class User extends Model {
    // check the user password
    checkPassword(login_password) { return bcrypt.compareSync(login_password, this.password) };
};

// create columns for the user table
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(data) {
                data.password = await bcrypt.hash(data.password, 10);
                return data;
            }
        },
        // user table columns
        sequelize,
        timestamps: false,
        underscores: true,
        freezeTableName: true,
        modelName: 'user'
    }
);

module.exports = User;