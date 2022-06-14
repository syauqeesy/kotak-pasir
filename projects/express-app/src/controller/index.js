const express = require('express')
const { Router } = express

const app = express()

const routers = {
  user: Router()
}
const controllers = {
  user: require('./User')
}
const middlewares = require('../middleware')

routers.user
  .post('/register', middlewares.uploadProfileImage, controllers.user.register)

app.use('/user', routers.user)

module.exports = app
