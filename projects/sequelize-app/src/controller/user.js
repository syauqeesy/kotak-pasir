const { Router } = require('express')

const router = Router()
const user = require('../model/user')

router
  .post('/', async (request, response) => {
    const res = {
      success: false,
      code: 500,
      message: 'Internal Server Error',
      data: null
    }

    try {
      await user.create({
        first_name: request.body.first_name,
        last_name: request.body.first_name
      })

      res.success = true
      res.code = 200
      res.message = 'User Created'

      response.status(res.code).json(res)
    } catch (err) {
      console.log(err)
      response.status(res.code).json(res)
    }
  })

module.exports = router
