const express = require('express')
const { Router } = express

const app = express()

const routers = {
  user: Router()
}

routers.user
  .post('/register', (request, response) => {
    const responseBody = {
      status: true,
      code: 200,
      message: 'Register success',
      data: {
        username: request.body.username
      }
    }

    response.status(responseBody.code).json(responseBody)
  })

app.use('/user', routers.user)

module.exports = app
