const express = require('express')
const User = require('./models/User')
require('dotenv').config()
const morgan = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')

const PORT = process.env.PORT

mongoose.connect(
  process.env.DATA_BASE,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err, data) => {
    if (err) {
      // console.log(err)
      console.log('faild to connect with db')
    } else {
      console.log('db connected')
    }
  }
)

const app = express()

app.use(morgan('common'))
app.use(helmet())
app.use(express.json())

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)

app.get('/', async (req, res) => {
  const users = await User.find()
  res.status(200).json(users)
})

app.listen(PORT, () => {
  console.clear()
  console.log(`server listenning on port ${PORT}`)
})
