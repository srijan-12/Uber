const Ride = require("../Models/ride.model.js");
const { getTravelTime } = require("./maps.service.js")
const crypto = require('crypto');

async function getFare(pickup, dropoff){
    try{
        if(!pickup || pickup.length<3){
            throw new Error("The pickup address should be atleast 3-characters long")
        }
        if(!dropoff || dropoff.length<3){
            throw new Error("The pickup address should be atleast 3-characters long")
        }
        const distanceTime = await getTravelTime(pickup, dropoff);
        // return distanceTime   //{ travelTime: '35 minutes', travelDistance: '45.18 km' }
        const Basefare ={
            car: 50,
            bike : 20,
            auto : 30
        }

        const perKMRate = {
            car: 15,
            bike : 8,
            auto : 10
        }

        const perMinuteRate = {
            car: 3,
            bike : 1.5,
            auto : 2
        }


const travelTimeMinutes = parseFloat(distanceTime.travelTime.split(' ')[0]);
const travelDistanceKM = parseFloat(distanceTime.travelDistance.split(' ')[0]);

const fare = {
  car: Math.floor(Basefare.car + travelDistanceKM * perKMRate.car + travelTimeMinutes * perMinuteRate.car),
  bike: Math.floor(Basefare.bike + travelDistanceKM * perKMRate.bike + travelTimeMinutes * perMinuteRate.bike),
  auto: Math.floor(Basefare.auto + travelDistanceKM * perKMRate.auto + travelTimeMinutes * perMinuteRate.auto),
};
return fare;
    }catch(err){
        console.log(err.message)
    }
}

function generateOTP(num) {
    if (!Number.isInteger(num) || num <= 0) {
        throw new Error("The number of digits must be a positive integer");
    }

    const otp = crypto
        .randomInt(0, Math.pow(10, num))
        .toString()
        .padStart(num, '0');

    return otp;
}

async function createRide(pickup, dropoff, user, vehicleType) {
    try{
        if(!pickup || !dropoff || ! user || ! vehicleType){
            throw new Error("All fields are required")
        }
        if(pickup.length < 3){
            throw new Error("Enter valid pickup location")
        }
        if(dropoff.length < 3){
            throw new Error("Enter valid dropoff location")
        }
        if(!user){
            throw new Error("Please login again")
        }
        if(!["car", "bike", "auto"].includes(vehicleType)){
            throw new Error("Please choose valid Vehicle")
        }
        const fare = await getFare(pickup, dropoff);
        const newRideObj = {
            user,
            pickup,
            dropoff,
            vehicleType,
            fare : fare[vehicleType],
            otp : generateOTP(6)
        }
        const ride = new Ride(newRideObj);
        return ride;
    }catch(err){
        return err.message;
    }
}


module.exports = {getFare, createRide};