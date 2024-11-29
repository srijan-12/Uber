const jwt = require("jsonwebtoken");
const User = require("../Models/user.model");
module.exports.authUser = async(req,res,next)=>{
    try{
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
        if(!token) {
            throw new Error("un-authorized");
        }
    
        const decodedUserId =  jwt.verify(token, process.env.SECRET_KEY);
        const foundUser = await User.findById(decodedUserId);
        res.user = foundUser;                      
        next();
    }catch(err){
        res.status(400).json({error:err.message})
    }
}   