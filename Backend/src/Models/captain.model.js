const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const captainSchema = new mongoose.Schema({

    fullname:{
        firstname:{
            type: String,
            required : true,
            trim : true,
            minlength : [3, 'First name must be atleast 3-character long']
        },
        lastname : {
            type: String,
            trim : true,
        }
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        minlength : [5, 'valid e-mail is required']
    },
    password : {
        type : String,
        required : true,
        trim : true,
        minlength:[8,'Password must be at-least 8-characters long'],
        select: false
    },
    socketId : {
        type : String,

    },
    status: {
        type: String,
        enum : ['active', 'inactive'],
        default : 'inactive'
    },
    vehicle : {
        color : {
            type : String,
            required : true,
            minlength: [3, 'Color must be atleast 3-characters long']
        },
        plate : {
            type : String,
            reqired : true,
            minlength : [9, 'Number plate shaold have atleast 9-characters']
        },
        capacity : {
            type: Number,
            required: true,
            minlength : [1, 'capacity must be atleast 1']
        },
        vehicleType:{
            type : String,
            required : true,
            enum : ["bike", "car", "auto"]
        }
    },
    location:{
        lat:{
            type : Number
        },
        lng:{
            type : Number
        }
    }
})
captainSchema.methods.getJWT = function(){
    const token = jwt.sign({_id : this._id}, process.env.SECRET_KEY,{expiresIn:'7d'});
    return token
}
captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}
captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}
const Captain = mongoose.model("Captain", captainSchema);
module.exports = Captain;