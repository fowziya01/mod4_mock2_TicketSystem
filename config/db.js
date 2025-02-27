const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectToDb = async()=>{
    try{
await mongoose.connect(process.env.MONGO_URL);
console.log("connected to db");
    }catch(err){
        console.log("Error in connecing db");

    }
};
module.exports=connectToDb;
