const mongoose = require('mongoose')

const PostSchema = mongoose.Schema(
  {
    userid: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
)

module.exports = new mongoose.model('post', PostSchema)
