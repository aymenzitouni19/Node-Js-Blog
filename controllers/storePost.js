const Post = require('../models/Post')
const path = require('path')

module.exports = (req,res)=>{
    const {image} = req.files;
    image.mv( path.resolve(__dirname , 'public/posts' , image.name ), (error)=>{
        Post.create( {
            ...req.body,
            image : '/posts/'+image.name,
        },
        
        (error,post)=>{
            res.redirect('/')
        })
    })
}