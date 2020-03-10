module.exports = (req,res)=>{
    if (req.session.id){
        res.redirect('/')
    }else{
        res.render('login')
    }
    
}