const bcrypt = require('bcryptjs')
const User = require('../models/User')
const expressSession = require('express-session')
module.exports = async (req,res)=>{
    const {email,password}=req.body
    await User.findOne({email}, (error,user)=>{
        if(user){
            console.log(user._id)
            bcrypt.compare(password , user.password , (error , result)=>{
                if (result){
                    req.session.id = user._id
                    res.redirect('/')
                }
                else{
                    res.redirect('/')
                }
            })
        }
        else{
            res.redirect('/auth/login')
        }
    })
    
    
}