const jwt = require("jsonwebtoken");
const authMiddleware = (req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1];
   if (!token) return res.status(401).json({msg:"unauthorized"});
try{
const decoded = jwt.verify(token,"shhhh");
req.userId = decoded.userId;
next();
}catch(err){
res.status(403).json({msg:"Forbidden"});
}
};

// role based middleware

const roleAuthMiddleware = (roles)=>(req,res,next)=>{
    if(!roles.includes(req.user.role)){
        res.status(403).json({msg:"Access Denied"});

    }
    next();

};
 module.exports = {authMiddleware,roleAuthMiddleware};
