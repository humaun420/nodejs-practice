const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('from user route')
})

module.exports = router
