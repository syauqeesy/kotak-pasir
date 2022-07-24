const Sequelize = require('sequelize')

const sequelize = new Sequelize('sandbox', 'root', 'sauki123', {
  dialect: 'mysql',
  host: '127.0.0.1'
})

module.exports = sequelize
