const mongoose = require('mongoose');
const data = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

module.exports=mongoose.model('myschema',data)