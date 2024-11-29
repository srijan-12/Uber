const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type : String,
            trim : true,
            required : true,
            minlength : [3, `First name must be atleast 3-characters long..!`]
        },
        lastname:{
            type : String,
            trim : true
        }
    },
    email : {
        type: String,
        trim : true,
        required : true,
        unique : true,
        minlength : [5, 'valid e-mail is required']
    },
    password : {
        type: String,
        trim : true,
        required : true,
        select : false
    },
    socketId : {
        type: String,
    }
},{
    timestamps:true
});
userSchema.methods.getJWT = async function(){
    const token = await jwt.sign({_id : this._id}, process.env.SECRET_KEY,{expiresIn: "7d"})
    return token;
}
userSchema.methods.comparePassword = async function(){
    return await bcrypt.compare(password, this.password);
}
userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}
const User = mongoose.model("User",userSchema);
module.exports = User