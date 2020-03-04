
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
const createUserController = require('./controllers/createUser')
const storeUserController = require('./controllers/storeUser')


const storePost = require('./middleware/storePost')


// settingUp middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());
app.use(expressEdge);
app.set("views", __dirname + "/views");
app.use('/post/store',storePost)

//routers

app.get('/' ,homePageController);
app.get('/auth/register' , createUserController)
app.post('/users/register' , )
app.get('/about', getAboutController);
app.get('/post', (req,res)=>{
    res.render('post')
});
app.get('/post/new', createPostController);
app.post('/post/store', storePostController)
app.get('/post/:id', getPostController );
app.get('/contact', getContactController);












app.listen(3000 , ()=> console.log('Server listening on port 3000'))