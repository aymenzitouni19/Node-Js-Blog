const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title : String,
    subtitle : String,
    username : String,
    
    content : String,
})

const Post = mongoose.model('Post' , PostSchema);
module.exports = Post;