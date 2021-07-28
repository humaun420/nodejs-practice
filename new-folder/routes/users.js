const bcrypt = require('bcrypt')
const User = require('../models/User')
const router = require('express').Router()

// update user
router.put('/:id', async (req, res) => {
  const id = req.params.id
  const { userId, isAdmin, password } = req.body
  if (userId === id || isAdmin) {
    if (password) {
      try {
        const salt = await bcrypt.genSalt(10)
        return (req.body.password = await bcrypt.hash(password, salt))
      } catch (err) {
        console.log(err)
        return res.status(500).json(err)
      }
    }
    try {
      const user = await User.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      )
      console.log({ userId, isAdmin, password })
      return res.status(200).json(user)
    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  } else {
    res.status(403).json({ message: 'you can update only your account' })
  }
})

// delete user
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  const { userId, isAdmin, password } = req.body
  if (userId === id || isAdmin) {
    try {
      const user = await User.deleteOne({ _id: id })
      console.log({ userId, isAdmin, password })
      return res.status(200).json(user)
    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  } else {
    res.status(403).json({ message: 'you can delete only your account' })
  }
})

// get single user
router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const user = await User.findById(id)
    const { updatedAt, password, ...others } = user._doc
    return res.status(200).json(others)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

// follow user
router.put('/:id/follow', async (req, res) => {
  const id = req.params.id
  const userId = req.body.userId
  if (id !== userId) {
    try {
      console.log({ id, userId })
      const user = await User.findById(id)
      const currentUser = await User.findById(userId)
      if (!user.follower.includes(userId)) {
        await user.updateOne({ $push: { follower: userId } })
        await currentUser.updateOne({ $push: { following: id } })
        console.log('hi')
        return res.status(200).json({ message: 'user followed successfully' })
      } else {
        return res.status(403).json({ message: 'you alrady follow this user' })
      }
    } catch (error) {
      console.log({ error })
      return res.status(500).json({ error })
    }
  } else {
    return res.status(403).json({ message: "you can't follow yourself" })
  }
})

// unfollow user
router.put('/:id/unfollow', async (req, res) => {
  const id = req.params.id
  const userId = req.body.userId
  if (id !== userId) {
    try {
      const user = await User.findById(id)
      const currentUser = await User.findById(userId)
      if (user.follower.includes(userId)) {
        await user.updateOne({ $pull: { follower: userId } })
        await currentUser.updateOne({ $pull: { following: id } })
        return res.status(200).json({ message: 'user unfollowed successfully' })
      } else {
        return res
          .status(403)
          .json({ message: 'you are not a follower of this user' })
      }
    } catch (error) {
      console.log({ error })
      return res.status(500).json({ error })
    }
  } else {
    return res.status(403).json({ message: "you can't unfollow yourself" })
  }
})

module.exports = router
