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
module.exports = userControllerRegister;