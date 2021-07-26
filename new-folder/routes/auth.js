const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedpass = await bcrypt.hash(password, salt)
    const newUser = new User({
      username,
      email,
      password: hashedpass,
    })

    const user = await newUser.save()

    console.log({ user })
    res.status(201).json({ user })
    // res.json(user)
  } catch (err) {
    console.log({ err })
    res.status(500).json({ err })
  }
})

module.exports = router
