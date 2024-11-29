const User = require("../Models/user.model.js")
const validator = require("validator")
const verifyLoginData = async(cred)=>{
    const {email,password} = cred;
    if(!email || !password) return {status : false, error: "All fields are required"}
    if(!validator.isEmail(email)) return {status : false, error: "Enter valid e-mail"}
    return {status : true, error:null}
}
module.exports = verifyLoginData;