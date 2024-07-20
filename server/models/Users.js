const mongoose =require('mongoose')

const userSchma=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const userModel=mongoose.model('users', userSchma)
module.exports=userModel