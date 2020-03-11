const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required : true,
        unique : [true, 'please provide ur username'] ,
    },
    email : {
        type: String,
        unique : true,
        required : [true, 'please provide ur mail']  ,
    },
    password : {
        type: String,
        required : [true, 'please provide ur password'] ,
    }
})








module.exports = mongoose.model('User',UserSchema)