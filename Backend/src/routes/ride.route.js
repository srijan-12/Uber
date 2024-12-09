const express = require("express");
const { authUser } = require("../middlewares/auth.middleware");
const rideRouter = express.Router();
const {createRide} = require("../utilities/ride.service.js")


rideRouter.post("/create", authUser, async(req,res)=>{
    try{
        const {pickup, dropoff, vehicleType} = req.body;
        const user = req.user;
    
        const result = await createRide(pickup, dropoff, user, vehicleType);
        res.status(200).json({result : result, error: null})
    }catch(err){
        res.status(400).json({error: err.message})
    }

})

module.exports = rideRouter;