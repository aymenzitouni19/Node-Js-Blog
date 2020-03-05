const User =require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = (req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    

    let newUser = {
        username,
        email,
        password
    }

    bcrypt.hash(newUser.password , 10 , (err , hashed)=>{
        newUser.password = hashed;
        User.create(newUser,(error , user)=>{
            if (error){
                return res.redirect('/auth/register')
            }
            console.log('user created');
            res.redirect('/')
        })
    })
    
}