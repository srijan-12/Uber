const User = require("../Models/user.model.js")
const validator = require("validator")
const verifyLoginData = async(cred)=>{
    const {email,password} = cred;
    if(!email || !password) throw new Error("All fields are required!")
    if(!validator.isEmail(email)) throw new Error("enter valid e-mail!")
    const foundUser = await User.findOne({email: email}).select('+password');
    console.log(foundUser,"this is found user");
    if(!foundUser){
        return {status: false, error: "user not found", user: null}
    }
    return {status: true, error: null, user : foundUser};
}
module.exports = verifyLoginData;