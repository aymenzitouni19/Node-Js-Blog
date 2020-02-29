const Post = require('./models/Post');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true , useUnifiedTopology: true});

Post.create({
    title : 'firstPost',
    description : 'desjfjfjfj ',
    content : 'ijfuuhuguhgrurg',
}, (error , Post)=>{console.log(error,Post)})



