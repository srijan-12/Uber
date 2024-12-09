const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const userRouter = require("./src/routes/user.route.js")
const captainRouter = require("./src/routes/captain.route.js")
const mapRouter = require("./src/routes/map.route.js");
const express = require("express");
const cookieParser = require("cookie-parser");
const rideRouter = require("./src/routes/ride.route.js");




const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/user", userRouter)
app.use("/captain", captainRouter);
app.use("/maps",mapRouter);
app.use("/ride", rideRouter);



module.exports = app;