const router = require('express').Router()
const Post = require('../models/Post')
const User = require('../models/User')

// create a post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const post = await newPost.save()
    res.status(201).json(post)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// update a post
router.put('/:id', async (req, res) => {
  const id = req.params.id
  const { userid } = req.body
  try {
    const post = await Post.findById(id)
    if (post.userid === userid) {
      await post.updateOne({ $set: req.body })
      res.status(200).json({ post })
    } else {
      res.status(401).json({ message: 'you can update only your post' })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
})

// delete a post
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  const { userid } = req.body
  try {
    const post = await Post.findById(id)
    if (post.userid === userid) {
      await post.deleteOne()
      res.status(200).json({ post })
    } else {
      res.status(401).json({ message: 'you can delete only your post' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
})

// like a post
router.put('/:id/like', async (req, res) => {
  const id = req.params.id
  const { userid } = req.body
  try {
    const post = await Post.findById(id)

    if (!post.likes.includes(userid)) {
      await post.updateOne({ $push: { likes: userid } })
      res.status(200).json({ post })
    } else {
      console.log(post.likes.includes(userid))

      await post.updateOne({ $pull: { likes: userid } })
      res.status(200).json({ post })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
})

// get a pos
router.get('/:id/one', async (req, res) => {
  try {
    const id = req.params.id
    const post = await Post.findById(id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(err)
  }
})

// get all post
router.get('/all', async (req, res) => {
  const posts = await Post.find()
  res.status(200).json(posts)
})
// get tomeline post
router.post('/timelines/all', async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userid)
    const userPost = await Post.find({ userid: currentUser._id })
    console.log('hi')

    const friendPost = await Promise.all(
      currentUser.following.map((friendid) => {
        return Post.find({ userid: friendid })
      })
    )
    res.status(200).json(userPost.concat(...friendPost))
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
})

module.exports = router
