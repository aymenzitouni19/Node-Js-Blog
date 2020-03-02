
// requiring needed modules
const express = require('express');
const app = express();
const path = require('path');
const expressEdge =require('express-edge').engine;
const bodyParser = require('body-parser')


// connecting to the DB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Node-Js-Blog');

// importing models
const Post = require('./models/Post');



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))


app.use(expressEdge);
app.set("views", __dirname + "/views");

app.get('/' , async (req,res)=> {
    const posts =await Post.find({})
    console.log(posts);
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
    Post.create(req.body ,(error,post)=>{
        res.redirect('/')
    })
 });

app.get('/contact', (req,res)=>{
    res.render('contact')
});











app.listen(4000 , ()=> console.log('Server listening on port 4000'))