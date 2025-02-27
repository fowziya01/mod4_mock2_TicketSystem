const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// 
const register = async(req,res)=>{
    try{
const {name,email,password,mobileNumber,gender,role} =req.body;
  const existingUser = await User.findOne({email});
  if(existingUser){
 return  res.status(400).json({msg:"User Already Registered"});
   }
   //hash password
   const hashedPassword = await bcrypt.hash(password,10);
   //add new user
   const user = await User.create({...req.body,password:hashedPassword});
   res.status(200).json({msg:"User Registered",user});
 }catch(error){
  res.status(400).json({msg:error});

    }
}

// login user
const login = async(req,res)=>{
    try{
const {email,password}=req.body;
const user = await User.findOne({email});
if(!user){
return  res.status(400).json({msg:"User NOt Registered"});
 }
 const checkPassword = await bcrypt.compare(password,user.password);
 if(!checkPassword) {
    return res.status(400).json({msg:"Invalid Password"});
 }
 //token generate
 const token = jwt.sign({userId:user._id},"shhhh",{expires:"1h"});
 res.status(200).json({msg:"Login success",token});
    }catch(err){
        res.status(400).json({msg:err});

    }
};
module.exports = {register,login};
