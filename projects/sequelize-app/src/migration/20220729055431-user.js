const user = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
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
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    deleted_at: {
      type: Sequelize.DATE,
      allowNull: true
    }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
}

module.exports = user
