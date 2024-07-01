const config = require('../config/config');
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(config.db.databse, config.db.username, config.db.password,{
    host: config.db.host,
    dialect: config.db.dialect
})

const db = {};
db.Sequelize = sequelize;
db.sequelize = sequelize;

db.user = require('./userModel')(sequelize, Sequelize);

module.exports = db;