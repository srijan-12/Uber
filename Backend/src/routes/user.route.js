const express = require("express");
const userRouter = express.Router();
const validateRegister = require("../utilities/verifyRegisterData.js")
const userControllerRegister = require("../controller/user.controller.js")
const verifyLoginData = require("../utilities/verifyLogindata.js")

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
        return res.status(200).json({"user": result1.createdUser, "token": result1.token})
    }catch(err){
        return res.status(400).json({"error is this " : err.message});
    }
})



userRouter.post("/login", async(req,res)=>{
    try{
        const {email, password} = req.body;
        const cred = {email, password};
        const result = await verifyLoginData(cred);
        if(result.error !=null){
            throw new Error("unregistered user");
        }
        const foundUser = result.user;
        const ismatch = await foundUser.comparePassword(password);
        if(!ismatch){
            throw new Error("Invalid credentials");
        }
        const token = await foundUser.getJWT();
        return res.status(200).json({status: "loggedin", token})
    }catch(err){
        return res.status(400).json({"error is this " : err.message})
    }
})


module.exports = userRouter;