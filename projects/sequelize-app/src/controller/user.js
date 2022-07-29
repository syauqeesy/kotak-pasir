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
        last_name: request.body.last_name
      })

      res.success = true
      res.code = 200
      res.message = 'User Created'

      response.status(res.code).json(res)
    } catch (err) {
      response.status(res.code).json(res)
    }
  })
  .get('/', async (request, response) => {
    const res = {
      success: false,
      code: 500,
      message: 'Internal Server Error',
      data: null
    }

    try {
      const users = await user.findAll()

      res.success = true
      res.code = 200
      res.message = 'User Fetched'
      res.data = users

      response.status(res.code).json(res)
    } catch (err) {
      response.status(res.code).json(res)
    }
  })
  .delete('/:userId', async (request, response) => {
    const res = {
      success: false,
      code: 500,
      message: 'Internal Server Error',
      data: null
    }

    try {
      await user.destroy({
        where: {
          id: request.params.userId
        }
      })

      res.success = true
      res.code = 200
      res.message = 'User Deleted'

      response.status(res.code).json(res)
    } catch (err) {
      response.status(res.code).json(res)
    }
  })
  .put('/:userId', async (request, response) => {
    const res = {
      success: false,
      code: 500,
      message: 'Internal Server Error',
      data: null
    }

    try {
      await user.update({
        first_name: request.body.first_name,
        last_name: request.body.last_name
      }, {
        where: {
          id: request.params.userId
        }
      })

      res.success = true
      res.code = 200
      res.message = 'User Updated'

      response.status(res.code).json(res)
    } catch (err) {
      response.status(res.code).json(res)
    }
  })

module.exports = router
