const app = require('../app')

class User {

  async register(data) {
    app.model.user.first_name = data.first_name
    app.model.user.last_name = data.last_name
    app.model.user.image = data.image
    app.model.user.username = data.username
    app.model.user.password = data.password

    const result = await app.model.user.insert()

    app.model.user.id = result

    const registeredUser = await app.model.user.selectById()

    return registeredUser
  }
}

module.exports = new User()
