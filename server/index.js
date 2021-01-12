require('dotenv').config()
const express = require('express')
const app = express()
const convertCtrl = require('./Convert')

const SERVER_PORT = 5994

app.use(express.json())


app.get('/api/convert', convertCtrl.Convert)

app.listen(SERVER_PORT, () => {
  console.log(`Firing on ${SERVER_PORT}`)
})