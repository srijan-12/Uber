const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const userRouter = require("./src/routes/user.route.js")
const captainRouter = require("./src/routes/captain.route.js")
const express = require("express");
const cookieParser = require("cookie-parser")




const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/user", userRouter)
app.use("/captain", captainRouter);



module.exports = app;