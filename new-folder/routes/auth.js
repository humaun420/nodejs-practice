const router = require('express').Router()

const User = require('../models/User')

router.get('/register', async (req, res) => {
  const user = await User({
    username: 'humaun1',
    email: 'humaun@2.com',
    password: '123456',
  })

  await user.save()

  res.send('from auth route')
  // res.json(user)
})

module.exports = router
