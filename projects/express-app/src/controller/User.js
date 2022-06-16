const app = require('../app')
const helper = require('../helper')

class User {

  register(request, response) {
    const responseBody = {
      status: false,
      code: 500,
      message: 'Register failed',
      data: null
    }

    if (!request.file) {
      responseBody.code = 400
      responseBody.message = 'Image is required'

      response.status(responseBody.code).json(responseBody)

      return
    }

    const schema = app.joi.object({
      first_name: app.joi.string().required(),
      last_name: app.joi.string().required(),
      image: app.joi.string().required(),
      username: app.joi.string().required(),
      password: app.joi.string().required()
    })
    const payload = {
      first_name: request.body.first_name,
      last_name: request.body.last_name,
      image: request.body.image,
      username: request.body.username,
      password: request.body.password
    }

    schema.validateAsync(payload, { abortEarly: false })
      .then(payload => {
        responseBody.status = true
        responseBody.code = 200
        responseBody.message = 'Register success'
        responseBody.data = payload

        response.status(responseBody.code).json(responseBody)
      })
      .catch(err => {
        responseBody.code = 400
        responseBody.data = helper.parseValidationError(err)

        response.status(responseBody.code).json(responseBody)
      })
  }
}

module.exports = new User()
