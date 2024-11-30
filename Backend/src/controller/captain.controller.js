const Captain = require("../Models/captain.model");
const bcrypt = require("bcrypt")

const captainControllerRegister = async(inputObject) =>{
    const {fullname,email,password,vehicle} = inputObject;
    const hashpass = await Captain.hashPassword(password);
    const newCaptain = new Captain({fullname, email, password : hashpass, vehicle});
    const token = await newCaptain.getJWT()
    await newCaptain.save()
    return {createdUser : newCaptain, token : token, status : true, error : null};
}


const captainControllerLogin = async(inputData)=>{
    const{email, password} = inputData;
    const foundUser = await Captain.findOne({email:email}).select('+password');
    if(!foundUser){
        return {status: false, error: "un-authorized", user: null}
    }
    const isMatch = await foundUser.comparePassword(password);
    if(isMatch){
        const token = await foundUser.getJWT();
        return {status: true, error: null, user : foundUser, token};
    }
    
    return {status: false, error: "un-authorized", user: null}
}

module.exports = {captainControllerRegister, captainControllerLogin};