const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')

mongoose.connect(process.env.DATA_BASE, { useNewUrlParser: true }, (param) => {
  console.log(param)
  console.log('db connected')
})

const app = express()

app.use(morgan())
app.use(helmet())
app.use(express.json())

const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('hello from lama dev social media app')
})

app.listen(PORT, () => console.log(`server listenning on port ${PORT}`))
