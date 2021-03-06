const User =require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = (req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    

    let userJdid = {
        username,
        email,
        password
    }
    bcrypt.hash(userJdid.password , 10 , (err , hashed)=>{
        userJdid.password = hashed;
        User.create(userJdid,(error , user)=>{
            if (error){
                const registrationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                req.flash('registrationErrors',registrationErrors)
                req.flash('data',req.body)
                return res.redirect('/auth/register')
            }
            console.log('user created');
            res.redirect('/')
        })
    })

    
    
}