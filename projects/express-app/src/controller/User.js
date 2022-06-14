class User {

  register(request, response) {
    const responseBody = {
      status: true,
      code: 200,
      message: 'Register success',
      data: {
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        image: request.body.image,
        username: request.body.username,
        password: request.body.password
      }
    }

    response.status(responseBody.code).json(responseBody)
  }
}

module.exports = new User()
