const bcrypt = require('bcryptjs')
const User = require('../models/User')
module.exports = async (req,res)=>{
    const {email,password}=req.body
    await User.findOne({email}, (error,user)=>{
        if(user){
            bcrypt.compare(password , user.password , (error , result)=>{
                if (result){
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