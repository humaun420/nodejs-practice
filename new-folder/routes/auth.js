const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')

// register route
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
      return res.json({ message: 'you have to fill this properly' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedpass = await bcrypt.hash(password, salt)
    const newUser = new User({
      username,
      email,
      password: hashedpass,
    })

    //validation with my won experience
    const isEmail = await User.findOne({ email })
    const isName = await User.findOne({ username })
    if (isName || isEmail) {
      return res.status(200).json({ isEmail, isName })
    }
    // console.log('now we can gio to save')
    const user = await newUser.save()

    console.log({ user })
    res.status(201).json({ user })
    // res.json(user)
  } catch (err) {
    console.log({ err })
    res.status(500).json({ err })
  }
})

//login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.json({ message: 'you have to fill this properly' })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: 'user not found' })
    }
    const validpass = await bcrypt.compare(password, user.password)
    if (!validpass) {
      return res.status(400).json({ message: 'invalid credintial' })
    }
    // console.log('now we can gio to save')

    res.status(200).json(user)
  } catch (err) {
    console.log({ err })
    res.status(500).json({ err })
  }
})

module.exports = router
