
// requiring needed modules
const express = require('express');
const app = express();
const expressEdge =require('express-edge').engine;
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expresSession = require('express-session');
const connectFlash = require('connect-flash')
const edge = require('edge.js')



// connecting to the DB
require('./config/database');
// mongoose.connect('mongodb://localhost/Node-Js-Blog');




//importing controllers
const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const getPostController  = require('./controllers/getPost')
const getAboutController = require('./controllers/getAbout')
const getContactController = require('./controllers/getContact')
const createUserController = require('./controllers/createUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logOutController = require('./controllers/logOut.js')


const storePost = require('./middleware/storePost')
const isAuthenticated = require('./middleware/isAutheticated')


// settingUp middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());
app.use(expressEdge);
app.set("views", __dirname + "/views");
//app.use();
app.use('/post/store',storePost)
app.use(expresSession({
    secret : 'secret'
}))
app.use(connectFlash())
app.use('*',(req , res , next)=>{
    edge.global('auth' , req.session.id);
    next()
} )


//routers

app.get('/' ,homePageController);
app.get('/auth/register' , createUserController)
app.get('/auth/login' ,isAuthenticated, loginController)
app.post('/users/register' , storeUserController )
app.post('/users/login' , loginUserController )
app.get('/about', getAboutController);
app.get('/post', (req,res)=>{
    res.render('post')
});
app.get('/post/new', createPostController);
app.post('/post/store', storePostController)
app.get('/post/:id', getPostController );
app.get('/contact', getContactController);
app.get('/auth/logout' ,isAuthenticated, logOutController);











const port = process.env.port || 3000
app.listen(port , ()=> console.log('Server listening on port '+port))