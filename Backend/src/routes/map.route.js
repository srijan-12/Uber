const express = require("express");
const mapRouter = express.Router();
const {authUser} = require("../middlewares/auth.middleware.js");
const {getCoordinatesFromOSM, getTravelTime, getSuggestions} = require("../utilities/maps.service.js");
const { getFare } = require("../utilities/ride.service.js");

mapRouter.get("/get-co-ordinates", authUser, async(req,res)=>{
    const{address} = req.query;
    try{   
        if(!address || !address.length>=3){
            throw new Error("Valid address is required")
        }
        const result = await getCoordinatesFromOSM(address);
        res.status(200).json({result, error:null});
    }catch(err){
        res.status(400).json({result:null, error:err});
    }
})

mapRouter.get("/get-directionTime", authUser, async(req,res)=>{
    const {address1, address2} = req.query;
    try{
        if(!address1 || !address1.length>=3){
            throw new Error("Valid address is required")
        }
        if(!address1 || !address1.length>=3){
            throw new Error("Valid address is required")
        }
        const result = await getTravelTime(address1, address2);
        res.status(200).json({result, error:null});
    }catch(err){
        res.status(400).json({result:null, error:err});
    }
})


mapRouter.get("/get-suggestions", authUser, async(req,res)=>{
    const {input} = req.query;
    try{
        const result = await getSuggestions(input);
        res.status(200).json({result, error:null});
    }catch(err){
        res.status(400).json({result:null, error:err});
    }
})


mapRouter.post("/get-fare", authUser, async(req,res)=>{
    try{
        const {pickup, dropoff} = req.body;
        if(pickup.length < 3 || dropoff.length < 3){
            throw new Error("Enter valid addresses")
        }
        const user = req.user;
    
        const result = await getFare(pickup, dropoff);
        res.status(200).json({result : result, error: null})
    }catch(err){
        res.status(400).json({error: err.message})
    }

})



module.exports = mapRouter;