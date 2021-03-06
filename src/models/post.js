const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: String,
    text: String,
    author: String,
    bgcpost: String,
    imagepost: String
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model('Post', PostSchema);

export default Post;
