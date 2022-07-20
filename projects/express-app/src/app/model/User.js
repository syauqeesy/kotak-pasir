const uuid = require('uuid')
const database = require('../Database')

class User {

  id
  first_name
  last_name
  image
  username
  password

  async insert() {
    const id = uuid.v1()

    database.sql = `
      INSERT INTO users
        (id, first_name, last_name, image, username, password)
      VALUES
        (?, ?, ?, ?, ?, ?)
    `
    database.bindData = [id, this.first_name, this.last_name, this.image, this.username, this.password]

    await database.executeQuery()

    return id
  }

  async selectById() {
    database.sql = 'SELECT * FROM users WHERE id = ?'
    database.bindData = [this.id]

    const result = await database.executeQuery()

    if (!result[0]) {
      throw new Error('User not found')
    }

    return result[0]
  }
}

module.exports = new User()
