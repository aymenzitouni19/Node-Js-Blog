
// requiring needed modules
const express = require('express');
const app = express();
const expressEdge =require('express-edge').engine;
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');



// connecting to the DB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Node-Js-Blog');




//importing controllers
const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const getPostController  = require('./controllers/getPost')
const getAboutController = require('./controllers/getAbout')
const getContactController = require('./controllers/getContact')


const validateCreatePostMiddleware = (req , res , next)=>{
    if (!req.files.image || !req.body.username || !req.body.title || !req.body.subtitle ){
        return res.redirect('/post/new')
    }
    next()
}


// settingUp middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());
app.use(expressEdge);
app.set("views", __dirname + "/views");
app.use('/post/store',validateCreatePostMiddleware)

//routers

app.get('/' ,homePageController);
app.get('/about', getAboutController);
app.get('/post', (req,res)=>{
    res.render('post')
});
app.get('/post/new', createPostController);
app.post('/post/store', storePostController)
app.get('/post/:id', getPostController );
app.get('/contact', getContactController);











app.listen(3000 , ()=> console.log('Server listening on port 3000'))