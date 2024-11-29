const User = require("../Models/user.model.js")
const createUser = async (userInput) =>{
    const {fullname,email,password} = userInput;
    if(!fullname.firstname || !email || !password){
        throw new Error("All fields are required");
    }
    const founduser = await User.findOne({email:email});
    if(founduser){
        throw new Error("User is already registered");
    }
    const  newUser = new User({
        fullname,
        email,
        password
    })
    return newUser
}
module.exports = createUser