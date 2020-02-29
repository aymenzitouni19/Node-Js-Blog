
// requiring needed modules
const express = require('express');
const app = express();
const path = require('path');
const expressEdge =require('express-edge').engine;


// connecting to the DB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Node-Js-Blog');


app.use(express.static('public'));


app.use(expressEdge);
app.set("views", __dirname + "/views");

app.get('/' , (req,res)=> {
    res.render('index')

});


app.get('/about', (req,res)=>{
    res.render('about')
});

app.get('/post', (req,res)=>{
    res.render('post')
});

app.get('/contact', (req,res)=>{
    res.render('contact')
});






app.listen(8080, ()=> console.log('Server listening on port 8080'))