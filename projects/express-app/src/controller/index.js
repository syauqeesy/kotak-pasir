const express = require('express')
const { Router } = express

const app = express()

const routers = {
  user: Router()
}
const controllers = {
  user: require('./User')
}

routers.user
  .post('/register', controllers.user.register)

app.use('/user', routers.user)

module.exports = app
