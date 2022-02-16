// require sequelize module
const Sequelize = require('sequelize');

// use .env
require('dotenv').config();

// create a new sequelize connection to a database depending on the environment
let sequelize = (process.env.JAWSDB_URL) ? new Sequelize(process.env.JAWSDB_URL) : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;