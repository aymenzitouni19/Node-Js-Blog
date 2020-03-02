
// requiring needed modules
const express = require('express');
const app = express();
const path = require('path');
const expressEdge =require('express-edge').engine;
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')



// connecting to the DB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Node-Js-Blog');

// importing models
const Post = require('./models/Post');



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());



app.use(expressEdge);
app.set("views", __dirname + "/views");

app.get('/' , async (req,res)=> {
    const posts =await Post.find({})
    // console.log(posts);
    res.render('index',{posts})

});


app.get('/about', (req,res)=>{
    res.render('about')
});

app.get('/post', (req,res)=>{
    res.render('post')
});

app.get('/post/new', (req,res)=>{
    res.render('newPost')
});

app.post('/post/store', (req,res)=>{
    const {image} = req.files;
    image.mv(path.resolve(__dirname , 'public/posts' , image.name ), (error)=>{
        Post.create(req.body ,(error,post)=>{
            res.redirect('/')
        })
    })
   
    console.log(req.files)
 });

 app.get('/post/:id', async (req,res)=>{
     const post = await Post.findById(req.params.id);
    res.render('post', {post})
});

app.get('/contact', (req,res)=>{
    res.render('contact')
});











app.listen(7000 , ()=> console.log('Server listening on port 4000'))