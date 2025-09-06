const express = require('express')
const { default: registrationController } = require('./controllers/registrationController')

const app = express()

app.post('/registration', registrationController)

app.listen('8000', () => {
  console.log('server is running on port 8000')
})

