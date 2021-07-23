const express = require('express')
require('dotenv').config()
const app = express()

const POTR = process.env.PORT

app.listen(PORT, () => console.log(`server listenning on port ${PORT}`))
