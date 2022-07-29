const Sequelize = require('sequelize')
const sequelize = require('../app/database')

const user = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  first_name: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING(45),
    allowNull: false
  }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at'
})

module.exports = user
