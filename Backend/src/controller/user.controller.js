const User = require("../Models/user.model.js");
const createUser = require("../utilities/createUser.js")


const userControllerRegister = async(userInput)=>{
    const {fullname, email,password} = userInput;


    const newUser = await createUser(userInput);

    const hashedPass = await User.hashPassword(password);
    newUser.password = hashedPass;
    await newUser.save();
    const token = await newUser.getJWT();

    return {createdUser : newUser, token : token, status : true, error : null};
}


//route-> sanitization -> user exists -> credentials true 
const userControllerLogin = async(cred)=>{
    const {email, password} = cred;
    const foundUser = await User.findOne({email: email}).select('+password');
    if(!foundUser){
        return {status: false, error: "un-authorized", user: null}
    }
    const isMatch = await foundUser.comparePassword(password);
    if(isMatch){
        const token = await foundUser.getJWT();
        return {status: true, error: null, user : foundUser, token};

    }
    return {status: false, error: "un-authorized", user : null};
    
}

module.exports = {userControllerRegister, userControllerLogin};