const express = require('express');
const app = express();
const User = require('./schema');
require('./db')
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// post request
app.post('/',async(req,res)=>{
    try {
        const{name,email,password}=req.body;
        const data =  new User({name,email,password});
        const fulldata = await data.save();
        res.status(201).json({message:fulldata})
    } catch (error) {
        console.log(error)
    }
})


//get request
app.get('/',async(req,res)=>{
    try {
        const fulldata = await User.find();
        res.status(200).json({message:fulldata})
    } catch (error) {
        console.log(error)
    }
})


//updata data
app.patch('/:id',async(req,res)=>{
    try {
        const update =await User.findOneAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({message:'your user is update',update})
    } catch (error) {
        console.log(error)
    }
})

//delete user
app.delete('/:id',async(req,res)=>{
    try {
        const deleteuser = await User.findByIdAndDelete(req.params.id,req.body);
        res.status(200).json({message:'your user is delete',deleteuser})
    } catch (error) {
        console.log(error)
    }
})


module.exports=app