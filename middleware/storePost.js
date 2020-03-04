module.exports = (req , res , next)=>{
    if (!req.files.image || !req.body.username || !req.body.title || !req.body.subtitle ){
        return res.redirect('/post/new')
    }
    next()
}