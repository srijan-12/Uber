const express = require("express");
const userRouter = express.Router();
const {validateRegister} = require("../utilities/verifyRegisterData.js")
const {userControllerRegister, userControllerLogin} = require("../controller/user.controller.js")
const verifyLoginData = require("../utilities/verifyLogindata.js")
const {authUser} = require("../middlewares/auth.middleware.js")


userRouter.post("/register", async (req,res)=>{
    try{
        const{fullname, email,password} = req.body;
        const inputObject = {fullname, email,password}
        const result = validateRegister(inputObject);
        if(result.error!=null){
            throw new Error(`Validation error : ${result.error.message}`)
        }
        const result1 = await userControllerRegister(inputObject);
        if(result1.error != null){
            throw new Error(`user creation error : ${result1.error.message}`)
        }
        res.cookie("token", result1.token,{expiresIn : "7d"})
        return res.status(200).json({user: result1.createdUser, token: result1.token})
    }catch(err){
        return res.status(400).json({error: err.message});
    }
})



userRouter.post("/login", async(req,res)=>{
    try{
        const {email, password} = req.body;
        const cred = {email, password};
        const result = await verifyLoginData(cred);
        if(result.error !=null){
            throw new Error(result.error);
        }
        const result1 = await userControllerLogin(cred);
        if(result1.error != null){
            throw new Error(result1.error);
        }
        res.cookie("token", result1.token,{expiresIn : "7d"})
        return res.status(200).json({user: result1.user, token: result1.token})
    }catch(err){
        return res.status(400).json({error: err.message});
    }
})

userRouter.get("/profile", authUser,async(req,res)=>{
    if(req.user){
        res.status(200).json({status : true, user : req.user})
    }else{
        res.status(400).json({status : false, user : null})
    }
})



userRouter.post("/logout", authUser, async(req,res)=>{
   try{
        req.cookies.token = null;
        res.clearCookie("token");
        res.status(200).json({status: true, message: "logged out", error : null})
   }catch(err){
        return res.status(400).json({"error is this " : err.message});
   }

})

module.exports = userRouter;