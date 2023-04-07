const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.DATABASE;
mongoose.set('strictQuery',false);
mongoose.connect(db)
.then(()=>{console.log('your connection is successfull')})
.catch((err)=>{console.log(`your connection is ${err}`)})