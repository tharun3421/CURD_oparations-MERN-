const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const userModel=require('./models/Users')

const app=express();

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://tharun:Tharun342@mern.f2rc2sc.mongodb.net/')

app.get('/',(req,res)=>{
    userModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id
    userModel.findById(_id=id)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id
    userModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.post('/create',(req,res)=>{
    userModel.create(req.body)
    .then(user=> res.json(user))
    .catch(err=>res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id
    userModel.findByIdAndDelete({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.listen(5000,()=>{
    console.log("server is running")
})