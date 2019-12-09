const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute')
const app = express()
app.use( bodyParser.urlencoded({ extended: false })) 
const port = 3000
userRoute(app)
app.get('/', (res, send) => {
  res.send('Olá mundo')
})

app.listen(port, () => {
  console.log('App rodando em http://localhost:3000')
})
