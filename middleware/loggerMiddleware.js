const loggerMiddleware=(req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const timeStamp = new Date().toISOString();
    console.log(`${method} ${url} ${timeStamp}`);
    next();

}
module.exports = loggerMiddleware;