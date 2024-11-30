const validator = require("validator")
const verifyLoginData = (cred)=>{
    const {email,password} = cred;
    if(!email || !password) return {status : false, error: "All fields are required"}
    if(!validator.isEmail(email)) return {status : false, error: "Enter valid e-mail"}
    return {status : true, error:null}
}
module.exports = verifyLoginData;