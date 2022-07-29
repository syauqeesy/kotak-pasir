const Sequelize = require('sequelize')
const config = require('./database-config')

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  dialect: config.development.dialect,
  host: config.development.host,
  port: config.development.port
})

console.log('run')

module.exports = sequelize
