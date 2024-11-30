const validator = require("validator");
const Captain = require("../Models/captain.model");
const User = require("../Models/user.model");
const validateRegister = async(userObj) =>{
    const {fullname, email,password} = userObj;
    try{
        const foundUser = await User.findOne({email:email})
        if(foundUser){
            throw new Error("User already registered")
        }
        if(!fullname?.firstname || fullname?.firstname.length < 3){
            throw new Error("First name must be 3-charscters long")
        }if(!email || !validator.isEmail(email)){
            throw new Error("valid e-mail is required")
        }if(!password || !validator.isStrongPassword(password)){
            throw new Error("strong password is required")
        }
        return {status: true, error: null}

    }catch(err){
        return {status: false, error : err}

    }
}



const validateRegisterCaptain = async(userObj) =>{
    const {fullname, email,password,vehicle} = userObj;
    try{
        const foundUser = await Captain.findOne({email:email})
        if(foundUser){
            console.log(foundUser)
            throw new Error("Captain already registered")
        }
        if(!fullname?.firstname || fullname?.firstname.length < 3){
            throw new Error("First name must be 3-charscters long")
        }if(!email || !validator.isEmail(email)){
            throw new Error("valid e-mail is required")
        }if(!password || !validator.isStrongPassword(password)){
            throw new Error("strong password is required")
        }if(!vehicle?.color || !vehicle?.plate || !vehicle?.capacity){
            throw new Error("All vehicle info is required")
        }if(vehicle?.capacity <=0 || vehicle?.capacity >7){
            throw new Error("Enter valid capacity")
        }


        return {status: true, error: null}

    }catch(err){
        return {status: false, error : err}

    }
}

module.exports = {validateRegister, validateRegisterCaptain};