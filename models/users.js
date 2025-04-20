const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(

  {  username:{
        type:String,
        required:true,
       
    },

    email:{
        type:String,
        required:true,
        unique:true,

    },
    role:{
        type:String,
        required:true,
        default:"NORMAL",

    },

    password:{
        type:String,
        required:true,
       
    }},{timestamps:true}
)


const Users = mongoose.model("users",userSchema);
module.exports = Users;

