const mongoose =require("mongoose");
//schema
const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
    mobileNumber:{type:String},
    gender:{type:String},
    role:{type:String,enum:["admin","customer"],default:"customer"}
});
//model
const User = new mongoose.model("User",userSchema);
module.exports = User;

