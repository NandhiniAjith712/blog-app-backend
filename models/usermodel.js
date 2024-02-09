const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:String,
    age:String,
    mobileno:String,
    address:String,
    pincode:String,
    mailid:String,
    password:String
})

module.exports= mongoose .model("user_entry",userSchema)