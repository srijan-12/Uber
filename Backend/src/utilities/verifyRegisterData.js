const validator = require("validator");
const validateRegister = (userObj) =>{
    const {fullname, email,password} = userObj;
    try{
        if(!fullname.firstname || fullname.firstname.length < 3){
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
module.exports = validateRegister;