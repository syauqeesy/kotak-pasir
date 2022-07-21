const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.static('./public'))

app.get('/', (request, response) => {
  response.set('Content-Type', 'text/html')
  response.send(Buffer.from(fs.readFileSync('./public/index.html')))
})

app.get('/user', (request, response) => {
  const users = [
    {
      name: 'Lee Ji-eun',
    },
    {
      name: 'Son Ye Jin'
    }
  ]

  response.send(users)
})

app.listen(3000, () => console.log(`Server running on port 3000`))
