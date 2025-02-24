const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize('swinemp', 'aiquad', 'aiquad@965', { host: 'localhost', dialect: 'postgres' });
const sequelize = new Sequelize('postgresql://swinemp_user:4BLg4sW0Qd1q1Ef0mCcC9ZQnEhXV1dAu@dpg-cuu7jfqj1k6c738jtobg-a.singapore-postgres.render.com/swinemp?ssl=true');

module.exports = sequelize;