const express = require("express");
const validateRegister = require("../utilities/verifyRegisterData");
const captainRouter = express.Router();
const {validateRegisterCaptain} = require("../utilities/verifyRegisterData.js")
const {captainControllerRegister, captainControllerLogin} = require("../controller/captain.controller.js");
const verifyLoginData = require("../utilities/verifyLogindata.js");
const {authCaptain} = require("../middlewares/auth.captain.middleware.js")

captainRouter.post("/register",async (req,res)=>{
    try{
        const {fullname,email,password,vehicle} = req.body;
        const userInput = {fullname,email,password,vehicle}
        const result = await validateRegisterCaptain(userInput);
        if(result.error!=null){
            throw new Error(`Validation error : ${result.error.message}`)
        }
        const result1 = await captainControllerRegister(userInput);
        res.cookie("token", result1.token,{expiresIn : "7d"})
        return res.status(200).json({user: result1.createdUser, token: result1.token})
    }catch(err){
        return res.status(400).json({error: err.message});
    }
})


captainRouter.post("/login", async(req,res)=>{
    try{
        const{email, password} = req.body;
        const userInput = {email, password};
        const result = verifyLoginData(userInput);
        if(result.error != null){
            throw new Error(result.error)
        }
        const result1 = await captainControllerLogin(userInput);
        if(result1.error != null){
            throw new Error(result1.error);
        }
        res.cookie("token", result1.token,{expiresIn : "7d"})
        return res.status(200).json({status: "loggedin", token: result1.token, user : result1.user})
    }catch(err){
        return res.status(400).json({"error is this " : err.message});
    }
})


captainRouter.get("/profile",authCaptain, async(req,res)=>{
    if(req.user){
        res.status(200).json({status : true, user : req.user})
    }else{
        res.status(400).json({status : false, user : null})
    }
})


captainRouter.post("/logout", authCaptain, async(req,res)=>{
    try{
        req.cookies.token = null;
        res.clearCookie("token");
        res.status(200).json({status: true, message: "logged out", error : null})
   }catch(err){
        return res.status(400).json({"error is this " : err.message});
   }
})

module.exports = captainRouter;