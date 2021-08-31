const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body

  try {
    const salt = await bcrypt.genSalt(10)
    const hashedpass = await bcrypt.hash(password, salt)
    const user = new User({
      username: username,
      email: email,
      password: hashedpass,
    })

    await user.save()

    res.status(201).json(user)
    // res.json(user)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
