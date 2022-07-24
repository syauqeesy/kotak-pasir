const express = require('express')

const app = express()
const port = 5000
const controller = {
  user: require('./controller/user')
}

app.use([
  express.json(),
  express.urlencoded({ extended: false })
])

app.use('/user', controller.user)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
