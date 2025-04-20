const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({

     shortid:{ 
        type:String,
        required:true,
        unique:true,
     },
     redirectURL:{
        type:String,
        required:true,
     },
     vistHistory:[{timestamp:{type:Number}}],
     createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'users'
     }
},{timestamps:true});


 


const URL = mongoose.model('urls',urlSchema);
module.exports={URL};
