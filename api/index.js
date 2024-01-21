const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const crypto = require('crypto')
const connectDb = require('./config/dbConnection')
const app = express()

const port = 3000

const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connectDb()

app.listen(port, () => {
  console.log(`Server listening on Port ${port}`)
})
