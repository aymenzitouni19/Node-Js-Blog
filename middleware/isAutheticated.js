const sess = require('express-session')
module.exports = (req,res,next)=>{
    if (req.session.id){
        console.log(req.session.id)
        res.redirect('/')
        
    }else{
        next()
    }
    
    
}