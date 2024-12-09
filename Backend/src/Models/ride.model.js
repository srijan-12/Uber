const mongoose = require("mongoose");
const User = require("./user.model");
const Captain = require("./captain.model");
const { trim } = require("validator");
const validator = require("validator");

const rideSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:User
    },
    captain:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Captain
    },
    pickup:{
        type: String,
        required: true,
        trim : true,
        validator(value){
            if(value.length < 3){
                throw new Error("The pickup address should be atleast 3-characters long")
            }
        }
    },
    dropoff:{
        type: String,
        required: true,
        trim : true,
        validator(value){
            if(value.length < 3){
                throw new Error("The pickup address should be atleast 3-characters long")
            }
        }
    },
    vehicleType:{
        type: String,
        enum: ["car", "bike", "auto"],
        required : true
    },
    fare:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        enum : ["pending", "accepted", "ongoing", "completed", "cancelled"],
        default : "pending"
    },
    duration:{
        type: Number
    },
    distance:{
        type: Number
    },
    paymentId:{
        type: String
    },
    orderId:{
        type: String
    },
    signatureId:{
        type: String
    },
    otp:{
        type: String,
        select: false,
        required : true
    }
})

const Ride = mongoose.model("Ride", rideSchema);
module.exports = Ride;