const express = require('express')
const feedid = require('feedid')

const port = 3000
const app = express()

app.get('/', (request, response) => {
  feedid.cnbc.investment()
    .then(result => {
      response.status(200).json({
        success: true,
        code: 200,
        message: 'Success get data',
        data: result.data
      })
    })
    .catch(err => {
      response.status(500).json({
        success: false,
        code: 500,
        message: 'Internal server error',
        data: null
      })
    })
})

app.listen(port, () => console.log(`Server running on port ${port}`))
