const express = require("express");
const dotenv = require("dotenv");
const connectToDb = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const loggerMiddleware = require("./middleware/loggerMiddleware");

dotenv.config();
const app = express();
app.use(express.json());
const PORT=process.env.PORT; 
app.use(loggerMiddleware);
//routes
app.use("/user",userRoutes);
app.use("/admin",adminRoutes);
//start server
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    connectToDb();
});