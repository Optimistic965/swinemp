const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('swinemp', 'aiquad', 'aiquad@965', { host: 'localhost', dialect: 'postgres' });

module.exports = sequelize;